import { useRef, type RefObject } from 'react'
import { useRouter } from 'next/navigation'
import { MathUtils, type Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { Scroll, useScroll, Text, Html } from '@react-three/drei'
import { getInviewAnimationValue } from '@aurora/views/animations'
import { BtnlineEdge } from '@resources/common/components/button'

import { CircleParticles } from './skills.circleParticles'
import { frontend, backend } from './skills.data'

const SkillsSection = ({
  _dark,
  scrollRef,
}: {
  _dark: boolean
  scrollRef: RefObject<any>
}) => {
  const $ring = useRef<Mesh>(null)
  const $frontRing = useRef<any>(null)
  const $backRing = useRef<any>(null)
  // const $sectionText = useRef<any>(null)
  // const $sectionBtn = useRef<any>(null)

  // const router = useRouter()
  const scroll = useScroll()

  useFrame(() => {
    const prePoint = 7.4 / scroll.pages
    const startPoint = 7.6 / scroll.pages
    const endPoint = 9.5 / scroll.pages

    // $sectionText.current &&
    //   $sectionText.current.position.set(
    //     2.7,
    //     -scrollRef.current.position.y - 1.3,
    //     0,
    //   )

    if (prePoint <= scroll.offset && scroll.offset <= startPoint) {
      $ring.current &&
        $ring.current.position.set(
          -1.7,
          MathUtils.lerp(
            $ring.current.position.y,
            -scrollRef.current?.position.y,
            getInviewAnimationValue([prePoint, startPoint], scroll.offset),
          ),
          0,
        )
    } else if (startPoint <= scroll.offset && scroll.offset <= endPoint) {
      $ring.current &&
        $ring.current.position.set(-1.7, -scrollRef.current?.position.y, 0)
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
      // $sectionText.current &&
      //   ($sectionText.current.fillOpacity = getInviewAnimationValue(
      //     [
      //       7.6 / scroll.pages,
      //       7.9 / scroll.pages,
      //       10.5 / scroll.pages,
      //       11 / scroll.pages,
      //     ],
      //     scroll.offset,
      //   ))

      // } else {
      //   $sectionText.current && ($sectionText.current.fillOpacity = 0)
    }
  })

  return (
    <>
      <mesh position={[-1.7, -20, 0]} ref={$ring}>
        <mesh rotation={[0, 0, 0]} ref={$frontRing}>
          <CircleParticles
            radius={1.8}
            numParticles={60}
            data={frontend}
            _dark={_dark}
          />
        </mesh>
        <mesh position={[0, 0, -1]} rotation={[0, 0, 0]} ref={$backRing}>
          <CircleParticles
            radius={3.2}
            numParticles={80}
            data={backend}
            _dark={_dark}
          />
        </mesh>
      </mesh>
      {/* <Text
        position={[2.7, -22, 0]}
        ref={$sectionText}
        anchorX='right'
        anchorY='bottom'
        scale={0.4}
        font={'/three/fonts/Inter-SemiBold.woff'}
        color={_dark ? '#fff' : '#010101'}
        fillOpacity={0}
      >
        SKILLS
      </Text> */}
    </>
  )
}

export default SkillsSection
