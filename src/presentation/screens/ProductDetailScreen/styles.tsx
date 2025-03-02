import { StyleSheet, Dimensions } from 'react-native';
import { FONTS } from '@constants/fonts';
import { COLORS } from '@constants/colors';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    scrollContainer: {
      flex: 1,
    },
    imageContainer: {
      width: '100%',
      height: screenWidth,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    productImage: {
      width: '100%',
      height: '100%',
    },
    favoriteButtonContainer: {
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
    favoriteButton: {
      borderRadius: 20,
    },
    detailsContainer: {
      padding: 15,
    },
    brand: {
      fontFamily: FONTS.Poppins.medium,
      fontSize: 16,
      color: COLORS.primary,
      marginBottom: 5,
    },
    title: {
      fontFamily: FONTS.Poppins.bold,
      fontSize: 20,
      color: COLORS.text,
      marginBottom: 10,
    },
    priceRatingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
    },
    price: {
      fontFamily: FONTS.Poppins.bold,
      fontSize: 24,
      color: COLORS.text,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: COLORS.background,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 15,
    },
    rating: {
      fontFamily: FONTS.Poppins.medium,
      fontSize: 14,
      color: COLORS.text,
      marginLeft: 5,
    },
    divider: {
      marginVertical: 15,
      height: 1,
      backgroundColor: COLORS.border,
    },
    sectionTitle: {
      fontFamily: FONTS.Poppins.semibold,
      fontSize: 18,
      color: COLORS.text,
      marginBottom: 10,
    },
    description: {
      fontFamily: FONTS.Poppins.regular,
      fontSize: 14,
      color: COLORS.text,
      lineHeight: 22,
    },
    specsContainer: {
      marginBottom: 20,
    },
    specRow: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    specLabel: {
      fontFamily: FONTS.Poppins.medium,
      fontSize: 14,
      color: COLORS.text,
      width: 120,
    },
    specValue: {
      fontFamily: FONTS.Poppins.regular,
      fontSize: 14,
      color: COLORS.text,
      flex: 1,
    },
    bottomButtonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: COLORS.white,
      paddingHorizontal: 15,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: COLORS.border,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    priceContainer: {
      flex: 1,
      marginRight: 10,
    },
    bottomPrice: {
      fontFamily: FONTS.Poppins.bold,
      fontSize: 22,
      color: COLORS.text,
    },
    discountText: {
      fontFamily: FONTS.Poppins.medium,
      fontSize: 14,
      color: COLORS.primary,
      marginTop: 2,
    },
    addToCartButton: {
      borderRadius: 10,
      flex: 1,
    },
    relatedProductsContainer: {
      marginTop: 10,
      paddingBottom: 20,
    },
    relatedProductsTitle: {
      fontFamily: FONTS.Poppins.semibold,
      fontSize: 18,
      color: COLORS.text,
      marginLeft: 15,
      marginBottom: 10,
    },
    relatedProductsList: {
      paddingHorizontal: 10,
    },
});

export default styles;