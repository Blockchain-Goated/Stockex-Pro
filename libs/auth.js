import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      setAuth: (value) => set(() => ({ isAuthenticated: value })),
    }),
    { name: "auth" } // Name of localstorage key
  )
);
