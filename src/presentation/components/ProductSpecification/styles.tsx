import { StyleSheet } from 'react-native';
import { FONTS } from '@constants/fonts';

const styles = StyleSheet.create({
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
    width: 120,
  },
  specValue: {
    fontFamily: FONTS.Poppins.regular,
    fontSize: 14,
    flex: 1,
  },
});

export default styles;
