import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Button, Searchbar } from 'react-native-paper';
import { FavoritedProductsStorage } from '@sources/local/favoritedProductsStorage';
import { ProductCardProps } from '@props/ProductCardProps';
import ProductCard from '@components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@constants/colors';
import { ProductApi } from '@sources/remote/productApi';
import { Alert } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const cardWidth = screenWidth / 2;

const FavoritesScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [favoriteProducts, setFavoriteProducts] = useState<ProductCardProps['item'][]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductCardProps['item'][]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigation = useNavigation();

  useEffect(() => {
    loadFavoriteProducts();

    const unsubscribe = navigation.addListener('focus', () => {
      loadFavoriteProducts();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(favoriteProducts);
    } else {
      const query = searchQuery.toLowerCase().trim();
      const filtered = favoriteProducts.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, favoriteProducts]);

  const loadFavoriteProducts = async () => {
    try {
      setLoading(true);
      const favoriteIds = await FavoritedProductsStorage.getFavorites();
      
      if (favoriteIds.length === 0) {
        setFavoriteProducts([]);
        setFilteredProducts([]);
        setLoading(false);
        return;
      }

      const productPromises = favoriteIds.map(id => ProductApi.fetchProductById(id));
      const products = await Promise.all(productPromises);

      const validProducts = products.filter(product => product !== null) as ProductCardProps['item'][];
      setFavoriteProducts(validProducts);
      setFilteredProducts(validProducts);
    } catch (error) {
      console.error('Error loading favorite products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFavoriteToggle = (productId: number, isFavorited: boolean) => {
    if (!isFavorited) {
      // If product was removed from favorites, update the lists
      const updatedProducts = favoriteProducts.filter(product => product.id !== productId);
      setFavoriteProducts(updatedProducts);
      
      // Also update filtered products if we're searching
      if (searchQuery.trim() !== '') {
        const updatedFiltered = filteredProducts.filter(product => product.id !== productId);
        setFilteredProducts(updatedFiltered);
      }
    }
  };

  const navigateToHome = () => {
    navigation.navigate('Home' as never);
  };

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {favoriteProducts.length > 0 && (
        <Searchbar
          placeholder="Beğendiklerimde ara"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
          iconColor={COLORS.primary}
          clearIcon="close-circle"
          onClearIconPress={clearSearch}
        />
      )}
      
      {favoriteProducts.length > 0 ? (
        <>
          {filteredProducts.length > 0 ? (
            <FlatList
              data={filteredProducts}
              renderItem={({ item }) => (
                <ProductCard 
                  item={item} 
                  width={cardWidth} 
                  onAddToCart={() => Alert.alert('Ürün sepete eklendi', item.title)}
                  onFavoriteToggle={handleFavoriteToggle}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              contentContainerStyle={styles.productList}
            />
          ) : (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>Arama sonucu bulunamadı.</Text>
            </View>
          )}
        </>
      ) : (
        <View style={styles.content}>
          <Text style={styles.text}>Henüz beğendiğiniz ürün bulunmamaktadır.</Text>
          <Button icon={'cart-outline'} mode="contained" onPress={navigateToHome}>
            Alışverişe Başla
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;