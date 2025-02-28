import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import styles from './styles';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Cihaz ara"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode={'bar'}
        style={{margin: 10, borderRadius: 5}}
      />
      <View style={styles.content}>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;