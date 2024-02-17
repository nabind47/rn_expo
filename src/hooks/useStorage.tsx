import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext } from "react";

interface StorageContextProps {
  setItem: (key: string, value: string) => Promise<void>;
  getItem: (key: string) => Promise<string | null>;
  removeItem: (key: string) => Promise<void>;
}

const StorageContext = createContext<StorageContextProps | undefined>(
  undefined
);

export const StorageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const setItem = async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error("Error storing value: ", error);
      throw error;
    }
  };

  const getItem = async (key: string): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.error("Error retrieving value: ", error);
      throw error;
    }
  };

  const removeItem = async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error deleting value: ", error);
      throw error;
    }
  };

  return (
    <StorageContext.Provider value={{ setItem, getItem, removeItem }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = () => {
  const context = useContext(StorageContext);

  if (!context) {
    throw new Error("useStorage must be used within a StorageProvider");
  }
  return context;
};
