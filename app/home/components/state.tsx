import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { State } from '@global/store'
import { getInviewAnimationValue } from '@aurora/views/animations'

import { getNavSection } from './state.data'

const SetState = () => {
  const id = useSearchParams().get('id')
  const scroll: any = useScroll()
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

  useEffect(() => {
    switch (id) {
      case 'intro':
        scroll.scroll.current = 0.07
        break
      case 'passionate':
        scroll.scroll.current = 0.22
        break
      case 'skills':
        scroll.scroll.current = 0.3
        break
      case 'projects':
        scroll.scroll.current = 0.75
        break
      case 'services':
        scroll.scroll.current = 0.875
        break
      default:
        scroll.scroll.current = 0
        break
    }
  }, [id, scroll.scroll])

  useFrame(() => {
    const scrollDate = getNavSection(scroll)
    _setNavRouteActiveState({
      id: scrollDate.index,
      scrollable: true,
      motionValue:
        getInviewAnimationValue(
          [scrollDate.start, scrollDate.end],
          scroll.offset,
        ) *
          100 +
        '%',
      scrollProgress: 10,
    })
  })

  return null
}

export default SetState
