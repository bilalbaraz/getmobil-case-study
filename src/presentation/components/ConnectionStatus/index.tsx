import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { ConnectionStatusProps } from '@props/ConnectionStatusProps';

const ConnectionStatus: React.FC<ConnectionStatusProps> = ({ status }) => {
  if (status === 'checking') {
    return (
      <View style={styles.checkingContainer}>
        <Text style={styles.checkingText}>
          Bağlantı Durumu Kontrol Ediliyor...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>Çevrimdışı ❌</Text>
      <Text style={styles.offlineSubText}>
        İnternet bağlantınızı kontrol edip tekrar deneyin.
      </Text>
    </View>
  );
};

export default ConnectionStatus;
