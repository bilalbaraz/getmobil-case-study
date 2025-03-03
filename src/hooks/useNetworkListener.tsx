import { useEffect } from 'react';
import { Alert } from 'react-native';
import { NetworkUtils } from '@utils/network';

const useNetworkListener = () => {
    useEffect(() => {
      const unsubscribe = NetworkUtils.addConnectionListener((isConnected) => {
        if (!isConnected) {
          Alert.alert('İnternet Bağlantısı Koptu', 'Bağlantınız kesildi, lütfen kontrol edin.');
        }
      });

      return () => unsubscribe();
    }, []);
  };

  export default useNetworkListener;
