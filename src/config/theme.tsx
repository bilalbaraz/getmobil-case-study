import { COLORS } from '@constants/colors';
import { MD3LightTheme, MD3DarkTheme, configureFonts } from 'react-native-paper';
import { FONT_CONFIG } from './font';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: COLORS.light.primary,
    text: COLORS.light.text,
    background: COLORS.light.background,
  },
  fonts: configureFonts({config: FONT_CONFIG}),
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: COLORS.dark.primary,
    text: COLORS.dark.text,
    background: COLORS.dark.background,
  },
  fonts: configureFonts({config: FONT_CONFIG}),
};
