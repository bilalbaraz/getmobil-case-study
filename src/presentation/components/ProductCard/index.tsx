import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import { FONTS } from '@constants/fonts';
import { ProductCardProps } from '@types/ProductCardProps';
import FastImage from 'react-native-fast-image';
import { COLORS } from '@constants/colors';

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
            <Button 
                mode="contained"
                buttonColor={COLORS.primary}
                textColor={COLORS.white}
                style={styles.button}
                labelStyle={styles.buttonText}
                onPress={() => {}}
            >
                İncele
            </Button>
        </View>
    </View>
);

export default ProductCard;