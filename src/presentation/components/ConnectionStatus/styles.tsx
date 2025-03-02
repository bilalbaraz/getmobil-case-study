import { StyleSheet } from 'react-native';

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

export default styles;
