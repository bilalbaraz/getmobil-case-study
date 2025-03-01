import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import { FONTS } from '@constants/fonts';
import { ProductCardProps } from '@types/ProductCardProps';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '@constants/colors';

const ProductCard = ({ item }: ProductCardProps) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <FastImage 
                source={{ uri: item.image }} 
                style={styles.image}
                resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity style={styles.favoriteButton}>
                <Icon name="heart-outline" size={16} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
            <Text 
                style={[styles.title, {fontFamily: FONTS.Poppins.semibold}]}
                numberOfLines={2}
                ellipsizeMode="tail"
            >
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
            <Button 
                mode="outlined"
                style={styles.button}
                labelStyle={styles.buttonText}
                onPress={() => {}}
            >
                Sepete Ekle
            </Button>
        </View>
    </View>
);

export default ProductCard;