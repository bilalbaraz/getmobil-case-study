import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './presentation/screens/HomeScreen';
import CartScreen from './presentation/screens/CartScreen';
import FavoritesScreen from './presentation/screens/FavoritesScreen';
import AccountScreen from './presentation/screens/AccountScreen';

const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen name="Home" component={HomeScreen} />
          <BottomTab.Screen name="Cart" component={CartScreen} />
          <BottomTab.Screen name="Favorites" component={FavoritesScreen} />
          <BottomTab.Screen name="Account" component={AccountScreen} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;