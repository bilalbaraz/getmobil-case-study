import AsyncStorage from "@react-native-async-storage/async-storage";
import {LIMITS} from '../../../config/limits';
import { STORAGE_KEYS } from "../../../config/storage_keys";

export class SearchHistoryStorage {
  static async addSearchTerm(term: string): Promise<void> {
    try {
      const history = await SearchHistoryStorage.getSearchHistory();
      const newHistory = [term, ...history.filter((item) => item !== term)];

      if (newHistory.length > LIMITS.MAX_SEARCH_HISTORY_ITEMS) {
        newHistory.pop();
      }

      await AsyncStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(newHistory));
    } catch (error) {
      console.error("Arama geçmişi eklenirken hata oluştu:", error);
    }
  }

  static async getSearchHistory(): Promise<string[]> {
    try {
      const storedData = await AsyncStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error("Arama geçmişi alınırken hata oluştu:", error);
      return [];
    }
  }

  static async removeSearchTerm(term: string): Promise<void> {
    try {
      const history = await SearchHistoryStorage.getSearchHistory();
      const filteredHistory = history.filter((item) => item !== term);
      await AsyncStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(filteredHistory));
    } catch (error) {
      console.error("Arama geçmişinden silinirken hata oluştu:", error);
    }
  }

  static async clearSearchHistory(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY);
    } catch (error) {
      console.error("Arama geçmişi temizlenirken hata oluştu:", error);
    }
  }
}