import { create } from "zustand";
import { CAMERA_PROPS } from "../constants/objects";

export const useSceneStore = create((set) => ({
  catGhost: null,
  setCatGhost: () => set((state) => ({ catGhost: state.catGhost })),
  cameraControl: null,
  setCameraControl: (cameraControl) => set({ cameraControl }),
  cameraControlProps: CAMERA_PROPS,
  setCameraControlProps: (cameraControlProps) => set({ cameraControlProps }),
  planetSelected: null,
  setPlanetSelected: (planetSelected) => set({ planetSelected }),
}));
