import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Button, Searchbar } from 'react-native-paper';
import { ProductApi } from '@sources/remote/productApi';
import ProductCard from '@components/ProductCard';
import { COLORS } from '@constants/colors';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSearchHistory } from '@hooks/useSearchHistory';

const { width: screenWidth } = Dimensions.get('window');
const cardWidth = screenWidth / 2.2; // Same as in other screens

const SearchResultScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const { searchHistory } = useSearchHistory();
  
  useEffect(() => {
    // If we have search terms in history, use the most recent one
    if (searchHistory && searchHistory.length > 0) {
      const latestSearchTerm = searchHistory[0];
      setSearchQuery(latestSearchTerm);
      performSearch(latestSearchTerm);
    }
  }, []);

  const performSearch = async (query) => {
    if (!query.trim()) return;
    
    try {
      setLoading(true);
      setNoResults(false);
      
      const results = await ProductApi.searchProducts(query);
      
      if (results && results.length > 0) {
        setProducts(results);
      } else {
        setNoResults(true);
        setProducts([]);
      }
    } catch (error) {
      console.error('Error searching products:', error);
      setNoResults(true);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Searchbar
          placeholder="Cihaz ara"
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          value={searchQuery}
          style={styles.searchBar}
          iconColor={COLORS.primary}
        />
      </View>
      
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : noResults ? (
        <View style={styles.content}>
          <Text style={styles.title}>Sonuç bulunamadı</Text>
          <Text style={styles.text}>Aramanızla eşleşen ürün bulunamadı.</Text>
          <Button icon={'cart-outline'} mode="contained" onPress={navigateToHome}>
            Alışverişe Başla
          </Button>
        </View>
      ) : products.length > 0 ? (
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
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>Arama yapın</Text>
          <Text style={styles.text}>Fırsatlara hemen göz atmak ister misin?</Text>
          <Button icon={'cart-outline'} mode="contained" onPress={navigateToHome}>
            Alışverişe Başla
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchResultScreen;