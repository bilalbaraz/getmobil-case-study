import { StyleSheet } from 'react-native';
import { FONTS } from '@constants/fonts';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: COLORS.white,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontFamily: FONTS.Poppins.bold,
      fontSize: 24,
      color: COLORS.text,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: COLORS.text,
        lineHeight: 30,
        marginBottom: 20,
    },
    searchBarContainer: {
        padding: 10,
        backgroundColor: COLORS.white,
    },
    searchBar: {
        elevation: 0,
        backgroundColor: COLORS.background,
        borderRadius: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productList: {
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    noResultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    noResultsText: {
        fontFamily: FONTS.Poppins.medium,
        fontSize: 18,
        color: COLORS.text,
        textAlign: 'center',
    },
});

export default styles;