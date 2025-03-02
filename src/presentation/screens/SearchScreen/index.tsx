import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, FlatList } from 'react-native';
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
import { useVisitedProductHistory } from '@hooks/useVisitedProductHistory';
import { DimensionsHelper } from '@utils/helpers/dimensionsHelper';

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

const renderRecentVisitedProducts = ({item}: any) => <RecentVisitedProduct product={item} />;

const SearchScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [searchQuery, setSearchQuery] = useState('');
    const widthAnim = useRef(new Animated.Value(200)).current;
    const { searchHistory, addSearchTerm } = useSearchHistory();
    const { visitedProductHistory } = useVisitedProductHistory();
    const { popularSearches } = usePopularSearches();

    const handleSearch = () => {
      if (searchQuery.trim()) {
        addSearchTerm(searchQuery);
        setSearchQuery('');
        navigation.navigate('SearchResult', { searchQuery: searchQuery.trim() });
      }
    };

    useEffect(() => {
      Animated.timing(widthAnim, {
        toValue: DimensionsHelper.getScreenWidth() * 0.97,
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
        {
          visitedProductHistory && visitedProductHistory.length > 0 ? (
            <View style={styles.sectionContainer}>
              <View style={styles.rowContainer}>
                  <View style={styles.flexItem}>
                    <Title style={styles.sectionTitle}>Son Gezdiğim Ürünler</Title>
                  </View>
              </View>
              <View>
                <FlatList
                    data={visitedProductHistory}
                    horizontal
                    keyExtractor={(item: any) => item.id}
                    renderItem={renderRecentVisitedProducts}
                  />
              </View>
            </View>
          ) : null
        }
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