import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';


type countryInfoType = {
  countryData: string;
  countryCode: string;
  updateCountryData: (data: string) => void;
  updateCountryCode: (data: string) => void;
  clearCountryData: () => void;
};



export const useCountryStore = create<countryInfoType>()(
  persist(
    set => ({
      countryData: '',
      countryCode: '',
      updateCountryData: (data: string) => {
        set({ countryData: data });
      },
      updateCountryCode: data => {
        set({ countryCode: data });
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
