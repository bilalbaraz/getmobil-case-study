import React, {useState} from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Searchbar, Title } from 'react-native-paper';
import styles from './styles';
import { FONTS } from '@constants/fonts';
import ProductCard from '@components/ProductCard';
import Slide from '@components/Slide';

const dummyProducts = [
  { id: "1", name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: "₺109.95", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
  { id: "2", name: "Samsung Galaxy S21", price: "₺9.499", image: "https://picsum.photos/150?random=2" },
  { id: "3", name: "Xiaomi Mi 11", price: "₺7.999", image: "https://picsum.photos/150?random=3" },
];

const dummyCampaigns = [
  { id: "1", title: "Yaz Kampanyası", description: "Tüm ürünlerde %20 indirim!" },
  { id: "2", title: "Kargo Bedava", description: "₺500 üzeri alışverişlerde kargo ücretsiz!" },
  { id: "3", title: "Kargo Bedava", description: "₺500 üzeri alışverişlerde kargo ücretsiz!" },
  { id: "4", title: "Kargo Bedava", description: "₺500 üzeri alışverişlerde kargo ücretsiz!" },
  { id: "5", title: "Kargo Bedava", description: "₺500 üzeri alışverişlerde kargo ücretsiz!" },
];

const dummyTopRatedPhones = [
  { id: "1", name: "iPhone 11", rating: "4.8", image: "https://picsum.photos/150?random=4" },
  { id: "2", name: "OnePlus 9", rating: "4.7", image: "https://picsum.photos/150?random=5" },
  { id: "3", name: "OnePlus 9", rating: "4.7", image: "https://picsum.photos/150?random=6" },
];

const _renderProductCard = ({item}: any) => <ProductCard item={item} />;

const Section = ({ title, data }: any) => (
  <View style={{ marginVertical: 5 }}>
    <Title style={{ paddingHorizontal: 15, fontFamily: FONTS.Poppins.semibold, fontSize: 16 }}>{title}</Title>
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={_renderProductCard}
    />
  </View>
);

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Cihaz ara"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode={'bar'}
        style={{margin: 10, borderRadius: 5, height: 40}}
        inputStyle={{paddingTop: 0, fontSize: 13}}
      />
      <ScrollView style={{ flex: 1 }}>
        <Slide slideUri={require('../../../assets/slides/slide1.webp')} />
        <Slide slideUri={require('../../../assets/slides/slide2.webp')} />
        <Section title="Haftanın Fırsat Ürünleri" data={dummyProducts} />
        <Section title="Kampanyalar" data={dummyCampaigns} />
        <Section title="Çok Beğenilen Yenilenmiş Telefonlar" data={dummyTopRatedPhones} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;