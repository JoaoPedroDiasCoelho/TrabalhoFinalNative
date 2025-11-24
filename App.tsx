import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import { RootStack } from './src/routes/route';

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}