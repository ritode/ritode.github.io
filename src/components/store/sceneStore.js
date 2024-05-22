import { create } from "zustand";

export const useSceneStore = create((set) => ({
  planetSelected: null,
  setPlanetSelected: (planetSelected) => set({ planetSelected }),
}));
