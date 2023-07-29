import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { State } from '@global/store'
import { getInviewAnimationValue } from '@aurora/views/animations'

import { getNavSection } from './state.data'

const SetState = () => {
  const scroll = useScroll()
  const _setNavRouteActiveState = State((state) => state.setNavRouteActiveState)

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
