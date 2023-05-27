import { create } from 'zustand'
import type { TierResult } from 'detect-gpu'

const store: tStore = (set) => ({
  performance: 3,
  setPerformances: (level) => set(() => ({ performance: level })),
  gpuTier: null,
  setGpuTier: (gpuTier) => set(() => ({ gpuTier: gpuTier })),
  dark: true,
  toggleDark: (state) => set(() => ({ dark: !state.dark })),
  cursor: false,
  setCursor: (cursor) => set(() => ({ cursor: cursor })),
  isLoading: false,
  setIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
  showNav: true,
  setShowNav: (show) => set(() => ({ showNav: show })),
  showFooter: true,
  setShowFooter: (show) => set(() => ({ showFooter: show })),
  navShowCanvas: false,
  setNavShowCanvas: (toggle) => set(() => ({ navCanvas: toggle })),
  navDropdown: false,
  setNavDropdown: (dropdown) => set(() => ({ navDropdown: dropdown })),
  modalAppInfo: false,
  setModalAppInfo: (toggle) => set(() => ({ modalAppInfo: toggle })),
  audio: false,
  setAudio: (audio) => set(() => ({ audio: audio })),
})

type tStore = (set: any) => tStoreState

type tStoreState = {
  performance: number
  setPerformances: (level: number) => void
  gpuTier: TierResult | null
  setGpuTier: (gpuTier: TierResult | null) => void
  dark: boolean
  toggleDark: (state: tStoreState) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  showNav: boolean
  setShowNav: (show: boolean) => void
  showFooter: boolean
  setShowFooter: (show: boolean) => void
  navShowCanvas: boolean
  setNavShowCanvas: (toggle: boolean) => void
  navDropdown: boolean | string
  setNavDropdown: (dropdown: boolean | string) => void
  modalAppInfo: boolean
  setModalAppInfo: (toggle: boolean) => void
  cursor: boolean
  setCursor: (cursor: string | boolean) => void
  audio: boolean
  setAudio: (audio: boolean) => void
}

const store_UI = create(store)

export default store_UI
