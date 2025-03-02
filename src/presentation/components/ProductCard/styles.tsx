import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@constants/colors';

const { width: screenWidth } = Dimensions.get('window');
const defaultCardWidth = screenWidth / 2.2;

export const createStyles = (cardWidth: number = defaultCardWidth, cardHeight: number = 260) => {
  return StyleSheet.create({
    container: {
      margin: 2,
      width: cardWidth - 10,
      borderWidth: 1,
      borderColor: COLORS.border,
      borderRadius: 8,
      backgroundColor: COLORS.white,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: cardHeight,
    },
    imageContainer: {
      padding: 0,
      position: 'relative',
    },
    image: {
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      height: cardHeight * 0.46,
    },
    favoriteButton: {
      position: 'absolute',
      top: 8,
      right: 8,
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: COLORS.white,
      borderColor: COLORS.border,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    contentContainer: {
      padding: 10,
      flex: 1,
      height: cardHeight * 0.31,
    },
    title: {
      fontSize: 12,
      lineHeight: 15,
      marginBottom: 5,
      fontWeight: '600',
      height: 30,
    },
    paragraph: {
      fontSize: 12,
      lineHeight: 10,
      marginBottom: 5,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
    },
    price: {
      fontSize: 14,
      fontWeight: 'bold',
      color: COLORS.primary,
    },
    originalPrice: {
      fontSize: 12,
      color: COLORS.text,
      textDecorationLine: 'line-through',
      marginLeft: 5,
    },
    addToCartButton: {
      backgroundColor: COLORS.primary,
      padding: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
    addToCartText: {
      color: COLORS.white,
      fontSize: 12,
      fontWeight: '600',
    },
    actionsContainer: {
      flexDirection: 'row',
      padding: 8,
      marginTop: 'auto',
    },
    button: {
      borderColor: COLORS.primary,
      borderRadius: 5,
      flex: 1,
    },
    buttonText: {
      fontSize: 12,
      fontWeight: '500',
    }
  });
};

const defaultStyles = createStyles();
export default defaultStyles;