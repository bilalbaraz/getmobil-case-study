import React, { useState } from 'react';
import { View, ScrollView, FlatList, Animated, ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Searchbar, Title } from 'react-native-paper';
import styles from './styles';
import { FONTS } from '@constants/fonts';
import ProductCard from '@components/ProductCard';
import Slide from '@components/Slide';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../presentation/navigation/types';
import { COLORS } from '@constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useProducts } from '@hooks/useProducts';
import { Product } from '@models/Product';
import { SectionProps } from '@types/SectionProps';

const _renderProductCard = ({item}: {item: Product}) => <ProductCard item={item} />;

const Section = ({ title, data, isLoading, error }: SectionProps) => (
  <View style={{ marginVertical: 5 }}>
    <Title style={{ paddingHorizontal: 15, fontFamily: FONTS.Poppins.semibold, fontSize: 16 }}>{title}</Title>
    {isLoading ? (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    ) : error ? (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>Ürünler yüklenirken bir hata oluştu</Text>
      </View>
    ) : data && data.length > 0 ? (
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={_renderProductCard}
        showsHorizontalScrollIndicator={false}
      />
    ) : (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text>Ürün bulunamadı</Text>
      </View>
    )}
  </View>
);

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const { data: products, isLoading, error } = useProducts();

  console.log(products);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <Animated.View style={styles.animatedSearchContainer}>
            <Searchbar
              placeholder="Cihaz ara"
              onChangeText={setSearchQuery}
              value={searchQuery}
              mode={'bar'}
              style={styles.searchBar}
              inputStyle={styles.searchInput}
              onPress={() => navigation.navigate('Search')}
            />
          </Animated.View>
        </View>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationIconWrapper}>
            <Icon name={'notifications-outline'} size={20} color={COLORS.white} />
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <Slide slideUri={require('../../../assets/slides/slide1.webp')} />
        <Slide slideUri={require('../../../assets/slides/slide2.webp')} />
        <Section 
          title="Haftanın Fırsat Ürünleri" 
          data={products || []} 
          isLoading={isLoading} 
          error={error} 
        />
        <Section 
          title="Çok Beğenilen Yenilenmiş Telefonlar" 
          data={products || []} 
          isLoading={isLoading} 
          error={error} 
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;