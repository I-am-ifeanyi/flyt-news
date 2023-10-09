import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type userDataType = {
  userName: string;
  email: string;
  phone: number | string;
  password: string;
};

type userStatusType = {
  userStatus: string;
};

type TUserInfo = {
  userInfo: userDataType;
  userStatus: userStatusType;
  updateUserData: (data: userDataType) => void;
  updateUserStatus: (data: userStatusType) => void;
  clearUserData: () => void;
};

export const userStore = create<TUserInfo>()(
  persist(
    set => ({
      userInfo: { userName: '', email: '', phone: '', password: '' },
      userStatus: { userStatus: '' },
      updateUserData: data => {
        set(state => ({
          userInfo: {
            userName: data.userName,
            email: data.email,
            phone: data.phone,
            password: data.password,
          },
        }));
      },
      updateUserStatus: data => set({ userStatus: data }),
      clearUserData: () =>
        set({
          userInfo: { userName: '', email: '', phone: '', password: '' },
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
