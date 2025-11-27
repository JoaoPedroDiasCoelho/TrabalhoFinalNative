import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@Monetto:Transactions';

const CATEGORIES = {
    income: [
        'Salário',
        'Investimentos',
        'Renda Extra',
        'Outros Recebimentos',
    ],
    expense: [
        'Moradia',
        'Alimentação',
        'Transporte',
        'Lazer',
        'Saúde',
        'Educação',
        'Outras Despesas',
    ],
};

interface ITransaction {
    id: string;
    type: 'income' | 'expense';
    amount: number;
    category: string;
    date: Date;
    [key: string]: any;
}

interface IContextValue {
    transactions: ITransaction[];
    isLoading: boolean;
    totalBalance: number;
    CATEGORIES: typeof CATEGORIES;
    addTransaction: (transaction: Omit<ITransaction, 'id' | 'date'>) => void;
    getFlowByType: (type: 'income' | 'expense') => number;
    getExpensesByCategory: () => Array<{ name: string; amount: number }>;
}

const TransactionContext = createContext<IContextValue | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTransactions = async () => {
            try {
                const storedTransactions = await AsyncStorage.getItem(STORAGE_KEY);
                if (storedTransactions) {
                    const parsedTransactions: ITransaction[] = JSON.parse(storedTransactions).map((t: any) => ({
                        ...t,
                        date: new Date(t.date),
                    }));
                    setTransactions(parsedTransactions);
                }
            } catch (error) {
                console.error("Erro ao carregar transações:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadTransactions();
    }, []);

    const saveTransactions = async (newTransactions: ITransaction[]) => {
        try {
            const jsonValue = JSON.stringify(newTransactions);
            await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
            setTransactions(newTransactions);
        } catch (error) {
            console.error("Erro ao salvar transações:", error);
        }
    };

    const addTransaction = (transaction: Omit<ITransaction, 'id' | 'date'>) => {
        const newTransaction: ITransaction = {
            id: Date.now().toString(),
            date: new Date(),
            ...transaction,
        };
        const newTransactionsList = [newTransaction, ...transactions];
        saveTransactions(newTransactionsList);
    };

    
    const totalBalance = transactions.reduce((acc, t) => {
        return acc + (t.type === 'income' ? t.amount : -t.amount);
    }, 0);

    const getFlowByType = (type: 'income' | 'expense') => {
        return transactions
            .filter(t => t.type === type)
            .reduce((sum, t) => sum + t.amount, 0);
    };


    const getExpensesByCategory = () => {
        const expenseTransactions = transactions.filter(t => t.type === 'expense');
        const breakdown: Record<string, number> = {};

        expenseTransactions.forEach(t => {
            const category = t.category || 'Não Categorizado';
            breakdown[category] = (breakdown[category] || 0) + t.amount;
        });

        return Object.keys(breakdown).map(category => ({
            name: category,
            amount: breakdown[category],
        }));
    };
    
    const contextValue: IContextValue = {
        transactions,
        isLoading,
        totalBalance,
        CATEGORIES,
        addTransaction,
        getFlowByType,
        getExpensesByCategory,
    };

    return React.createElement(
        TransactionContext.Provider,
        { value: contextValue },
        children
    );
};

export const useTransactions = () => {
    const context = useContext(TransactionContext);
    return context;
};