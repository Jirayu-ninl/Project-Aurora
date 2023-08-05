import type { Mesh } from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import Text from './marquee.text'

import { MarqueeContent } from '@contents/pages/home'

const MarqueeSection = ({ _dark }: { _dark: boolean }) => {
  const MarqueeRef = useRef<Mesh[] | null>([])
  const MarqueeBehindRef = useRef<Mesh[] | null>([])

  const scroll = useScroll()

  useFrame(() => {
    MarqueeRef.current &&
      MarqueeRef.current.map(
        (row, index) =>
          (row.position.x =
            (!(index % 2) ? -10 : -15) *
            scroll.range(3.8 / scroll.pages, 4.2 / scroll.pages)),
      )
    MarqueeBehindRef.current &&
      MarqueeBehindRef.current.map(
        (row, index) =>
          (row.position.x =
            (!(index % 2) ? -6 : -10) *
            scroll.range(3.8 / scroll.pages, 4.2 / scroll.pages)),
      )
  })

  return (
    <>
      <mesh position={[0, -13, -1]} rotation={[0, 0, Math.PI / 24]}>
        {MarqueeContent.softSkills.map((row, index) => (
          <mesh
            position={[0, -index / 1.7, 0]}
            key={index}
            ref={(r) => {
              MarqueeRef.current![index] = r as Mesh
            }}
          >
            {row.map((c, i) => (
              <Text
                position={c.position as [number, number, number]}
                text={c.title.toUpperCase()}
                isOutline={c.isOutline}
                isBlack={!!(index % 2)}
                _dark={_dark}
                key={i}
              />
            ))}
          </mesh>
        ))}
      </mesh>
      <mesh position={[0, -13, -2]} rotation={[0, 0, Math.PI / 24]} scale={1.2}>
        {MarqueeContent.hardSkills.map((row, index) => (
          <mesh
            position={[-5, -index / 1.7, 0]}
            key={index}
            ref={(r) => {
              MarqueeBehindRef.current![index] = r as Mesh
            }}
          >
            {row.map((c, i) => (
              <Text
                position={c.position as [number, number, number]}
                text={c.title.toUpperCase()}
                isOutline={c.isOutline}
                isBlack={!!(index % 2)}
                _dark={_dark}
                isBehind={true}
                key={i}
              />
            ))}
          </mesh>
        ))}
      </mesh>
    </>
  )
}

export default MarqueeSection
