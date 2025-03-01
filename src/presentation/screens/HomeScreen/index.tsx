import React, {useRef, useState} from 'react';
import { View, ScrollView, FlatList, Dimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Searchbar, Title } from 'react-native-paper';
import styles from './styles';
import { FONTS } from '@constants/fonts';
import ProductCard from '@components/ProductCard';
import Slide from '@components/Slide';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from 'presentation/navigation/types';
import { COLORS } from '@constants/colors';

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

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const widthAnim = useRef(new Animated.Value(200)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{display: 'flex'}}>
        <Animated.View style={{ width: widthAnim }}>
          <Searchbar
            placeholder="Cihaz ara"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode={'bar'}
            style={{borderRadius: 5, height: 50, borderWidth: 1, borderColor: COLORS.border, backgroundColor: COLORS.white, width: Dimensions.get('window').width * 0.8}}
            inputStyle={{fontSize: 13}}
            onPress={() => navigation.navigate('Search')}
          />
        </Animated.View>
      </View>
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