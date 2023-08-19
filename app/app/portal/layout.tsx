import Image from 'next/image'

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='m-container w-svw flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-black'>
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
