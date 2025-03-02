import { StyleSheet } from 'react-native';
import { FONTS } from '@constants/fonts';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: COLORS.background,
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
    productList: {
        paddingVertical: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar: {
        marginHorizontal: 8,
        marginVertical: 10,
        elevation: 2,
        borderRadius: 8,
        backgroundColor: COLORS.white,
    },
    noResultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    noResultsText: {
        fontSize: 16,
        color: COLORS.text,
        textAlign: 'center',
    }
});

export default styles;