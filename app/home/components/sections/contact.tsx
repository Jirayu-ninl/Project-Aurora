import { useState } from 'react'
import { Text } from '@react-three/drei'
import { toast } from 'react-toastify'
import { subscribeCall } from './contact.subscribeCall'

const HTML = () => {
  const [email, setEmail] = useState('')

  const subscription = () => {
    subscribeCall({ email })
  }

  return (
    <>
      <div className='absolute top-[1380vh] flex h-[100vh] w-screen flex-col items-center justify-between md:top-[1380vh] xl:top-[1400vh]'>
        <form
          className='relative'
          onSubmit={async (event) => {
            event.preventDefault()
            try {
              subscription()
              toast('Drop an email')
            } catch (e) {
              toast.error("Can't send, server error")
              throw new Error("UI/Newsletter: user can't drop email")
            }
          }}
        >
          <input
            aria-label='Email'
            id='email-input'
            type='email'
            placeholder='your@email.com'
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            className='bg-black/5 px-4 py-2 text-lg font-light text-white backdrop-blur-lg dark:bg-white/5 md:px-12 md:py-4 md:text-4xl xl:text-6xl el:text-8xl'
          />
          <button
            className='Anim AnimOpacity-60 absolute bottom-2 right-2 bg-black px-4 py-2 text-3xl uppercase text-white dark:bg-white dark:text-black'
            aria-label='Subscribe to my newsletter'
            title='Subscribe to my newsletter'
            type='submit'
          >
            Drop
          </button>
        </form>
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
