import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Searchbar, Title } from 'react-native-paper';
import PopularSearch from '@components/PopularSearch';
import RecentVisitedProduct from '@components/RecentVisitedProduct';
import SearchHistory from '@components/SearchHistory';
import { useSearchHistory } from '@hooks/useSearchHistory';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '@navigation/types';
import { usePopularSearches } from '@hooks/usePopularSearches';

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const dummyRecentVisitedProduct = [
  { id: "1", name: "Apple iPhone 15 Pro Max 256 GB Natürel Titanyum", image: "https://picsum.photos/150?random=1" },
  { id: "2", name: "Samsung Galaxy A51 Pembe 128 GB", image: "https://picsum.photos/150?random=2" },
  { id: "3", name: "OnePlus 10", image: "https://picsum.photos/150?random=3" },
  { id: "4", name: "OnePlus 10", image: "https://picsum.photos/150?random=4" },
  { id: "5", name: "OnePlus 10", image: "https://picsum.photos/150?random=5" },
];

const renderRecentVisitedProducts = ({item}: any) => <RecentVisitedProduct product={item} />;

const SearchScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [searchQuery, setSearchQuery] = useState('');
    const widthAnim = useRef(new Animated.Value(200)).current;
    const { searchHistory, addSearchTerm } = useSearchHistory();
    const { popularSearches } = usePopularSearches();
  
    const handleSearch = () => {
      if (searchQuery.trim()) {
        addSearchTerm(searchQuery);
        setSearchQuery('');
        navigation.navigate('SearchResult');
      }
    };

    useEffect(() => {
      Animated.timing(widthAnim, {
        toValue: Dimensions.get('window').width * 0.97,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, []);

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
              autoFocus
              style={styles.searchBarContainer}
              inputStyle={styles.searchBarInput}
              />
          </Animated.View>
        </View>
        {searchHistory && searchHistory.length > 0 ? <SearchHistory /> : null}
        <View style={styles.sectionContainer}>
          <View style={styles.rowContainer}>
              <View style={styles.flexItem}>
                <Title style={styles.sectionTitle}>Son Gezdiğim Ürünler</Title>
              </View>
          </View>
          <View>
            <FlatList
                data={dummyRecentVisitedProduct}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderRecentVisitedProducts}
              />
          </View>
        </View>
        {
          popularSearches.length > 0 ? (
            <View style={styles.sectionContainer}>
              <View style={styles.rowContainer}>
                  <View style={styles.flexItem}>
                    <Title style={styles.sectionTitle}>Popüler Aramalar</Title>
                  </View>
              </View>
              <View>
                <FlatList
                  data={popularSearches}
                  horizontal
                  renderItem={({item}) => <PopularSearch keyword={item} />}
                />
              </View>
            </View>
          ) : null
        }
    </SafeAreaView>
  );
};

export default SearchScreen;