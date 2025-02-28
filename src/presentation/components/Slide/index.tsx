import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const Slide = ({ slideUri }: any) => (
    <View style={styles.imageContainer}>
        <FastImage
            style={styles.image}
            source={slideUri}
            resizeMode={FastImage.resizeMode.contain}
        />
    </View>
);

export default Slide;