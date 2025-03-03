import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface ProductSpecificationProps {
  label: string;
  value: string;
  textColor: string;
}

const ProductSpecification: React.FC<ProductSpecificationProps> = ({
  label,
  value,
  textColor,
}) => {
  return (
    <View style={styles.specRow}>
      <Text style={[styles.specLabel, { color: textColor }]}>{label}</Text>
      <Text style={[styles.specValue, { color: textColor }]}>{value}</Text>
    </View>
  );
};

export default ProductSpecification;
