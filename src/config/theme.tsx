import { COLORS } from "@constants/colors";
import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: COLORS.light.primary,
    text: COLORS.light.text,
    background: COLORS.light.background,
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: COLORS.dark.primary,
    text: COLORS.dark.text,
    background: COLORS.dark.background,
  },
};