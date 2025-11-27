import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTransactions } from '../context/transactions';


const TransactionItem = ({ item }) => {
    const isExpense = item.type === 'expense';
    const amountColor = isExpense ? "#FF3B30" : '#4CD964';
    const iconName = isExpense ? 'arrow-down-circle' : 'arrow-up-circle';
    
    
    const dateObject = item.date instanceof Date ? item.date : new Date(item.date);
    const formattedDate = dateObject.toLocaleDateString('pt-BR');

    const displayAmount = item.amount.toFixed(2).replace('.', ',');

    return (
        <TouchableOpacity 
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
                marginBottom: 10,
                borderRadius: 10,
                backgroundColor: '#1A1A1A',
                borderColor: '#A0A0A0',
                borderWidth: 1,
            }}
        >
            <Ionicons name={iconName} size={24} color={amountColor} style={{ marginRight: 15 }} />

            <View style={{ flex: 1 }}>
                <Text 
                    style={{ fontSize: 28, fontFamily: "Jersey", color: '#FFFFFF' }}
                    numberOfLines={1}
                >
                    {item.description || item.category}
                </Text>
                <Text style={{ fontSize: 12, fontFamily: "Jersey", color: '#A0A0A0' }}>
                    {item.category} • {formattedDate}
                </Text>
            </View>

            <Text style={{ fontSize: 24, fontFamily: "Jersey", color: amountColor, marginLeft: 10 }}>
                {isExpense ? '- ' : '+ '} {`R$ ${displayAmount}`}
            </Text>
        </TouchableOpacity>
    );
};

const HistoryScreen = () => {
    const { transactions, isLoading } = useTransactions();
    const { colors: themeColors } = useTheme();
    
    const sortedTransactions = transactions.sort((a, b) => b.date.getTime() - a.date.getTime());

    return (
        <View style={{ flex: 1, backgroundColor: themeColors.background || '#000000' }}>
            <Text style={{ 
                fontSize: 36, 
                fontFamily: "Jersey", 
                padding: 20, 
                paddingBottom: 10, 
                marginTop: 40, 
                color: "#000",
                textAlign: "center"
            }}>
                Histórico de Lançamentos
            </Text>

            {isLoading ? (
                <Text style={{ color: '#A0A0A0', textAlign: 'center', marginTop: 50 }}>Carregando transações...</Text>
            ) : sortedTransactions.length === 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name="receipt-outline" size={60} color={'#A0A0A0'} />
                    <Text style={{ color: '#A0A0A0', fontSize: 18, marginTop: 10 }}>
                        Nenhum lançamento encontrado.
                    </Text>
                    <Text style={{ color: '#A0A0A0', fontSize: 14, marginTop: 5 }}>
                        Adicione sua primeira Receita/Despesa!
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={sortedTransactions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionItem item={item} />}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                />
            )}
        </View>
    );
};

export default HistoryScreen;