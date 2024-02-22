/* eslint-disable jsx-a11y/alt-text */
import { MathUtils } from 'three'
import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, useScroll } from '@react-three/drei'

type props = {
  url: string
  scale: number
  alt?: string
  position?: [number, number, number]
}

const ImageItem = ({ url, scale, ...props }: props) => {
  const groupRef = useRef<any>()
  const visible = useRef<any>(false)
  const [hovered, hover] = useState(false)
  const imageRef = useIntersect<any>(
    (isVisible) => (visible.current = isVisible),
  )
  const { height } = useThree((state) => state.viewport)
  const scroll = useScroll()

  useFrame((state, delta) => {
    if (imageRef.current) {
      const ref = imageRef.current
      ref.position.y = MathUtils.damp(
        ref.position.y,
        visible.current ? 0 : -height / 2 + 1,
        4,
        delta,
      )
      ref.material.zoom = MathUtils.damp(
        ref.material.zoom,
        visible.current ? 1 : 1.5,
        4,
        delta,
      )
      ref.material.grayscale = MathUtils.damp(
        ref.material.grayscale,
        hovered ? 1 : 0,
        4,
        delta,
      )
      ref.current.material.grayscale = MathUtils.damp(
        ref.current.material.grayscale,
        Math.max(0, 1 - scroll.delta * 1000),
        4,
        delta,
      )
    }
    if (groupRef.current) {
      const ref = groupRef.current
      ref.position.z = MathUtils.damp(
        ref.position.z,
        Math.max(0, scroll.delta * 50),
        4,
        delta,
      )
    }
  })

  return (
    <group {...props} ref={groupRef}>
      <Image
        ref={imageRef}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        scale={scale as number}
        url={url}
      />
    </group>
  )
}
export default ImageItem
