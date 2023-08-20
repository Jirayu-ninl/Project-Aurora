import * as THREE from 'three'
import { Text } from '@react-three/drei'
import { theme } from '@global/config/defineConfig'
import { Color as ColorUtils } from '@aurora/libs/webGL/utils'
import { UI } from '@global/store'

const HTML = () => {
  const _setCursor = UI((state) => state.setCursor)

  return (
    <>
      <div className='absolute top-[1410dvh] flex h-[100vh] w-screen flex-col items-center justify-between md:top-[1520vh]'>
        <div className='relative h-[70vh] w-[1280px]'>
          <p
            className='absolute bottom-0 left-1/2 -translate-x-1/2 uppercase tracking-wide xl:-translate-x-[120px]'
            onMouseEnter={() => _setCursor('logo')}
            onMouseMove={() => _setCursor('logo')}
            onMouseLeave={() => _setCursor(false)}
          >
            Shall we begin
          </p>
        </div>
      </div>
    </>
  )
}

const R3F = ({ _dark, isMobile }: { _dark: boolean; isMobile: boolean }) => {
  return (
    <>
      <group position={[0, -43, -1]}>
        <mesh position={isMobile ? [0, -1.5, -1] : [0, -1, -1]} scale={1.2}>
          <planeGeometry args={[8, 4.5, 2, 1]} />
          <meshStandardMaterial color={_dark ? '#000000' : [1.7, 1.7, 1.7]} />
        </mesh>
        <Text
          position={[0, 0.6, 0]}
          scale={isMobile ? 0.4 : 0.8}
          color={
            _dark
              ? ColorUtils.HEXtoThree('#ffa900', 7, THREE.Color)
              : theme.color.quaternary[2]
          }
          font={'/three/fonts/Inter-ExtraLight.woff'}
        >
          TheIceJi
        </Text>
      </group>
    </>
  )
}

const Contact = { HTML, R3F }
export default Contact
