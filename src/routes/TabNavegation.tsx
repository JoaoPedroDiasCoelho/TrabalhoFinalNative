import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';


function WalletScreen() {
  return <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}><Text>Carteira</Text></View>;
}
function HistoryScreen() {
  return <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}><Text>Histórico</Text></View>;
}
function ProfileScreen() {
    return <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}><Text>Perfil</Text></View>;
}

const Tab = createBottomTabNavigator();

function CustomTabNavigator() {
  return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;
                
                if (route.name === 'Home') {
                  iconName = "home-sharp";
                } else if (route.name === 'Wallet') {
                  iconName = 'wallet';
                } else if (route.name === 'History') {
                  iconName = 'timer-outline';
                } else if (route.name === 'Profile') {
                  iconName = 'person-circle-outline';
                }

                if (!iconName) iconName = 'help-circle';

                return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#aaa',
            tabBarShowLabel: false,

            tabBarItemStyle: {
                justifyContent: 'center', 
                alignItems: 'center',
                marginTop: 15
            },

            tabBarStyle: {
                backgroundColor: '#222222',
                position: 'absolute',
                marginHorizontal: 20,
                borderRadius: 30,
                height: 70, 
                borderTopWidth: 0,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 10,
                marginBottom: 30
            },
            
            headerShown: false,
        })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default CustomTabNavigator;