import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type categoryDataType = {
  category: string;
  updateCategory: (data: string) => void;
};

export const categoryState = create<categoryDataType>()(
  persist(
    set => ({
      category: 'All news',
      updateCategory: data => {
        set({ category: data });
      },
     
    }),
    {
      name: 'category-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
