import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '@config/storage_keys';

export class ThemeStorage {
  static async getTheme () {
    try {
      const savedTheme = await AsyncStorage.getItem(STORAGE_KEYS.DARK_MODE);
      return savedTheme === 'true';
    } catch (error) {
      console.error('Error getting theme:', error);
      return false;
    }
  }

  static async saveTheme (isDarkMode: boolean) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.DARK_MODE, isDarkMode.toString());
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  }
}
