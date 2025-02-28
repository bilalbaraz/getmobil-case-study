import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { configureFonts, MD3LightTheme as DefaultTheme, Icon, PaperProvider } from 'react-native-paper';

import HomeScreen from './presentation/screens/HomeScreen';
import CartScreen from './presentation/screens/CartScreen';
import FavoritesScreen from './presentation/screens/FavoritesScreen';
import AccountScreen from './presentation/screens/AccountScreen';
import { COLORS } from './constants/colors';
import { FONTS } from './constants/fonts';

const BottomTab = createBottomTabNavigator();

const fontConfig = {
  displayLarge: {
    fontFamily: 'Poppins-Bold',
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: 0,
  },
  displayMedium: {
    fontFamily: 'Poppins-Bold',
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0,
  },
  displaySmall: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0,
  },
  headlineLarge: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
  },
  headlineMedium: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0,
  },
  headlineSmall: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },
  bodyLarge: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  bodyMedium: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  labelLarge: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    secondary: 'black',
  },
  fonts: configureFonts({config: fontConfig}),
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomTab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontFamily: FONTS.Poppins.regular },
              tabBarActiveTintColor: COLORS.primary,
              tabBarInactiveTintColor: "#94A3B8",
              headerShown: false,
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
              name="Home"
              component={HomeScreen}
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
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;