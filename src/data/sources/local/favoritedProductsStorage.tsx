import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '@config/storage_keys';

export class FavoritedProductsStorage {
    private static readonly storageKey = STORAGE_KEYS.PREFIX + ':' + STORAGE_KEYS.FAVORITED_PRODUCTS;

    static async addToFavorites(productId: number): Promise<number[]> {
        try {
            const storedData = await AsyncStorage.getItem(this.storageKey);
            let favorites: number[] = storedData ? JSON.parse(storedData) : [];

            if (!favorites.includes(productId)) {
                favorites.push(productId);
                await AsyncStorage.setItem(
                    this.storageKey,
                    JSON.stringify(favorites)
                );
            }

            return favorites;
        } catch (error) {
            console.error('Error adding to favorites:', error);
            return [];
        }
    }

    static async removeFromFavorites(productId: number): Promise<number[]> {
        try {
            const storedData = await AsyncStorage.getItem(this.storageKey);
            let favorites: number[] = storedData ? JSON.parse(storedData) : [];

            favorites = favorites.filter(id => id !== productId);

            await AsyncStorage.setItem(
                this.storageKey,
                JSON.stringify(favorites)
            );

            return favorites;
        } catch (error) {
            console.error('Error removing from favorites:', error);
            return [];
        }
    }

    static async getFavorites(): Promise<number[]> {
        try {
            const storedData = await AsyncStorage.getItem(this.storageKey);
            return storedData ? JSON.parse(storedData) : [];
        } catch (error) {
            console.error('Error getting favorites:', error);
            return [];
        }
    }

    static async isFavorited(productId: number): Promise<boolean> {
        try {
            const storedData = await AsyncStorage.getItem(this.storageKey);
            const favorites: number[] = storedData ? JSON.parse(storedData) : [];

            return favorites.includes(productId);
        } catch (error) {
            console.error('Error checking if favorited:', error);
            return false;
        }
    }

    static async clearAllFavorites(): Promise<boolean> {
        try {
            await AsyncStorage.removeItem(this.storageKey);
            return true;
        } catch (error) {
            console.error('Error clearing favorites:', error);
            return false;
        }
    }
}
