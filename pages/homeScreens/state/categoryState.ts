import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type categoryDataType = {
  category: string;
  isTopHeadlines: boolean;
  isCategory: boolean;
  sortNewsBy?: string;
  updateCategory: (data: string) => void;
  toggleTopHeadline: (data: boolean) => void;
  toggleIsCategory: (data: boolean) => void;
  updateNewsSorting: (data: string) => void;
};

export const categoryState = create<categoryDataType>()(
  persist(
    set => ({
      category: 'general',
      isTopHeadlines: true,
      isCategory: true,
      sortNewsBy: 'relevancy',
      updateCategory: data => {
        set({ category: data });
      },
      toggleTopHeadline: data => {
        set({ isTopHeadlines: data });
      },
      toggleIsCategory: data => {
        set({ isCategory: data });
      },
      updateNewsSorting: data => {
        set({ sortNewsBy: data });
      },
    }),
    {
      name: 'category-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
