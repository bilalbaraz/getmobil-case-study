import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import SearchResultScreen from '@screens/SearchResultScreen';
import SearchScreen from '@screens/SearchScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
      <HomeStack.Navigator screenOptions={{animationDuration: 150, headerShown: false, animation: 'slide_from_bottom' }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen name="SearchResult" component={SearchResultScreen} />
    </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;
