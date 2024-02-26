import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuidv4 } from 'uuid';

const getLocalStorageCartItems = () => {
  const localItems = localStorage.getItem('local_items');
  return JSON.parse(localItems) || [];
};

export const useCartStore = create(
  immer((set) => ({
    cart: getLocalStorageCartItems(),
    addProduct: (product) =>
      set((state) => {
        const temp = {
          ...product,
          uuid: uuidv4(),
        };
        state.cart = [...state.cart, temp];
        localStorage.setItem('local_items', JSON.stringify(state.cart));
      }),
    deleteProduct: (uuid) =>
      set((state) => {
        const index = state.cart.findIndex((p) => p.uuid === uuid);
        state.cart.splice(index, 1);
      }),
  }))
);
