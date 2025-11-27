import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTransactions } from '../context/transactions';

// --- CORES PADRÃO DARK MODE/TUDO PRETO ---
const BACKGROUND_COLOR = '#000000';
const HEADER_COLOR = '#121212';
const CARD_COLOR = '#1A1A1A';
const TEXT_COLOR_PRIMARY = '#FFFFFF';
const TEXT_COLOR_SECONDARY = '#A0A0A0';
const DANGER_COLOR = '#FF3333';
const SUCCESS_COLOR = '#4CD964';
const ACCENT_COLOR = '#4A90E2';

const usuario = {
    nome: "Yuri Collodeti",
    email: "yuricollodeti@monetto.com",
    image: './src/assets/avatar.png'
};

const RecentTransactionItem = ({ item, isLast }) => {
    const isExpense = item.type === 'expense';
    const amountColor = isExpense ? DANGER_COLOR : SUCCESS_COLOR;
    const formattedAmount = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(item.amount);
    const formattedDate = item.date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

    return (
        <View style={{ marginBottom: isLast ? 0 : 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ color: TEXT_COLOR_PRIMARY, fontSize: 18, fontWeight: '600' }}>
                    {item.description || item.category}
                </Text>
                <Text style={{ color: amountColor, fontSize: 18, fontWeight: '700' }}>
                    {isExpense ? '- ' : '+ '} {formattedAmount}
                </Text>
            </View>
            <Text style={{ color: TEXT_COLOR_SECONDARY, fontSize: 12, fontWeight: '400' }}>
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
        <View style={{ flex: 1, backgroundColor: themeColors.background || BACKGROUND_COLOR }}>
            <View style={{
                height: 180,
                backgroundColor: HEADER_COLOR,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                zIndex: 0,
            }} />

            <View style={{ alignItems: 'center', marginTop: -100, marginBottom: 30, zIndex: 4}}>
                    <View style={{ 
                        width: 130, 
                        height: 130, 
                        borderRadius: 65, 
                        backgroundColor: CARD_COLOR, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        marginBottom: 10,
                        borderWidth: 4,
                        borderColor: TEXT_COLOR_PRIMARY,
                        
                    }}>
                        <Image source={require('../assets/avatar.png')} style={{width: "100%", height: "100%"}} />
                    </View>
                    
                    <Text style={{ fontSize: 48, color: "#000", fontFamily: "Jersey" }}>{usuario.nome}</Text>
                    <Text style={{ fontSize: 16, color: TEXT_COLOR_SECONDARY, marginTop: 4, fontFamily: "Jersey" }}>{usuario.email}</Text>
                </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100, marginBottom: 50}}>
                
                

                <View style={{
                    backgroundColor: CARD_COLOR,
                    borderRadius: 24,
                    padding: 24,
                    marginBottom: 20,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 8,
                }}>
                    <Text style={{ color: TEXT_COLOR_SECONDARY, fontSize: 16, fontFamily: "Jersey" }}>Saldo atual</Text>
                    <Text style={{ color: SUCCESS_COLOR, fontSize: 42, fontFamily: "Jersey", marginTop: 10, marginBottom: 5 }}>
                        {formattedBalance}
                    </Text>
                    <Text style={{ color: TEXT_COLOR_SECONDARY, fontSize: 12, fontWeight: '600' }}>
                        * Baseado em {transactions.length} lançamentos.
                    </Text>
                </View>
                
                <View style={{
                    backgroundColor: CARD_COLOR,
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
                        <Text style={{ color: TEXT_COLOR_PRIMARY, fontSize: 20, fontWeight: 'bold' }}>Transações Recentes</Text>
                        <TouchableOpacity onPress={handleSeeAllHistory}>
                            <Text style={{ color: ACCENT_COLOR, fontSize: 16, fontWeight: '700' }}>Ver tudo</Text>
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
                        <Text style={{ color: TEXT_COLOR_SECONDARY, textAlign: 'center', paddingVertical: 10 }}>
                            Nenhuma transação recente.
                        </Text>
                    )}
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", marginTop: 10 }}>
                    <TouchableOpacity onPress={handleDepositNavigation} style={{
                        backgroundColor: CARD_COLOR,
                        width: '48%',
                        paddingVertical: 18,
                        borderRadius: 16,
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: TEXT_COLOR_SECONDARY,
                    }}>
                        <Text style={{ color: TEXT_COLOR_PRIMARY, fontSize: 18, fontWeight: 'bold' }}>Lançar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};

export default ProfileScreen;