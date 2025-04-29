import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],

  addToCart: (event, quantity) => {
    const newItem = {
      id: event.id,
      name: event.name,
      price: event.price,
      quantity,
      totalPrice: event.price * quantity,
    };

    const updatedCart = [...get().cartItems, newItem];

    set({ cartItems: updatedCart });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  },

//   clearCart: () => {
//     set({ cartItems: [] });
//     localStorage.removeItem("cart");
//   },
}));