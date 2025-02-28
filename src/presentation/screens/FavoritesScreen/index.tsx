import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Button } from 'react-native-paper';

const FavoritesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Henüz beğendiğiniz ürün bulunmamaktadır.</Text>
        <Button icon={'cart-outline'} mode="contained">
          Alışverişe Başla
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;