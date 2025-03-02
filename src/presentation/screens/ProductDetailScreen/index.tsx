import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Button } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from 'presentation/navigation/types';
import { useVisitedProductHistory } from '@hooks/useVisitedProductHistory';

type ProductDetailRouteProp = RouteProp<MainStackParamList, 'ProductDetail'>;

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const { addVisitedProduct } = useVisitedProductHistory();
  const { item } = route.params;

  useEffect(() => {
    addVisitedProduct(item);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ProductDetailScreen</Text>
        <Text style={styles.text}>Ürün ID: {item.id}</Text>
        <Text style={styles.text}>Fırsatlara hemen göz atmak ister misin?</Text>
        <Button icon={'cart-outline'} mode="contained">
          Alışverişe Başla
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;