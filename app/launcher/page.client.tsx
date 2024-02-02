'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useGLTF } from '@react-three/drei'

import { UI, State } from '@global/store'

export const Client = () => {
  const _setShowNav = UI((state) => state.setShowNav)
  const _setShowFooter = UI((state) => state.setShowFooter)
  const _setAudio = UI((state) => state.setAudio)
  const _setCursor = UI((state) => state.setCursor)
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  const routerOn = useSearchParams().get('routerOn')
  const target = useSearchParams().get('target')

  const router = useRouter()

  useEffect(() => {
    _setShowNav(false)
    _setShowFooter(false)
    useGLTF.preload('/three/model/desCube/model.glb')
    router.prefetch('/home')
  }, [_setShowNav, _setShowFooter, router])

  useEffect(() => {
    if (routerOn) {
      // _setShowNav(true)
      // _setShowFooter(true)
      // _setAudio(true)
      _setNavRouteActiveState({
        id: 0,
        scrollProgress: 0,
        pages: 1,
        scrollable: false,
      })
      const Go = () => {
        if (!target) return
        router.prefetch(target)
        setTimeout(() => {
          _setShowNav(true)
          _setShowFooter(true)
          _setAudio(true)
          _setCursor(false)
          router.push(target)
        }, 600)
        _setCursor(false)
      }
      Go()
    }
  }, [
    _setShowNav,
    _setShowFooter,
    _setAudio,
    _setNavRouteActiveState,
    _setCursor,
    routerOn,
    target,
    router,
  ])

  return <></>
}
