import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import { FONTS } from '@constants/fonts';
import { ProductCardProps } from '@props/ProductCardProps';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '@constants/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@navigation/types';
import { FavoritedProductsStorage } from '@sources/local/favoritedProductsStorage';

type MainStackNavigationProp = NativeStackNavigationProp<MainStackParamList>;

const ProductCard = ({ item }: ProductCardProps) => {
    const navigation = useNavigation<MainStackNavigationProp>();
    const [isFavorited, setIsFavorited] = useState<boolean>(false);

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
            } else {
                await FavoritedProductsStorage.addToFavorites(item.id);
                setIsFavorited(true);
            }
        } catch (error) {
            console.error('Error toggling favorite status:', error);
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
                        onPress={() => Alert.alert('added to cart')}
                    >
                        Sepete Ekle
                    </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ProductCard;