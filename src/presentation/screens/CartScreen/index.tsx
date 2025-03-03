import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Button } from 'react-native-paper';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useTheme } from '@context/ThemeContext';
import { COLORS } from '@constants/colors';

const CartScreen = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? COLORS.dark.text : COLORS.light.text;

  const navigateToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'BottomTab',
            state: {
              routes: [
                {
                  name: 'HomeStack',
                  state: {
                    routes: [{ name: 'Home' }],
                  },
                },
              ],
            },
          },
        ],
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: textColor }]}>Sepetiniz Boş</Text>
        <Text style={[styles.text, { color: textColor }]}>Fırsatlara hemen göz atmak ister misin?</Text>
        <Button
          icon={'cart-outline'}
          mode="contained"
          onPress={navigateToHome}
          labelStyle={styles.buttonLabelStyle}
        >
          Alışverişe Başla
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
