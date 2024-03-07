'use client'

const Page = () => {
  return (
    <>
      <div className='flex h-dvh w-dvw items-center justify-center'>
        <button
          type='button'
          className='Anim rounded-md border border-primary-0 px-2 py-1 hover:bg-primary-0 hover:text-black'
          onClick={() => {
            throw new Error('Debug: Throw error from TheIceJi-AURORA')
          }}
        >
          Throw error
        </button>
      </div>
    </>
  )
}

export default Page
