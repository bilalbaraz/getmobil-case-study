import { ThemeStorage } from '@sources/local/themeStorage';

export class ThemeRepository {
    static async getTheme () {
        const localTheme = await ThemeStorage.getTheme();
        if (localTheme !== null) {return 'dark';}
    }
    static async saveTheme (isDarkMode: boolean) {
        await ThemeStorage.saveTheme(isDarkMode);
        await ThemeStorage.saveTheme(isDarkMode);
    }
}
