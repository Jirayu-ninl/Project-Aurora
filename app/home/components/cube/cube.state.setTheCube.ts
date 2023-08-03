import type { ScrollControlsState } from '@react-three/drei'
import { getInviewAnimationValue } from '@aurora/views/animations'
import { getCubeState } from './cube.state.date'

export const setTheCubePositionX = (
  positionX: number,
  scroll: ScrollControlsState,
  isMobile = false,
): number => {
  const cubeState = getCubeState(scroll.pages)

  if (scroll.offset <= cubeState.passionSection.START) {
    positionX = -Math.sin(scroll.offset * (scroll.pages * 1.2)) * 2
  } else if (
    cubeState.passionSection.START < scroll.offset &&
    scroll.offset <= cubeState.passionSection.END
  ) {
    positionX = 0
  } else if (
    cubeState.skillsSection.pre.START < scroll.offset &&
    scroll.offset <= cubeState.skillsSection.pre.END
  ) {
    positionX =
      -getInviewAnimationValue(
        [cubeState.skillsSection.pre.START, cubeState.skillsSection.pre.END],
        scroll.offset,
        1,
      ) * 2
  } else if (
    cubeState.skillsSection.inView.START < scroll.offset &&
    scroll.offset < cubeState.skillsSection.inView.END
  ) {
    positionX = -2
  } else if (
    cubeState.projectSection.pre.START < scroll.offset &&
    scroll.offset < cubeState.projectSection.pre.END
  ) {
    positionX =
      getInviewAnimationValue(
        [cubeState.projectSection.pre.START, cubeState.projectSection.pre.END],
        scroll.offset,
        1,
      ) *
        4 -
      2
  } else if (
    cubeState.projectSection.inView.START < scroll.offset &&
    scroll.offset <= cubeState.projectSection.inView.END
  ) {
    positionX = 2
  } else if (cubeState.preFooter.START < scroll.offset && scroll.offset <= 1) {
    positionX =
      2 -
      getInviewAnimationValue(
        [cubeState.preFooter.START, cubeState.preFooter.END],
        scroll.offset,
        1,
      ) *
        2
  } else {
    positionX = 0
  }

  if (isMobile) {
    positionX = positionX * 0.35
  }
  return positionX
}

export const setTheCubePositionZ = (
  positionZ: number,
  scroll: ScrollControlsState,
): number => {
  const cubeState = getCubeState(scroll.pages)

  if (0 / scroll.pages < scroll.offset && scroll.offset <= 4 / scroll.pages) {
    positionZ =
      getInviewAnimationValue(
        [
          1.4 / scroll.pages,
          2.2 / scroll.pages,
          2.4 / scroll.pages,
          3.2 / scroll.pages,
        ],
        scroll.offset,
      ) * -1.5
  } else if (
    cubeState.projectSection.pre.START < scroll.offset &&
    scroll.offset < cubeState.projectSection.pre.END
  ) {
    positionZ =
      getInviewAnimationValue(
        [cubeState.projectSection.pre.START, cubeState.projectSection.pre.END],
        scroll.offset,
      ) * -0.5
  } else if (
    cubeState.projectSection.pre.END < scroll.offset &&
    scroll.offset <= 1
  ) {
    positionZ = -0.5
  } else {
    positionZ = 0
  }
  return positionZ
}

export const setTheCubeScale = (
  initialScale: number,
  scroll: ScrollControlsState,
  isMobile = false,
): number => {
  let Scale: number
  const cubeState = getCubeState(scroll.pages)

  if (cubeState.diamondZoom.START < scroll.offset) {
    const mulScale = isMobile ? 1 : 1.5
    Scale =
      initialScale +
      getInviewAnimationValue(
        [cubeState.diamondZoom.START, cubeState.diamondZoom.END],
        scroll.offset,
        1,
      ) *
        mulScale
  } else {
    Scale = initialScale
  }

  return Scale
}
