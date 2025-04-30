import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],

  addToCart: (event, quantity) => {
    const newItem = {
      id: event.id,
      name: event.name,
      from: event.when.from,
      to: event.when.to,
      price: event.price,
      quantity,
      totalPrice: event.price * quantity,
    };

    const updatedCart = [...get().cartItems, newItem];

    set({ cartItems: updatedCart });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  },

  updateQuantity: (id, newQuantity) => {
    const updated = get().cartItems
      .map(item =>
        item.id === id
          ? { ...item, quantity: newQuantity, totalPrice: item.price * newQuantity }
          : item
      )
      .filter(item => item.quantity > 0);
  
    set({ cartItems: updated });
    localStorage.setItem("cart", JSON.stringify(updated));
  },
  
  removeItem: (id) => {
    const updated = get().cartItems.filter(item => item.id !== id);
    set({ cartItems: updated });
    localStorage.setItem("cart", JSON.stringify(updated));
  },
}));