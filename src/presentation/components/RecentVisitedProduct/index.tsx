import React from 'react';
import { Alert, Dimensions, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { Text } from 'react-native-paper';
import { COLORS } from '@constants/colors';

const RecentVisitedProduct = ({ product }: any) => {
    return (
        <TouchableOpacity onPress={() => Alert.alert('click recent visited product')}>
            <View style={styles.container}>
                <FastImage
                    source={{ uri: product.image }} 
                    style={{width: '100%', height: Dimensions.get('window').width * 0.2}}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 5}}>
                    <Text style={{color: COLORS.white, fontSize: 12, fontWeight: '500'}} numberOfLines={1}>{product.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default RecentVisitedProduct;