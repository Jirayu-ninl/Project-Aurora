import create from 'zustand'

const store = (set) => ({
  performance: 3,
  setPerformances: (level: number) => set(() => ({ performance: level })),
  gpuTier: null,
  setGpuTier: (gpuTier) => set(() => ({ gpuTier: gpuTier })),
  dark: true,
  toggleDark: (state) => set(() => ({ dark: !state.dark })),
  cursor: false,
  setCursor: (cursor: string | boolean) => set(() => ({ cursor: cursor })),
  audio: false,
  setAudio: (audio) => set(() => ({ audio: audio })),
  appInfo: false,
  setAppInfo: (appInfo: boolean) => set(() => ({ appInfo: appInfo })),
})

const store_UI = create(store)

export default store_UI
