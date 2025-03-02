import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@navigation/types';
import { createStyles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '@constants/colors';
import { ProductCardComponentProps } from '@props/ProductCardProps';
import CustomImage from '@components/CustomImage';
import { FONTS } from '@constants/fonts';
import { ToggleFavorite } from '@usecases/ToggleFavorite';
import { CheckFavoriteStatus } from '@usecases/CheckFavoriteStatus';

type MainStackNavigationProp = NativeStackNavigationProp<MainStackParamList>;

const ProductCard = ({
    item,
    width = 180,
    height = 260,
    onAddToCart,
    onFavoriteToggle
}: ProductCardComponentProps) => {
    const navigation = useNavigation<MainStackNavigationProp>();
    const [isFavorited, setIsFavorited] = useState<boolean>(false);
    
    const styles = useMemo(() => createStyles(width, height), [width, height]);

    useEffect(() => {
        const checkFavoriteStatus = async () => {
            const favoriteStatus = await CheckFavoriteStatus.execute(item.id);
            setIsFavorited(favoriteStatus);
        };
        
        checkFavoriteStatus();
    }, [item.id]);

    const handleToggleFavorite = async () => {
        try {
            const newFavoriteStatus = await ToggleFavorite.execute(item.id);
            setIsFavorited(newFavoriteStatus);
            
            if (onFavoriteToggle) {
                onFavoriteToggle(item.id, newFavoriteStatus);
            }
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart();
        }
    };

    const discountedPrice = item.price - (item.price * item.discountPercentage / 100);

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('ProductDetail', {item})}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <CustomImage
                        source={{ uri: item.images[0] }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <TouchableOpacity onPress={handleToggleFavorite} style={styles.favoriteButton}>
                        <Icon 
                            name={isFavorited ? "heart" : "heart-outline"} 
                            size={24} 
                            color={isFavorited ? COLORS.error : COLORS.text}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                    <Text 
                        style={[styles.title, {fontFamily: FONTS.Poppins.semibold}]}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {item.title}
                    </Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>{discountedPrice.toFixed(2)} TL</Text>
                        {item.discountPercentage > 0 && (
                            <Text style={styles.originalPrice}>{item.price} TL</Text>
                        )}
                    </View>
                </View>
                <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                    <Text style={styles.addToCartText}>Sepete Ekle</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ProductCard;