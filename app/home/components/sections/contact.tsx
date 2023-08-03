import { Text } from '@react-three/drei'

const HTML = () => {
  return (
    <>
      <div className='absolute top-[1380vh] flex h-[100vh] w-screen flex-col items-center justify-between md:top-[1400vh]'>
        <input
          type='text'
          placeholder='E-MAIL'
          className='bg-black/5 px-4 py-2 text-lg font-light text-white backdrop-blur-lg dark:bg-white/5 md:px-12 md:py-4 md:text-8xl'
        />
      </div>
    </>
  )
}

const R3F = ({ _dark, isMobile }: { _dark: boolean; isMobile: boolean }) => {
  return (
    <>
      <mesh position={[0, -37, -1]}>
        <Text
          font={`/three/fonts/Inter-ExtraLight.woff`}
          scale={isMobile ? 0.2 : 0.8}
          color={_dark ? 'white' : 'black'}
        >
          DROP ME A LINE
        </Text>
      </mesh>
    </>
  )
}

const Contact = { HTML, R3F }
export default Contact
