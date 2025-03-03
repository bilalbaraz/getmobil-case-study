import { StyleSheet } from 'react-native';
import { FONTS } from '@constants/fonts';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
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
  flexContainer: {
    display: 'flex',
  },
  searchBarContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
    height: 50,
    backgroundColor: COLORS.white,
  },
  searchBarInput: {
    fontSize: 13,
  },
  sectionContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexItem: {
    flex: 1,
  },
  sectionTitle: {
    paddingHorizontal: 15,
    fontFamily: FONTS.Poppins.semibold,
    fontSize: 16,
  },
});

export default styles;
