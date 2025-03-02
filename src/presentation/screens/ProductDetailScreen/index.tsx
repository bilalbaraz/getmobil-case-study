import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, FlatList, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Button, Divider, Title } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from 'presentation/navigation/types';
import { useVisitedProductHistory } from '@hooks/useVisitedProductHistory';
import { ProductApi } from '@sources/remote/productApi';
import ProductCard from '@components/ProductCard';
import FastImage from 'react-native-fast-image';
import { COLORS } from '@constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { FavoritedProductsStorage } from '@sources/local/favoritedProductsStorage';

type ProductDetailRouteProp = RouteProp<MainStackParamList, 'ProductDetail'>;

const { width: screenWidth } = Dimensions.get('window');
const relatedProductWidth = screenWidth * 0.6; // Wider cards for horizontal scrolling
const relatedProductHeight = 240; // Slightly shorter for related products

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const { addVisitedProduct } = useVisitedProductHistory();
  const { item } = route.params;
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    addVisitedProduct(item);
    loadRelatedProducts();
    checkFavoriteStatus();
  }, [item.id]);

  const loadRelatedProducts = async () => {
    try {
      setLoading(true);
      // Get products from the same category
      const products = await ProductApi.searchProducts(item.category);
      // Filter out the current product
      const filtered = products.filter(product => product.id !== item.id);
      setRelatedProducts(filtered.slice(0, 10)); // Limit to 10 related products
    } catch (error) {
      console.error('Error loading related products:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkFavoriteStatus = async () => {
    const favoriteStatus = await FavoritedProductsStorage.isFavorited(item.id);
    setIsFavorited(favoriteStatus);
  };

  const handleToggleFavorite = async () => {
    try {
      if (isFavorited) {
        await FavoritedProductsStorage.removeFromFavorites(item.id);
        setIsFavorited(false);
      } else {
        await FavoritedProductsStorage.addToFavorites(item.id);
        setIsFavorited(true);
      }
    } catch (error) {
      console.error('Error toggling favorite status:', error);
    }
  };

  const handleAddToCart = () => {
    Alert.alert('Ürün sepete eklendi', item.title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Product Images */}
        <View style={styles.imageContainer}>
          <FastImage
            source={{ uri: item.images[0] }}
            style={styles.productImage}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.favoriteButtonContainer}>
            <Button 
              icon={() => (
                <Icon 
                  name={isFavorited ? "heart" : "heart-outline"} 
                  size={20} 
                  color={isFavorited ? COLORS.error : COLORS.text} 
                />
              )}
              mode="contained"
              style={styles.favoriteButton}
              onPress={handleToggleFavorite}
            >
              {isFavorited ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
            </Button>
          </View>
        </View>

        {/* Product Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.title}>{item.title}</Text>
          
          <View style={styles.priceRatingContainer}>
            <Text style={styles.price}>₺{item.price}</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
          
          <Divider style={styles.divider} />
          
          <Text style={styles.sectionTitle}>Ürün Açıklaması</Text>
          <Text style={styles.description}>{item.description}</Text>
          
          <Divider style={styles.divider} />
          
          <View style={styles.specsContainer}>
            <Text style={styles.sectionTitle}>Ürün Özellikleri</Text>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Kategori:</Text>
              <Text style={styles.specValue}>{item.category}</Text>
            </View>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Stok:</Text>
              <Text style={styles.specValue}>{item.stock} adet</Text>
            </View>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>İndirim Oranı:</Text>
              <Text style={styles.specValue}>%{item.discountPercentage}</Text>
            </View>
          </View>
          
          <Button 
            mode="contained" 
            style={styles.addToCartButton}
            icon="cart-outline"
            onPress={handleAddToCart}
          >
            Sepete Ekle
          </Button>
        </View>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <View style={styles.relatedProductsContainer}>
            <Title style={styles.relatedProductsTitle}>Benzer Ürünler</Title>
            <FlatList
              horizontal
              data={relatedProducts}
              renderItem={({ item: product }) => (
                <ProductCard 
                  item={product} 
                  width={relatedProductWidth}
                  height={relatedProductHeight}
                  onAddToCart={() => Alert.alert('Ürün sepete eklendi', product.title)}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.relatedProductsList}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;