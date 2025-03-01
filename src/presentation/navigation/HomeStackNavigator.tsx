import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import SearchScreen from '@screens/SearchScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
    </HomeStack.Navigator>
    )
};

export default HomeStackNavigator;