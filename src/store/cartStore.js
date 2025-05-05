import { create } from "zustand";

function generateTicketNumber() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function randomSection() {
  const sections = ["A", "B", "C", "D"];
  return sections[Math.floor(Math.random() * sections.length)];
}

export const useCartStore = create((set, get) => ({
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  orders: JSON.parse(localStorage.getItem("orders") || "[]"),

  addToCart: (newItem) => {
    const { cartItems } = get();
  
    const existingItem = cartItems.find(item => item.id === newItem.id);
  
    let updatedCart;
  
    if (existingItem) {
      updatedCart = cartItems.map(item =>
        item.id === newItem.id
          ? {
              ...item,
              quantity: newItem.quantity,
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
  
  submitOrder: () => {
    const cart = get().cartItems;
  
    const tickets = cart.flatMap(item => {
      const section = randomSection();
      const startSeat = Math.floor(Math.random() * 50) + 1; 
      return Array.from({ length: item.quantity }, (_, i) => ({
        ticketNumber: generateTicketNumber(),
        section,
        seat: startSeat + i,
        eventName: item.name,
        where: item.where,
        date: item.date,
        from: item.from,
        to: item.to,
      }));
    });
  
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const updatedOrders = [...existingOrders, ...tickets];
  
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    set({ cartItems: [] }); 
    localStorage.setItem("cart", JSON.stringify([]));
  }
  
}));