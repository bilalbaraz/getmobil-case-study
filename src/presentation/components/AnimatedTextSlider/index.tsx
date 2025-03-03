import React, { useRef, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './styles';

const AnimatedTextSlider = () => {
  const textData = ['İndirimleri kaçırma!', 'Özel fırsatlar burada!', 'Yeni ürünler eklendi!'];
  const animationValue = useRef(new Animated.Value(0)).current;
  const intervalTime = 1000;

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(animationValue, {
        toValue: -25,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        const shiftedItem = textData.shift();

        if (shiftedItem !== undefined) {
          textData.push(shiftedItem);
        }

        animationValue.setValue(0);
        setTimeout(startAnimation, intervalTime);
      });
    };

    startAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Animated.View style={[styles.textWrapper, { transform: [{ translateY: animationValue }] }]}>
          {textData.map((text, index) => (
            <Text key={index} style={styles.text}>{text}</Text>
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default AnimatedTextSlider;
