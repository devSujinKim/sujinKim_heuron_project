import { create } from 'zustand';

interface ImageState {
  isGrayscale: boolean;
  toggleGrayscale: () => void;
  scale: number;
  rotation: number;
  setScale: (scale: number) => void;
  setRotation: (rotation: number) => void;
  resetTransformation: () => void;
}

export const useImageStore = create<ImageState>((set) => ({
  isGrayscale: false,
  scale: 1.0,
  rotation: 0,
  toggleGrayscale: () => set((state) => ({ isGrayscale: !state.isGrayscale })),
  setScale: (scale: number) => set({ scale }),
  setRotation: (rotation: number) => set({ rotation }),
  resetTransformation: () =>
    set({
      scale: 1.0,
      rotation: 0,
    }),
}));
