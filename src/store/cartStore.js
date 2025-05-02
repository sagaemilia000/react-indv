import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],

  addToCart: (newItem) => {
    const { cartItems } = get();
  
    const existingItem = cartItems.find(item => item.id === newItem.id);
  
    let updatedCart;
  
    if (existingItem) {
      updatedCart = cartItems.map(item =>
        item.id === newItem.id
          ? {
              ...item,
              quantity: newItem.quantity, //+ newItem.quantity,
              // totalPrice: (item.quantity + newItem.quantity) * item.price,
              totalPrice: newItem.quantity * item.price,
            }
          : item
      );
    } else {
      updatedCart = [...cartItems, newItem];
    }
  
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

  getQuantityById: (id) => {
    const item = get().cartItems.find(item => item.id === id);
    return item ? item.quantity : 1;
  },
}));