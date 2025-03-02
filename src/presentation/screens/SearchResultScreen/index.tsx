import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import styles from './styles';
import ProductCard from '@components/ProductCard';
import { COLORS } from '@constants/colors';
import { Alert } from 'react-native';
import { useSearchHistory } from '@hooks/useSearchHistory';
import { Product } from '@models/Product';
import { DimensionsHelper } from '@utils/helpers/dimensionsHelper';
import { PerformProductSearch } from '@usecases/PerformProductSearch';

const cardWidth = DimensionsHelper.getScreenWidth() / 2.2;

const SearchResultScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const { searchHistory } = useSearchHistory();
  
  useEffect(() => {
    if (searchHistory && searchHistory.length > 0) {
      const latestSearchTerm = searchHistory[0];
      setSearchQuery(latestSearchTerm);
      performSearch(latestSearchTerm);
    }
  }, [searchHistory]);

  const performSearch = async (query: string) => {
    await PerformProductSearch.execute(query, {
      setLoading,
      setProducts,
      setNoResults
    });
  };

  const handleSearch = () => {
    performSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setProducts([]);
    setNoResults(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Cihaz ara"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={handleSearch}
        style={styles.searchBar}
        iconColor={COLORS.primary}
        clearIcon="close-circle"
        onClearIconPress={handleClearSearch}
      />
      
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : noResults ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>Arama sonucu bulunamadı.</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCard 
              item={item} 
              width={cardWidth} 
              onAddToCart={() => Alert.alert('Ürün sepete eklendi', item.title)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchResultScreen;