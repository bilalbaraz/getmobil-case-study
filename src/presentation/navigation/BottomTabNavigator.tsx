import { COLORS } from "@constants/colors";
import { FONTS } from "@constants/fonts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "@screens/AccountScreen";
import CartScreen from "@screens/CartScreen";
import FavoritesScreen from "@screens/FavoritesScreen";
import { Icon } from "react-native-paper";
import HomeStackNavigator from "./HomeStackNavigator";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontFamily: FONTS.Poppins.regular },
              tabBarActiveTintColor: COLORS.primary,
              tabBarInactiveTintColor: "#94A3B8",
              headerShown: false,
              animation: 'none'
            }}>
            <BottomTab.Screen
              options={{
                tabBarLabel: 'Anasayfa',
                tabBarIcon: ({ color, size }) => (
                  <Icon
                    source="home-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
              name="HomeStack"
              component={HomeStackNavigator}
            />
            <BottomTab.Screen
              options={{
                tabBarLabel: 'Sepetim',
                tabBarIcon: ({ color, size }) => (
                  <Icon
                    source="cart-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
              name="Cart"
              component={CartScreen}
            />
            <BottomTab.Screen
              options={{
                tabBarLabel: 'Favorilerim',
                tabBarIcon: ({ color, size }) => (
                  <Icon
                    source="cards-heart-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
              name="Favorites"
              component={FavoritesScreen}
            />
            <BottomTab.Screen
              options={{
                tabBarLabel: 'Hesabım',
                tabBarIcon: ({ color, size }) => (
                  <Icon
                    source="account-outline"
                    color={color}
                    size={size}
                  />
                ),
              }}
              name="Account"
              component={AccountScreen}
            />
          </BottomTab.Navigator>
    )
};

export default BottomTabNavigator;