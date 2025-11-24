import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screens: {
    Login: Login,
    Home: HomeScreen,
    Details: DetailsScreen,
  },
});