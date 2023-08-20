import { useState } from 'react'
import { Text } from '@react-three/drei'
import { toast } from 'react-toastify'
import { subscribeCall } from './contact.subscribeCall'
import { Send } from '@aurora/assets/icons'

const HTML = () => {
  const [email, setEmail] = useState('')

  const subscription = () => {
    subscribeCall({ email })
  }

  return (
    <>
      <div className='absolute top-[1280dvh] flex h-[100vh] w-screen flex-col items-center justify-between sm:top-[1380vh] md:top-[1380vh] xl:top-[1400vh]'>
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
            className='Anim AnimOpacity-60 absolute right-0 top-0 h-full w-10 fill-black p-2.5 dark:fill-white md:right-2 md:w-16 md:p-4 xl:w-24 el:right-4 el:w-32 el:p-6'
            aria-label='Subscribe to my newsletter'
            title='Subscribe to my newsletter'
            type='submit'
          >
            <Send />
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
