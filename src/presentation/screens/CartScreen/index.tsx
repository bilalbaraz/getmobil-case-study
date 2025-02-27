import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Button } from 'react-native-paper';

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sepetin şu an boş</Text>
        <Text style={styles.text}>Fırsatlara hemen göz atmak ister misin?</Text>
        <Button icon={'cart-outline'} mode="contained">
          Alışverişe Başla
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;