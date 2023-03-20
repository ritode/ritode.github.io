import { create } from "zustand";

export const useSceneStore = create((set) => ({
  cameraController: null,
  setCameraController: () =>
    set((state) => ({ cameraController: state.cameraController })),
}));
