import { StyleSheet } from 'react-native';
import { FONTS } from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  nameText: {
    marginTop: 10,
    fontFamily: FONTS.Poppins.regular,
  },
  emailText: {
    color: 'gray',
    fontFamily: FONTS.Poppins.regular,
  },
  itemTitle: {
    fontFamily: FONTS.Poppins.regular,
  },
  buttonContainer: {
    padding: 20,
  },
  logoutButton: {
    borderColor: '#94A3B8',
    borderRadius: 5,
  },
  logoutButtonLabel: {
    fontFamily: FONTS.Poppins.regular,
  },
});

export default styles;
