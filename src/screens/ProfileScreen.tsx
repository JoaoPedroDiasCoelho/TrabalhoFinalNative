import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTransactions } from '../context/transactions';

const usuario = {
    nome: "João Pedro Dias",
    email: "joao@gmail.com",
    image: './src/assets/avatar.png'
};

const RecentTransactionItem = ({ item, isLast }) => {
    const isExpense = item.type === 'expense';
    const amountColor = isExpense ? '#FF3333' : '#4CD964';
    const formattedAmount = item.amount.toFixed(2).replace('.', ',');
    const formattedDate = item.date.toLocaleDateString('pt-BR');

    return (
        <View style={{ marginBottom: isLast ? 0 : 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: '600' }}>
                    {item.description || item.category}
                </Text>
                <Text style={{ color: amountColor, fontSize: 18, fontWeight: '700' }}>
                    {isExpense ? '- ' : '+ '} {formattedAmount}
                </Text>
            </View>
            <Text style={{ color: '#A0A0A0', fontSize: 12, fontWeight: '400' }}>
                {item.category} • {formattedDate}
            </Text>
        </View>
    );
};


const ProfileScreen = ({ navigation }) => {
    const { colors: themeColors } = useTheme();
    const { transactions, totalBalance } = useTransactions();
    
    const formattedBalance = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(totalBalance);

    const recentTransactions = transactions
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, 3);
        
    const handleSeeAllHistory = () => {
        navigation.navigate('History'); 
    };

    const handleDepositNavigation = () => {
        navigation.navigate('Transaction');
    };
    

    return (
        <View style={{ flex: 1, backgroundColor: themeColors.background || '#000000' }}>
            <View style={{
                height: 180,
                backgroundColor: '#121212',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                zIndex: 0,
            }} />

            <View style={{ alignItems: 'center', marginTop: -100, marginBottom: 30, zIndex: 4}}>
                    <View style={{ 
                        width: 130, 
                        height: 130, 
                        borderRadius: 65, 
                        backgroundColor: '#1A1A1A', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        marginBottom: 10,
                        borderWidth: 4,
                        borderColor: '#FFFFFF',
                        
                    }}>
                        <Image source={require('../assets/avatar.png')} style={{width: "100%", height: "100%"}} />
                    </View>
                    
                    <Text style={{ fontSize: 48, color: "#000", fontFamily: "Jersey" }}>{usuario.nome}</Text>
                    <Text style={{ fontSize: 16, color: '#A0A0A0', marginTop: 4, fontFamily: "Jersey" }}>{usuario.email}</Text>
                </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100, marginBottom: 50}}>
                
                

                <View style={{
                    backgroundColor: '#1A1A1A',
                    borderRadius: 24,
                    padding: 24,
                    marginBottom: 20,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 8,
                }}>
                    <Text style={{ color: '#A0A0A0', fontSize: 16, fontFamily: "Jersey" }}>Saldo atual</Text>
                    <Text style={{ color: '#4CD964', fontSize: 42, fontFamily: "Jersey", marginTop: 10, marginBottom: 5 }}>
                        R${formattedBalance}
                    </Text>
                    <Text style={{ color: '#A0A0A0', fontSize: 12, fontWeight: '600' }}>
                        * Baseado em {transactions.length} lançamentos.
                    </Text>
                </View>
                
                <View style={{
                    backgroundColor: '#1A1A1A',
                    borderRadius: 24,
                    padding: 24,
                    marginBottom: 20,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 8,
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>Transações Recentes</Text>
                        <TouchableOpacity onPress={handleSeeAllHistory}>
                            <Text style={{ color: '#4A90E2', fontSize: 16, fontWeight: '700' }}>Ver tudo</Text>
                        </TouchableOpacity>
                    </View>

                    {recentTransactions.length > 0 ? (
                        recentTransactions.map((t, index) => (
                            <RecentTransactionItem 
                                key={t.id} 
                                item={t} 
                                isLast={index === recentTransactions.length - 1}
                            />
                        ))
                    ) : (
                        <Text style={{ color: '#A0A0A0', textAlign: 'center', paddingVertical: 10 }}>
                            Nenhuma transação recente.
                        </Text>
                    )}
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", marginTop: 10 }}>
                    <TouchableOpacity onPress={handleDepositNavigation} style={{
                        backgroundColor: '#1A1A1A',
                        width: '48%',
                        paddingVertical: 18,
                        borderRadius: 16,
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#A0A0A0',
                    }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Lançar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};

export default ProfileScreen;