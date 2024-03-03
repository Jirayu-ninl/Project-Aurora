/* eslint-disable react/display-name */
import { forwardRef, useMemo } from 'react'
import { BadTVEffect } from './effect.badTV'

export const BadTVPass = forwardRef(
  (
    { distortion = 3.0, distortion2 = 5.0, speed = 0.2, rollSpeed = 0.1 },
    ref,
  ) => {
    const effect = useMemo(
      () => new BadTVEffect({ distortion, distortion2, speed, rollSpeed }),
      [distortion, distortion2, speed, rollSpeed],
    )
    return <primitive ref={ref} object={effect} dispose={null} />
  },
)
