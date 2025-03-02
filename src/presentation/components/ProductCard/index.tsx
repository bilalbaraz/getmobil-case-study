import React from 'react';
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
import { MainStackParamList } from 'presentation/navigation/types';

type MainStackNavigationProp = NativeStackNavigationProp<MainStackParamList>;

const ProductCard = ({ item }: ProductCardProps) => {
    const navigation = useNavigation<MainStackNavigationProp>();

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
                    <TouchableOpacity onPress={() => Alert.alert('clicked fav')} style={styles.favoriteButton}>
                        <Icon name="heart-outline" size={16} color={COLORS.primary} />
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