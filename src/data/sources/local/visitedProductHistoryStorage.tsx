import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "@config/storage_keys";
import { LIMITS } from "@config/limits";
import { Product } from "@models/Product";

export class VisitedProductHistoryStorage {
  static async getVisitedProducts(): Promise<string[]> {
    try {
      const storedData = await AsyncStorage.getItem(STORAGE_KEYS.PREFIX + ':' + STORAGE_KEYS.VISITED_PRODUCT_HISTORY);
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error("Ziyaret edilen ürün geçmişi alınırken hata oluştu:", error);
      return [];
    }
  }

  static async addProduct(product: Product): Promise<void> {
    try {
      const history = await VisitedProductHistoryStorage.getVisitedProducts();
      const newHistory = [product, ...history.filter((item: any) => item.id !== product.id)];

      if (newHistory.length > LIMITS.MAX_VISITED_PRODUCT_HISTORY_ITEMS) {
        newHistory.pop();
      }

      await AsyncStorage.setItem(STORAGE_KEYS.PREFIX + ':' + STORAGE_KEYS.VISITED_PRODUCT_HISTORY, JSON.stringify(newHistory));
    } catch (error) {
      console.error("Ziyaret edilen ürün geçmişi eklenirken hata oluştu:", error);
    }
  }
}