import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type categoryDataType = {
  category: string;
  isTopHeadlines: boolean;
  headlinesCategory: string;
  isCategory: boolean;
  sortNewsBy?: string;
  updateCategory: (data: string) => void;
  toggleTopHeadline: (data: boolean) => void;
  toggleIsCategory: (data: boolean) => void;
  updateNewsSorting: (data: string) => void;
  updateHeadlinesCategory: (data: string) => void;
};

export const categoryState = create<categoryDataType>()(
  persist(
    set => ({
      category: 'general',
      isTopHeadlines: true,
      isCategory: true,
      sortNewsBy: 'relevancy',
      headlinesCategory: 'general',
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
      updateHeadlinesCategory: data => {
        set({ headlinesCategory: data });
      },
    }),
    {
      name: 'category-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
