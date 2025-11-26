import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BotaoEntrar = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login'); 
  };

  return (
    <View 
      style={{
        backgroundColor: "#fff", 
        width: '50%', 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
        marginTop: 60
      }}>
      <TouchableOpacity onPress={handleLogin}>
        <Text 
          style={{ 
            fontSize: 24, 
            fontFamily: "Jersey", 
          }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotaoEntrar;