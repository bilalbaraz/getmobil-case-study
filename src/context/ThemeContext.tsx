import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeRepository } from '@repositories/ThemeRepository';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const deviceTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(deviceTheme === 'dark');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await ThemeRepository.getTheme();
        if (savedTheme !== undefined) {
          setIsDarkMode(savedTheme === 'dark');
        } else {
          setIsDarkMode(deviceTheme === 'dark');
        }
      } catch (error) {
        console.error('Error loading theme:', error);
        setIsDarkMode(deviceTheme === 'dark');
      } finally {
        setIsLoading(false);
      }
    };

    loadTheme();
  }, [deviceTheme]);

  useEffect(() => {
    if (!isLoading) {
      const checkTheme = async () => {
        const savedTheme = await ThemeRepository.getTheme();
        if (savedTheme === undefined) {
          setIsDarkMode(deviceTheme === 'dark');
        }
      };
      
      checkTheme();
    }
  }, [deviceTheme, isLoading]);

  const toggleTheme = async () => {
    const newThemeValue = !isDarkMode;
    setIsDarkMode(newThemeValue);
    await ThemeRepository.saveTheme(newThemeValue);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
