import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Searchbar } from 'react-native-paper';

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const widthAnim = useRef(new Animated.Value(200)).current;
  
    useEffect(() => {
      Animated.timing(widthAnim, {
        toValue: Dimensions.get('window').width,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, []);

  return (
    <SafeAreaView style={styles.container}>
        <Animated.View style={{ width: widthAnim }}>
            <Searchbar
            placeholder="Cihaz ara"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode={'bar'}
            autoFocus
            style={{margin: 10, borderRadius: 5, height: 50}}
            inputStyle={{fontSize: 13}}
            />
        </Animated.View>
    </SafeAreaView>
  );
};

export default SearchScreen;