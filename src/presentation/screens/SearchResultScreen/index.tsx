import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import styles from './styles';
import ProductCard from '@components/ProductCard';
import { COLORS } from '@constants/colors';
import { Alert } from 'react-native';
import { useSearchHistory } from '@hooks/useSearchHistory';
import { Product } from '@models/Product';
import { DimensionsHelper } from '@utils/helpers/dimensionsHelper';
import { PerformProductSearch, PaginationInfo } from '@usecases/PerformProductSearch';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '@navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const cardWidth = DimensionsHelper.getScreenWidth() / 2.03;

type SearchResultScreenRouteProp = RouteProp<HomeStackParamList, 'SearchResult'>;
type SearchResultScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const SearchResultScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [widthAnim] = useState(new Animated.Value(DimensionsHelper.getScreenWidth() * 0.97));
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
    skip: 0,
    limit: 10,
    hasMore: true
  });

  const { searchHistory } = useSearchHistory();
  const route = useRoute<SearchResultScreenRouteProp>();
  const navigation = useNavigation<SearchResultScreenNavigationProp>();
  
  useEffect(() => {
    if (route.params?.searchQuery) {
      const queryFromParams = route.params.searchQuery;
      setSearchQuery(queryFromParams);
      resetAndSearch(queryFromParams);
    }
    else if (searchHistory && searchHistory.length > 0) {
      const latestSearchTerm = searchHistory[0];
      setSearchQuery(latestSearchTerm);
      resetAndSearch(latestSearchTerm);
    }
  }, [searchHistory, route.params]);

  const resetAndSearch = (query: string) => {
    setPaginationInfo({
      skip: 0,
      limit: 10,
      hasMore: true
    });
    
    performSearch(query);
  };

  const performSearch = async (query: string) => {
    await PerformProductSearch.executeWithPagination(
      query,
      { ...paginationInfo, skip: 0 },
      {
        setLoading,
        setProducts,
        setNoResults,
        setPaginationInfo
      }
    );
  };

  const loadMoreProducts = async () => {
    if (!paginationInfo.hasMore || loading || loadingMore) return;
    
    setLoadingMore(true);
    
    await PerformProductSearch.executeWithPagination(
      searchQuery,
      paginationInfo,
      {
        setLoading,
        setProducts,
        setNoResults,
        setPaginationInfo
      },
      true
    );
    
    setLoadingMore(false);
  };

  const handleSearch = () => {
    resetAndSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setProducts([]);
    setNoResults(false);
    navigation.navigate('Search');
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color={COLORS.primary} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexContainer}>
        <Animated.View style={{ width: widthAnim }}>
          <Searchbar
            placeholder="Cihaz ara"
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            value={searchQuery}
            mode={'bar'}
            style={styles.searchBarContainer}
            inputStyle={styles.searchBarInput}
            onClearIconPress={handleClearSearch}
          />
        </Animated.View>
      </View>
      
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
          onEndReached={loadMoreProducts}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchResultScreen;