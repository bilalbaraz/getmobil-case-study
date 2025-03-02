import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { SlideProps } from '@props/SlideProps';
import CustomImage from '@components/CustomImage';

const Slide = ({ slideUri }: SlideProps) => (
    <View style={styles.imageContainer}>
        <CustomImage
            style={styles.image}
            source={slideUri}
            isLocalImage={true}
        />
    </View>
);

export default Slide;