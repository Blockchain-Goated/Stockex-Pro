import create from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  setAuth: (value) => set(() => ({ isAuthenticated: value })),
}));
