import Link from 'next/link'

const Overlay = () => {
  return (
    <>
      <div className='pointer-events-none absolute flex h-full w-full items-center justify-center'>
        <div className='flex h-full w-full flex-col justify-between py-[15vh] opacity-80 xxl:w-[1440px]'>
          <div className='z-30'>
            <h2 className='text-8xl font-bold'>/not</h2>
            <p className='pt-4 font-light'>Could not find requested resource</p>
            <Link
              className='Anim pointer-events-auto mt-8 cursor-pointer underline opacity-50 hover:underline hover:opacity-100'
              href='/home'
            >
              Comeback home
            </Link>
          </div>

          <h2 className='ml-auto text-8xl font-bold'>found</h2>
        </div>
      </div>
    </>
  )
}

export { Overlay }
