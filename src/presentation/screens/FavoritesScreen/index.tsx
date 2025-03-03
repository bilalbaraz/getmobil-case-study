import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Button, Searchbar } from 'react-native-paper';
import { ProductCardProps } from '@props/ProductCardProps';
import ProductCard from '@components/ProductCard';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { COLORS } from '@constants/colors';
import { Alert } from 'react-native';
import { GetFavoriteProducts } from '@usecases/GetFavoriteProducts';
import { UpdateFavoriteProductsList } from '@usecases/UpdateFavoriteProductsList';
import { SearchProducts } from '@usecases/SearchProducts';
import { DimensionsHelper } from '@utils/helpers/dimensionsHelper';
import { useTheme } from '@context/ThemeContext';

const cardWidth = DimensionsHelper.getScreenWidth() / 2;

const FavoritesScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [favoriteProducts, setFavoriteProducts] = useState<ProductCardProps['item'][]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductCardProps['item'][]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? COLORS.dark.text : COLORS.light.text;

  useEffect(() => {
    loadFavoriteProducts();

    const unsubscribe = navigation.addListener('focus', () => {
      loadFavoriteProducts();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const filtered = SearchProducts.execute(favoriteProducts, searchQuery);
    setFilteredProducts(filtered);
  }, [searchQuery, favoriteProducts]);

  const loadFavoriteProducts = async () => {
    try {
      setLoading(true);
      const products = await GetFavoriteProducts.execute();
      setFavoriteProducts(products);
      setFilteredProducts(products);
    } catch (error) {
      console.error('Error loading favorite products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFavoriteToggle = (productId: number, isFavorited: boolean) => {
    if (!isFavorited) {
      const updatedProducts = UpdateFavoriteProductsList.execute(favoriteProducts, productId);
      setFavoriteProducts(updatedProducts);

      if (searchQuery.trim() !== '') {
        const updatedFiltered = UpdateFavoriteProductsList.execute(filteredProducts, productId);
        setFilteredProducts(updatedFiltered);
      }
    }
  };

  const navigateToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'BottomTab',
            state: {
              routes: [
                {
                  name: 'HomeStack',
                  state: {
                    routes: [{ name: 'Home' }],
                  },
                },
              ],
            },
          },
        ],
      })
    );
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
              <Text style={[styles.noResultsText, { color: textColor }]}>Arama sonucu bulunamadı.</Text>
            </View>
          )}
        </>
      ) : (
        <View style={styles.content}>
          <Text style={[styles.text, { color: textColor }]}>Henüz beğendiğiniz ürün bulunmamaktadır.</Text>
          <Button
            icon={'cart-outline'}
            mode="contained"
            onPress={navigateToHome}
            labelStyle={styles.buttonLabelStyle}
          >
            Alışverişe Başla
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;
