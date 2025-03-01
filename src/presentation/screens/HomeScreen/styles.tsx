import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  headerContainer: {
    display: 'flex', 
    flexDirection: 'row'
  },
  searchContainer: {
    flex: 5
  },
  animatedSearchContainer: {
    width: '100%'
  },
  searchBar: {
    borderRadius: 5, 
    height: 50, 
    borderWidth: 1, 
    borderColor: COLORS.border, 
    backgroundColor: COLORS.white
  },
  searchInput: {
    fontSize: 13
  },
  notificationContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  notificationIconWrapper: {
    width: 36, 
    height: 36, 
    borderRadius: 18, 
    backgroundColor: COLORS.primary, 
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  scrollViewContainer: {
    flex: 1
  }
});

export default styles;