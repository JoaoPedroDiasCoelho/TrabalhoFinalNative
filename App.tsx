import * as React from 'react';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Init from './src/screens/auth/Index';
import LoginScreen from './src/screens/auth/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import RootStackComponent from './src/routes/route';
import { useFonts } from 'expo-font';
import CustomTabNavigator from './src/routes/TabNavegation';
import { TransactionProvider } from './src/context/transactions';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Jersey': require('./src/assets/fonts/Jersey10-Regular.ttf'),
  });
  
  return (
    <TransactionProvider>
      <NavigationContainer>
        <RootStackComponent/>
      </NavigationContainer>
    </TransactionProvider>
  );
}