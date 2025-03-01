import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import BottomTabNavigator from './presentation/navigation/BottomTabNavigator';
import { NetworkUtils } from '@utils/network';
import ConnectionStatus from './presentation/components/ConnectionStatus';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { darkTheme, lightTheme } from '@config/theme';

const queryClient = new QueryClient();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetworkUtils.addConnectionListener(setIsOnline);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={lightTheme}>
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