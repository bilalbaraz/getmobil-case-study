import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Button, Divider, IconButton } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '@navigation/types';
import { COLORS } from '@constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ManageProductFavorites } from '@usecases/ManageProductFavorites';
import { useVisitedProductHistory } from '@hooks/useVisitedProductHistory';
import CustomImage from '@components/CustomImage';
import { useTheme } from '@context/ThemeContext';
import ProductSpecification from '@components/ProductSpecification';

type ProductDetailRouteProp = RouteProp<MainStackParamList, 'ProductDetail'>;

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const insets = useSafeAreaInsets();
  const { item } = route.params;
  const [isFavorited, setIsFavorited] = useState(false);
  const { addVisitedProduct } = useVisitedProductHistory();
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? COLORS.dark.text : COLORS.light.text;
  const backgroundColor = isDarkMode ? COLORS.dark.background : COLORS.light.background;

  useEffect(() => {
    loadInitialData();
    addVisitedProduct(item);
  }, []);

  const loadInitialData = async () => {
    await checkIfFavorited();
  };

  const checkIfFavorited = async () => {
    const favorited = await ManageProductFavorites.checkIfFavorited(item.id);
    setIsFavorited(favorited);
  };

  const toggleFavorite = async () => {
    const newStatus = await ManageProductFavorites.toggleFavorite(item.id, isFavorited);
    setIsFavorited(newStatus);
  };

  const handleAddToCart = () => {
    Alert.alert('Ürün sepete eklendi', item.title);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.imageContainer}>
          <CustomImage
            source={{ uri: item.images[0] }}
            style={styles.productImage}
          />
          <View style={styles.favoriteButtonContainer}>
            <IconButton
              icon={isFavorited ? 'heart' : 'heart-outline'}
              iconColor={isFavorited ? COLORS.error : textColor}
              size={24}
              onPress={toggleFavorite}
              style={styles.favoriteButton}
            />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={[styles.brand, { color: textColor }]}>{item.brand}</Text>
          <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>

          <View style={styles.priceRatingContainer}>
            <Text style={[styles.price, { color: textColor }]}>{item.price} TL</Text>
            <View style={styles.ratingContainer}>
              <IconButton
                icon="star"
                size={16}
                iconColor="#FFD700"
                style={styles.ratingIconStyle}
              />
              <Text style={[styles.rating, { color: textColor }]}>{item.rating}</Text>
            </View>
          </View>

          <Divider style={styles.divider} />

          <Text style={[styles.sectionTitle, { color: textColor }]}>Ürün Açıklaması</Text>
          <Text style={[styles.description, { color: textColor }]}>{item.description}</Text>

          <Divider style={styles.divider} />

          <Text style={[styles.sectionTitle, { color: textColor }]}>Ürün Özellikleri</Text>
          <View style={styles.specsContainer}>
            <ProductSpecification label="Kategori:" value={item.category} textColor={textColor} />
            <ProductSpecification label="Marka:" value={item.brand} textColor={textColor} />
            <ProductSpecification label="Stok:" value={`${item.stock} adet`} textColor={textColor} />
            <ProductSpecification label="İndirim:" value={`%${item.discountPercentage}`} textColor={textColor} />
          </View>
        </View>
      </ScrollView>

      <View style={[
        styles.bottomButtonContainer,
        {
          paddingBottom: insets.bottom || 16,
          backgroundColor: backgroundColor,
          borderTopColor: isDarkMode ? '#333333' : COLORS.border,
        },
      ]}>
        <View style={styles.priceContainer}>
          <Text style={[styles.bottomPrice, { color: textColor }]}>{item.price} TL</Text>
          {item.discountPercentage > 0 && (
            <Text style={[styles.discountText, { color: textColor }]}>%{item.discountPercentage} İndirim</Text>
          )}
        </View>
        <Button
          mode="contained"
          style={styles.addToCartButton}
          icon="cart-outline"
          onPress={handleAddToCart}
          labelStyle={styles.buttonLabelStyle}
        >
          Sepete Ekle
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
