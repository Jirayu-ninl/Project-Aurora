import Image from 'next/image'
// import SetState from '@aurora/views/state/setDefaultNavActiveState'
// import { useRouter } from 'next/navigation'
// import { toast } from 'react-toastify'

const Page = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter()

  // if (router.query.error) {
  //   switch (router.query.error) {
  //     case 'CredentialsSignin':
  //       toast.error('Invalid username or password')
  //       break
  //     case 'OAuthAccountNotLinked':
  //       toast.error('This email already signup with different social account')
  //       break
  //     default:
  //       toast.error('Error: ' + router.query.error)
  //   }
  // }

  return (
    <>
      {/* <SetState /> */}
      <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-black'>
        <div className='flex md:h-[410px]'>
          <div className='relative hidden h-full w-96 overflow-hidden rounded-lg md:block'>
            <Image
              src='/cover.jpg'
              alt='TheIceJI'
              objectFit='cover'
              fill
              quality={100}
            />
          </div>
          <div className='h-full'>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Page
