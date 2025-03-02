import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';
import { DimensionsHelper } from '@utils/helpers/dimensionsHelper';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  box: {
    width: DimensionsHelper.getScreenWidth() * 0.95,
    height: 30,
    overflow: 'hidden',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    position: 'absolute',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.white,
  },
});
