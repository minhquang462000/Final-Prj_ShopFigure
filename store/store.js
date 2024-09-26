import create from "zustand";
import { IProduct, ICart } from "@/interfaces";
import { get } from "http";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product, quantity) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((item) => {
            if (item.product.id === product.id) {
              return { ...item, quantity: item.quantity + quantity };
            }
            return item;
          }),
        };
      } else {
        return {
          cart: [...state.cart, { product, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),
  getCart: () => set((state) => ({ cart: state.cart })),
}));
export default useCartStore;
