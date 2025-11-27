import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Init from "../screens/auth/Index";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/HomeScreen"; // Não usado diretamente aqui, mas importado no arquivo
import DetailsScreen from "../screens/DetailsScreen";
import CustomTabNavigator from './TabNavegation'; // Assumindo que este é o nome da sua importação
import TransactionInputScreen from "../screens/TransactionInputScreen";

const Stack = createNativeStackNavigator();

function RootStackComponent() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Init" component={Init} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />

      <Stack.Screen 
        name="Home" 
        component={CustomTabNavigator} 
        options={{ headerShown: false }}
      />
      
      <Stack.Screen 
        name="Transaction" 
        component={TransactionInputScreen} 
        options={{ 
          title: 'Novo Lançamento',
          presentation: 'modal',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#FFFFFF' 
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStackComponent;