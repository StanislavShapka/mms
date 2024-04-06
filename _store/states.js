import { create } from 'zustand'

export const useNewsStore = create((set) => ({
  visible: false,
  setVisible: () => set((state) => ({ visible: true })),
  setUnvisible: () => set((state) => ({ visible: false }))
}))

export const useMusicStore = create((set) => ({
  visible: false,
  setVisible: () => set((state) => ({ visible: true })),
  setUnvisible: () => set((state) => ({ visible: false }))
}))

export const useAlbumStore = create((set) => ({
  visible: false,
  setVisible: () => set((state) => ({ visible: true })),
  setUnvisible: () => set((state) => ({ visible: false }))
}))

export const useSharedState = create(set => ({
  playing: false,
  play: () => set(state => ({playing: true})),
  stopPlay: () => set(state => ({playing: false})),
}));