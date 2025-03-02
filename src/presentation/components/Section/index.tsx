import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { Title } from 'react-native-paper';
import { COLORS } from '@constants/colors';
import { SectionProps } from '@props/SectionProps';
import { Product } from '@models/Product';
import ProductCard from '@components/ProductCard';
import styles from './styles';

const _renderProductCard = ({item}: {item: Product}) => <ProductCard item={item} />;

const Section = ({ title, data, isLoading, error }: SectionProps) => (
  <View style={styles.container}>
    <Title style={styles.title}>{title}</Title>
    {isLoading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    ) : error ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Ürünler yüklenirken bir hata oluştu</Text>
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
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Ürün bulunamadı</Text>
      </View>
    )}
  </View>
);

export default Section;
