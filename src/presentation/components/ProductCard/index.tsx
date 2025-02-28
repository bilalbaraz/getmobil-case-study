import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FONTS } from '../../../constants/fonts';
import { ProductCardProps } from '../../types/ProductCardProps';
import FastImage from 'react-native-fast-image';

const ProductCard = ({ item }: ProductCardProps) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <FastImage 
                source={{ uri: item.image }} 
                style={styles.image}
                resizeMode={FastImage.resizeMode.cover}
            />
        </View>
        <View style={styles.contentContainer}>
            <Text style={[styles.title, {fontFamily: FONTS.Poppins.semibold}]}>
                {item.name || item.title}
            </Text>
            {item.price && (
                <Text style={styles.paragraph}>{item.price}</Text>
            )}
            {item.rating && (
                <Text style={styles.paragraph}>⭐ {item.rating}</Text>
            )}
            {item.description && (
                <Text style={styles.paragraph}>{item.description}</Text>
            )}
        </View>
        <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>İncele</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default ProductCard;