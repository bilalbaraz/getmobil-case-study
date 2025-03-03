import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '@navigation/BottomTabNavigator';
import ProductDetailScreen from '@screens/ProductDetailScreen';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
      <MainStack.Navigator screenOptions={{headerShown: false }}>
        <MainStack.Screen name="BottomTab" component={BottomTabNavigator} />
        <MainStack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </MainStack.Navigator>
    );
};

export default MainStackNavigator;
