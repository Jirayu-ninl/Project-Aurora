import Link from 'next/link'

export default function ErrorPage({ err, msg }: { err: string, msg: string }) {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <p className='text-3xl sm:text-3xl'>SORRY</p>
      <h1 className=' text-9xl font-semibold sm:text-10xl'>{err}</h1>
      <h2 className='-mt-4 text-2xl sm:text-3xl'>{msg}</h2>
      <Link href='/home'>
        <a className='Btn-white-40 mt-6 sm:mt-12'>
          <button className=''>TAKE ME HOME</button>
        </a>
      </Link>
    </div>
  )
}
