import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type countryInfoType = {
  countryData: string;
  updateCountryData: (data: string) => void;
  clearCountryData: () => void;
};

export const useCountryStore = create<countryInfoType>()(
  persist(
    set => ({
      countryData: '',
      updateCountryData: (data: string) => {
        set({ countryData: data });
      },
      clearCountryData: () => {
        set({ countryData: '' });
      },
    }),
    {
      name: 'country-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
