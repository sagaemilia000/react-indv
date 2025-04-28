import { create } from 'zustand';
import axios from 'axios';

const useTicketStore = create((set) => ({
  events: [],
  isLoading: false,
  error: null,

  fetchEvents: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get('https://santosnr6.github.io/Data/events.json');
      set({ events: response.data.events, isLoading: false });
    } catch (err) {
      console.error('Error fetching events:', err);
      set({ error: 'Kunde inte ladda events', isLoading: false });
    }
  },
}));

export default useTicketStore;