import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';

type Props = {
  navigation?: any;
};

const LoginScreen: React.FC<Props> = ({ navigation: propNavigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'PREENCHE CARALHO');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
        navigation.navigate('Home');
        Alert.alert('Sucesso', 'Login simulado efetuado.');
    }, 900);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', paddingHorizontal: 28 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={{ width: '100%', alignItems: 'flex-start' }}>
        <Text style={{ alignSelf: 'center', marginBottom: 32, fontSize: 60, fontWeight: '400', color: '#000', fontFamily: "Jersey"  }}>
          Login
        </Text>

        <Text style={{ color: '#000', marginBottom: 8, fontFamily: "Jersey", fontSize: 21 }}>Email</Text>
        <TextInput
          style={{
            width: '100%',
            height: 48,
            backgroundColor: '#fff',
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            paddingHorizontal: 14,
            marginBottom: 16,
            fontSize: 14,
          }}
          placeholder="seu@exemplo.com"
          placeholderTextColor="#444"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          importantForAutofill="yes"
        />

        <Text style={{ color: '#000', marginBottom: 8, fontFamily: "Jersey", fontSize: 21 }}>Senha</Text>
        <TextInput
          style={{
            width: '100%',
            height: 48,
            backgroundColor: '#fff',
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            paddingHorizontal: 14,
            marginBottom: 20,
            fontSize: 14,
          }}
          placeholder="••••••••"
          placeholderTextColor="#444"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#000',
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: 'center',
            marginBottom: 12,
          }}
          onPress={handleLogin}
          activeOpacity={0.85}
          disabled={loading}
        >
          <Text style={{ color: '#fff', fontSize: 28, fontFamily: "Jersey" }}>{loading ? 'Entrando...' : 'Entrar'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('Recuperar senha', 'Made in progress this funcionalidade porra')}>
          <Text style={{ color: '#000', fontSize: 18, textDecorationLine: 'underline', fontFamily: "Jersey" }}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
