import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTransactions } from '../context/transactions';

const TransactionInputScreen = ({ navigation }) => {

    const { addTransaction, CATEGORIES } = useTransactions();
    const { colors: themeColors } = useTheme();

    const [type, setType] = useState('expense');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState(CATEGORIES.expense[0]);
    const [description, setDescription] = useState('');

    const currentCategories = CATEGORIES[type];
    const typeColor = type === 'income' ? '#4CD964' : '#FF3B30';

    const handleSubmit = () => {
        const parsedAmount = parseFloat(amount.replace(',', '.'));

        const newTransaction = {
            type,
            category,
            amount: parsedAmount,
            description,
        };

        addTransaction(newTransaction);
        
        setAmount('');
        setDescription('');
        navigation.goBack(); 
    };
    
    const handleTypeChange = (newType) => {
        setType(newType);
        setCategory(CATEGORIES[newType][0]); 
    };

    return (
        <ScrollView 
            style={{ flex: 1, backgroundColor: themeColors.background }}
            contentContainerStyle={{ padding: 20 }}
        >
            <Text style={{ fontSize: 28, fontFamily: "Jersey", marginBottom: 30, textAlign: 'center', color: "#000" }}>
                Novo Lançamento
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 25,
                        borderRadius: 30,
                        borderWidth: 2,
                        width: '48%',
                        justifyContent: 'center',
                        backgroundColor: type === 'expense' ? '#FF3B30' : '#1A1A1A',
                        borderColor: '#FF3B30',
                    }}
                    onPress={() => handleTypeChange('expense')}
                >
                    <Ionicons name="remove-circle-outline" size={20} color={type === 'expense' ? "#fff" : '#FF3B30'} />
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 8, color: type === 'expense' ? "#fff" : '#FF3B30' }}>Despesa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 25,
                        borderRadius: 30,
                        borderWidth: 2,
                        width: '48%',
                        justifyContent: 'center',
                        backgroundColor: type === 'income' ? '#4CD964' : '#1A1A1A',
                        borderColor: '#4CD964',
                    }}
                    onPress={() => handleTypeChange('income')}
                >
                    <Ionicons name="add-circle-outline" size={20} color={type === 'income' ? '#FFFFFF' : '#4CD964'} />
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 8, color: type === 'income' ? '#FFFFFF' : '#4CD964' }}>Receita</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 30, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#A0A0A0' }}>
                <Text style={{ fontSize: 36, fontWeight: 'bold', marginRight: 10, color: typeColor }}>R$</Text>
                <TextInput
                    style={{ 
                        flex: 1, 
                        fontSize: 36, 
                        fontWeight: 'bold', 
                        height: 50, 
                        padding: 0, 
                        color: "#000",
                    }}
                    placeholder="0,00"
                    placeholderTextColor={'#A0A0A0'}
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />
            </View>

            <View style={{ borderRadius: 10, borderWidth: 1, borderColor: '#A0A0A0', marginBottom: 20, overflow: 'hidden', backgroundColor: '#1A1A1A', paddingHorizontal: 10, paddingTop: Platform.OS === 'ios' ? 10 : 0 }}>
                 <Text style={{ fontSize: 12, color: '#A0A0A0' }}>Categoria:</Text>
                <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                    style={Platform.OS === 'ios' ? { width: '100%' } : { color: '#FFFFFF', width: '100%' }}
                    itemStyle={{ color: '#FFFFFF' }}
                    dropdownIconColor={'#A0A0A0'}
                >
                    {currentCategories.map(cat => (
                        <Picker.Item key={cat} label={cat} value={cat} />
                    ))}
                </Picker>
            </View>

            <TextInput
                style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#A0A0A0',
                    backgroundColor: '#1A1A1A',
                    padding: 15,
                    fontSize: 16,
                    height: 100,
                    marginBottom: 30,
                    color: '#FFFFFF',
                }}
                placeholder="Descrição (Ex: Jantar com amigos)"
                placeholderTextColor={'#A0A0A0'}
                value={description}
                onChangeText={setDescription}
                multiline={true}
            />

            <TouchableOpacity 
                style={{ padding: 18, borderRadius: 10, alignItems: 'center', backgroundColor: "#000" }} 
                onPress={handleSubmit}
            >
                <Text style={{ color: "#fff", fontSize: 18, fontWeight: 'bold' }}>
                    CONFIRMAR {type === 'expense' ? 'DESPESA' : 'RECEITA'}
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default TransactionInputScreen;