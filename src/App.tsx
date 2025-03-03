import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { NetworkUtils } from '@utils/network';
import ConnectionStatus from '@components/ConnectionStatus';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lightTheme, darkTheme } from '@config/theme';
import MainStackNavigator from '@navigation/MainStackNavigator';
import { ThemeProvider, useTheme } from '@context/ThemeContext';

const queryClient = new QueryClient();

const AppContent = () => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const unsubscribe = NetworkUtils.addConnectionListener(setIsOnline);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <SafeAreaProvider>
      {isOnline === null
          ? <ConnectionStatus status="checking" />
          : isOnline
          ? (
            <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
              <MainStackNavigator />
            </NavigationContainer>
          )
          : <ConnectionStatus status="offline" />}
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
