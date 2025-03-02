import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { NetworkUtils } from '@utils/network';
import ConnectionStatus from '@components/ConnectionStatus';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lightTheme } from '@config/theme';
import MainStackNavigator from '@navigation/MainStackNavigator';

const queryClient = new QueryClient();

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
      <PaperProvider theme={lightTheme}>
        <SafeAreaProvider>
        {isOnline === null
            ? <ConnectionStatus status="checking" />
            : isOnline
            ? (
              <NavigationContainer>
                <MainStackNavigator />
              </NavigationContainer>
            )
            : <ConnectionStatus status="offline" />}
        </SafeAreaProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;