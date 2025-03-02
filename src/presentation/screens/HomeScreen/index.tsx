import React, { useState } from 'react';
import { View, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import styles from './styles';
import { COLORS } from '@constants/colors';
import Slide from '@components/Slide';
import Section from '@components/Section';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/Ionicons';
import { useProducts } from '@hooks/useProducts';

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