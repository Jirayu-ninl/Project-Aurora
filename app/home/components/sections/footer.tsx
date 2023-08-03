import { Text } from '@react-three/drei'

const HTML = () => {
  return (
    <>
      <div className='absolute top-[1400vh] flex h-[100vh] w-screen flex-col items-center justify-between'>
        {/* <input
          type='text'
          placeholder='E-MAIL'
          className='bg-white/5 px-12 py-4 text-8xl font-light text-white backdrop-blur-lg'
        /> */}
        <h3 className='text-10xl'>DROP ME A LINE</h3>
      </div>
    </>
  )
}

const R3F = ({ _dark }: { _dark: boolean }) => {
  return (
    <>
      <mesh position={[0, -44, -1]} scale={1.2}>
        <planeGeometry args={[8, 4.5, 2, 1]} />
        <meshStandardMaterial color='black' />
      </mesh>
    </>
  )
}

const Contact = { HTML, R3F }
export default Contact
