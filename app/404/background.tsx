import Image from 'next/image'

const Background = () => {
  return (
    <>
      <Image
        src='/images/bg/hex-pattern.png'
        alt='background'
        fill
        style={{ objectFit: 'cover' }}
        className='pointer-events-none z-0 h-full w-full opacity-[0.07] saturate-0'
      />
    </>
  )
}

export { Background }
