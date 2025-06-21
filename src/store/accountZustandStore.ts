import {create} from 'zustand';

interface ZutandStore {
  isLogin: boolean;
  dataAccount: any;
  setDataAccount: (dataAccount: any) => void;
  setIsLogin: (isLogin: boolean) => void;
}

const initialSettingState = {
  isLogin: false,
  dataAccount: {},
};

export const useAccountZutandStore = create<ZutandStore>((set, get) => ({
  ...initialSettingState,
  setDataAccount: (dataAccount: any) => {
    set({dataAccount});
  },
  setIsLogin: (isLogin: boolean) => {
    set({isLogin});
  },
}));
