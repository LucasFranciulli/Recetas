// store.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface State {
  previousLanguage: string | null;
  setPreviousLanguage: (language: string) => void;
}

export const useUserData = create<State>()(
  persist(
    (set) => ({
      previousLanguage: null,
      setPreviousLanguage: (language) => set({ previousLanguage: language }),
    }),
    {
      name: "user-data-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
