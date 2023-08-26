'use client'

import Link from 'next/link'

const Page = () => {
  return (
    <>
      <h1 className='text-3xl font-bold md:text-6xl'>Terms of Service</h1>
      <hr className='mb-12 h-px w-full bg-black dark:bg-white' />
      <ul className='space-y-2 text-2xl'>
        <li>
          <Link
            href='/help/privacy-policy'
            className='Anim hover:text-quaternary-2 dark:hover:text-primary-0'
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href='/help/terms-of-service'
            className='Anim hover:text-quaternary-2 dark:hover:text-primary-0'
          >
            Terms of Service
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Page
