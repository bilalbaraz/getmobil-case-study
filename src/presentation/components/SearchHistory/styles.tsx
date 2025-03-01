import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';
import { FONTS } from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 2,
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: FONTS.Poppins.semibold,
    fontSize: 16,
  },
  clearButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  clearButtonText: {
    color: COLORS.primary,
    fontWeight: '400',
  },
});

export default styles;
