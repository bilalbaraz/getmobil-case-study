import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface ConnectionStatusProps {
  status: 'checking' | 'offline';
}

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

const styles = StyleSheet.create({
  checkingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  checkingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  offlineContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
    padding: 20,
  },
  offlineText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E53E3E',
    textAlign: 'center',
  },
  offlineSubText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ConnectionStatus;
