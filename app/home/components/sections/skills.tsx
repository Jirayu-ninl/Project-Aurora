import { useRef, type RefObject } from 'react'
import { MathUtils, type Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { getInviewAnimationValue } from '@aurora/views/animations'

import { CircleParticles } from './skills.circleParticles'
import { SkillsFrontendData, SkillsBackendData } from '@contents/pages/home'

const R3F = ({
  _dark,
  scrollRef,
  isMobile,
}: {
  _dark: boolean
  scrollRef: RefObject<any>
  isMobile: boolean
}) => {
  const $ring = useRef<Mesh>(null)
  const $frontRing = useRef<any>(null)
  const $backRing = useRef<any>(null)

  const scroll = useScroll()

  useFrame(() => {
    const prePoint = 7.4 / scroll.pages
    const startPoint = 7.6 / scroll.pages
    const endPoint = 9.5 / scroll.pages

    if (prePoint <= scroll.offset && scroll.offset <= startPoint) {
      $ring.current &&
        $ring.current.position.set(
          isMobile ? -1 : -1.7,
          MathUtils.lerp(
            $ring.current.position.y,
            -scrollRef.current?.position.y,
            getInviewAnimationValue([prePoint, startPoint], scroll.offset),
          ),
          0,
        )
    } else if (startPoint <= scroll.offset && scroll.offset <= endPoint) {
      $ring.current &&
        $ring.current.position.set(
          isMobile ? -1 : -1.7,
          -scrollRef.current?.position.y,
          0,
        )
      $frontRing.current &&
        $frontRing.current.rotation.set(
          0,
          0,
          scroll.range(startPoint, endPoint) * 20,
        )
      $backRing.current &&
        $backRing.current.rotation.set(
          0,
          0,
          -scroll.range(startPoint, endPoint) * 8,
        )
    }
  })

  return (
    <>
      <mesh
        position={isMobile ? [-1, -20, 0] : [-1.7, -20, 0]}
        ref={$ring}
        scale={isMobile ? 0.5 : 1}
      >
        <mesh rotation={[0, 0, 0]} ref={$frontRing}>
          <CircleParticles
            radius={1.8}
            numParticles={60}
            data={SkillsFrontendData}
            _dark={_dark}
          />
        </mesh>
        <mesh position={[0, 0, -1]} rotation={[0, 0, 0]} ref={$backRing}>
          <CircleParticles
            radius={3.2}
            numParticles={80}
            data={SkillsBackendData}
            _dark={_dark}
          />
        </mesh>
      </mesh>
    </>
  )
}

const SkillsSection = { R3F }
export default SkillsSection
