import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Searchbar, Title } from 'react-native-paper';
import { FONTS } from '@constants/fonts';
import { COLORS } from '@constants/colors';
import PopularSearch from '@components/PopularSearch';
import RecentVisitedProduct from '@components/RecentVisitedProduct';
import SearchHistory from '@components/SearchHistory';
import { useSearchHistory } from '@hooks/useSearchHistory';

const dummyRecentVisitedProduct = [
  { id: "1", name: "Apple iPhone 15 Pro Max 256 GB Natürel Titanyum", image: "https://picsum.photos/150?random=1" },
  { id: "2", name: "Samsung Galaxy A51 Pembe 128 GB", image: "https://picsum.photos/150?random=2" },
  { id: "3", name: "OnePlus 10", image: "https://picsum.photos/150?random=3" },
  { id: "4", name: "OnePlus 10", image: "https://picsum.photos/150?random=4" },
  { id: "5", name: "OnePlus 10", image: "https://picsum.photos/150?random=5" },
];

const renderRecentVisitedProducts = ({item}: any) => <RecentVisitedProduct product={item} />;

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const widthAnim = useRef(new Animated.Value(200)).current;
    const { searchHistory, addSearchTerm } = useSearchHistory();
  
    const handleSearch = () => {
      if (searchQuery.trim()) {
        addSearchTerm(searchQuery);
        setSearchQuery('');
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
        <View style={{display: 'flex'}}>
          <Animated.View style={{ width: widthAnim }}>
              <Searchbar
              placeholder="Cihaz ara"
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
              value={searchQuery}
              mode={'bar'}
              autoFocus
              style={{borderRadius: 5, borderWidth: 1, borderColor: COLORS.border, height: 50, backgroundColor: COLORS.white}}
              inputStyle={{fontSize: 13}}
              />
          </Animated.View>
        </View>
        {searchHistory && searchHistory.length > 0 ? <SearchHistory /> : null}
        <View style={{marginTop: 10, marginBottom: 10}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Title style={{ paddingHorizontal: 15, fontFamily: FONTS.Poppins.semibold, fontSize: 16 }}>Son Gezdiğim Ürünler</Title>
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
        <View style={{marginTop: 10, marginBottom: 10}}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Title style={{ paddingHorizontal: 15, fontFamily: FONTS.Poppins.semibold, fontSize: 16 }}>Popüler Aramalar</Title>
              </View>
          </View>
          <View>
            <FlatList
              data={['bardak altlığı', 'kalem', 'kitap', 'kulaklık', 'süt', 'apple kulaklık']}
              horizontal
              renderItem={({item}) => <PopularSearch keyword={item} />}
            />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default SearchScreen;