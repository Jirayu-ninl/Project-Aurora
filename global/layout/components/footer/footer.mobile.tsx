'use client'

import { ContactBlock } from './components'

function FooterMobile() {
  return (
    <>
      <div className='absolute bottom-4 flex w-full flex-col items-center justify-center md:hidden'>
        <ContactBlock />
        <div className='mt-1 text-center text-xs'>
          <span className='opacity-40'>
            Copyright©{new Date().getFullYear()} by{' '}
          </span>
          <a href='http://TheIceJI.com/home' className='Anim AnimOpacity-60'>
            Jirayu Ninlapun
          </a>
        </div>
      </div>
    </>
  )
}

export default FooterMobile
