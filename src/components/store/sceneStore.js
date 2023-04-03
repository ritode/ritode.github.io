import { create } from "zustand";

export const useSceneStore = create(() => ({
  catGhost: null,
  cameraControl: null,
}));
