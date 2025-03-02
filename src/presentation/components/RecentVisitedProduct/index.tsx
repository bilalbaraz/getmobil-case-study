import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@navigation/types';

type MainStackNavigationProp = NativeStackNavigationProp<MainStackParamList>;

const RecentVisitedProduct = ({product}: any) => {
    const navigation = useNavigation<MainStackNavigationProp>();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {item: product})}>
            <View style={styles.container}>
                <FastImage
                    source={{ uri: product.images[0] }} 
                    style={styles.image}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText} numberOfLines={1}>{product.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default RecentVisitedProduct;