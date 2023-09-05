'use client'

import { useEffect } from 'react'
import { getGPUTier } from 'detect-gpu'
import { UI } from '@global/store'
import { GlobalStyles } from '@aurora/views/theme/global.css'
import Console from './console'

const Theme = () => {
  const _setGpuTier = UI((state) => state.setGpuTier)
  const _setDark = UI((state) => state.setDark)
  const _dark = UI((state) => state.dark)

  useEffect(() => {
    async function initGPUdata() {
      const gpuTier = await getGPUTier()
      _setGpuTier(gpuTier)
      console.log({ status: 'set GPU complete', GPUdata: gpuTier })
    }
    initGPUdata()
  }, [_setGpuTier])

  useEffect(() => {
    console.log(Console)
  }, [])

  useEffect(() => {
    function InitState() {
      if (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        _setDark(true)
      } else {
        _setDark(false)
      }
    }
    InitState()
  }, [_setDark])

  useEffect(() => {
    if (_dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [_dark])

  return <>{GlobalStyles(_dark)}</>
}

export default Theme
