import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';
import { FONTS } from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: FONTS.Poppins.semibold,
    fontSize: 16,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  errorContainer: {
    padding: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: COLORS.text,
  },
});

export default styles;
