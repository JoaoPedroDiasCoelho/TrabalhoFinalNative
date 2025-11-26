import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Init from "../screens/auth/Index";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CustomTabNavigator from './TabNavegation';

const Stack = createNativeStackNavigator();

function RootStackComponent() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Init" component={Init} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={CustomTabNavigator} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default RootStackComponent