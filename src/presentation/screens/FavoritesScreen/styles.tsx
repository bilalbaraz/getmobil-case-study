import { StyleSheet } from 'react-native';
import { FONTS } from '../../../constants/fonts';
import { COLORS } from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    },
});

export default styles;