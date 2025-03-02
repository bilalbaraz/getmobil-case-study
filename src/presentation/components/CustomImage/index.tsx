import React from 'react';
import { StyleProp, ImageStyle, ViewStyle } from 'react-native';
import FastImage, { ResizeMode, Source } from 'react-native-fast-image';
import styles from './styles';

export interface CustomImageProps {
  source: Source | number;
  defaultSource?: number;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  isLocalImage?: boolean;
}

const CustomImage: React.FC<CustomImageProps> = ({
  source,
  defaultSource = require('@assets/images/getmobil-sq.webp'),
  resizeMode = 'contain',
  style,
  isLocalImage = false,
}) => {
  const imageSource = isLocalImage 
    ? source 
    : typeof source === 'number' 
      ? source 
      : { uri: (source as Source).uri };

  const getFastImageResizeMode = (mode: string): ResizeMode => {
    switch (mode) {
      case 'contain':
        return FastImage.resizeMode.contain;
      case 'cover':
        return FastImage.resizeMode.cover;
      case 'stretch':
        return FastImage.resizeMode.stretch;
      case 'center':
        return FastImage.resizeMode.center;
      default:
        return FastImage.resizeMode.contain;
    }
  };

  return (
    <FastImage
      defaultSource={defaultSource}
      source={imageSource}
      style={[styles.image, style as any]}
      resizeMode={getFastImageResizeMode(resizeMode)}
    />
  );
};

export default CustomImage;
