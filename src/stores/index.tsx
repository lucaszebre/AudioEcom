import { useEffect } from 'react';
import { create } from 'zustand';

interface ShopStore {
  Modal: boolean;
  ModalChecked: boolean;
  handleModal: () => void;
  setModalCheck: (value: boolean) => void;
}

// Define the state store using Zustand
export const useShopStore = create<ShopStore>((set) => ({
  Modal: false,
  ModalChecked: false,

  handleModal: () => {
    set((state) => ({ Modal: !state.Modal }));
  },

  setModalCheck: (value) => {
    set({ ModalChecked: value });
  },
}));


 


