import * as React from 'react';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStackComponent from './src/routes/route';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackComponent />
    </NavigationContainer>
  );
}