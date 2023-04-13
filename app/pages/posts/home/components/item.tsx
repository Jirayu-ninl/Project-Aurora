import { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Image, useScroll } from '@react-three/drei'
import useStore from '../store'

const damp = THREE.MathUtils.damp

function Item({ index, position, scale, c = new THREE.Color(), project }) {
  const ref = useRef()
  const scroll = useScroll()

  const clicked = useStore((state) => state.clicked)
  const projects = useStore((state) => state.projects)
  const setClicked = useStore((state) => state.setClicked)

  const [hovered, hover] = useState(false)

  const click = () => setClicked(index === clicked ? null : index)
  const over = () => hover(true)
  const out = () => hover(false)

  useFrame((state, delta) => {
    const y = scroll.curve(
      index / projects.length - 1.5 / projects.length,
      4 / projects.length,
    )
    ref.current.material.scale[1] = ref.current.scale.y = damp(
      ref.current.scale.y,
      clicked === index ? 5 : 4 + y,
      8,
      delta,
    )
    ref.current.material.scale[0] = ref.current.scale.x = damp(
      ref.current.scale.x,
      clicked === index ? 8 : scale[0],
      6,
      delta,
    )
    if (clicked !== null && index < clicked)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] - 3.65,
        6,
        delta,
      )
    if (clicked !== null && index > clicked)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] + 3.65,
        6,
        delta,
      )
    if (clicked === null || clicked === index)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0],
        6,
        delta,
      )
    ref.current.material.grayscale = damp(
      ref.current.material.grayscale,
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      6,
      delta,
    )
    ref.current.material.color.lerp(
      c.set(hovered || clicked === index ? 'white' : '#646464'),
      hovered ? 0.3 : 0.1,
    )
  })

  return (
    <Image
      ref={ref}
      //   {...props}
      url={project.coverImage.url}
      alt={project.title}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
    />
  )
}

export default Item
