import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { Text } from 'react-native-paper';

const RecentVisitedProduct = ({ product }: any) => {
    return (
        <TouchableOpacity onPress={() => Alert.alert('click recent visited product')}>
            <View style={styles.container}>
                <FastImage
                    source={{ uri: product.image }} 
                    style={styles.image}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText} numberOfLines={1}>{product.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default RecentVisitedProduct;