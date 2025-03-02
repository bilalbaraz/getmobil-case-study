import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Alert, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { createStyles } from './styles';
import { FONTS } from '@constants/fonts';
import { ProductCardComponentProps } from '@props/ProductCardProps';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '@constants/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@navigation/types';
import { FavoritedProductsStorage } from '@sources/local/favoritedProductsStorage';

type MainStackNavigationProp = NativeStackNavigationProp<MainStackParamList>;

const { width: screenWidth } = Dimensions.get('window');
const defaultCardWidth = screenWidth / 2.2;

const ProductCard = ({
    item, 
    width = defaultCardWidth, 
    height = 260,
    onAddToCart,
    onFavoriteToggle
}: ProductCardComponentProps) => {
    const navigation = useNavigation<MainStackNavigationProp>();
    const [isFavorited, setIsFavorited] = useState<boolean>(false);

    const styles = useMemo(() => createStyles(width, height), [width, height]);

    useEffect(() => {
        const checkFavoriteStatus = async () => {
            const favoriteStatus = await FavoritedProductsStorage.isFavorited(item.id);
            setIsFavorited(favoriteStatus);
        };
        
        checkFavoriteStatus();
    }, [item.id]);

    const handleToggleFavorite = async () => {
        try {
            if (isFavorited) {
                await FavoritedProductsStorage.removeFromFavorites(item.id);
                setIsFavorited(false);
                if (onFavoriteToggle) {
                    onFavoriteToggle(item.id, false);
                }
            } else {
                await FavoritedProductsStorage.addToFavorites(item.id);
                setIsFavorited(true);
                if (onFavoriteToggle) {
                    onFavoriteToggle(item.id, true);
                }
            }
        } catch (error) {
            console.error('Error toggling favorite status:', error);
        }
    };

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart();
        } else {
            Alert.alert('added to cart');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('ProductDetail', {item})}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <FastImage
                        defaultSource={require('@assets/images/getmobil-sq.webp')}
                        source={{ uri: item.images[0] }}
                        style={styles.image}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <TouchableOpacity onPress={handleToggleFavorite} style={styles.favoriteButton}>
                        <Icon 
                            name={isFavorited ? "heart" : "heart-outline"} 
                            size={16} 
                            color={isFavorited ? COLORS.error : COLORS.primary} 
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
                    {item.price && (
                        <Text style={styles.paragraph}>₺{item.price}</Text>
                    )}
                    {item.rating && (
                        <Text style={styles.paragraph}>⭐ {item.rating}</Text>
                    )}
                </View>
                <View style={styles.actionsContainer}>
                    <Button 
                        mode="outlined"
                        style={styles.button}
                        labelStyle={styles.buttonText}
                        onPress={handleAddToCart}
                    >
                        Sepete Ekle
                    </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ProductCard;