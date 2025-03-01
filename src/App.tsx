import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { configureFonts, MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { COLORS } from '@constants/colors';
import BottomTabNavigator from './presentation/navigation/BottomTabNavigator';
import { NetworkUtils } from '@utils/network';
import { FONT_CONFIG } from './config/font';
import ConnectionStatus from './presentation/components/ConnectionStatus';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    secondary: COLORS.black,
    background: COLORS.background,
  },
  fonts: configureFonts({config: FONT_CONFIG}),
};

const App = () => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetworkUtils.addConnectionListener(setIsOnline);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
        {isOnline === null
            ? <ConnectionStatus status="checking" />
            : isOnline
            ? (
              <NavigationContainer>
                <BottomTabNavigator />
              </NavigationContainer>
            )
            : <ConnectionStatus status="offline" />}
        </SafeAreaProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;