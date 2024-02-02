import { Client } from './page.client'
import { Cards } from './cards'
import { Project } from './projects'

function Page() {
  return (
    <>
      <Client />
      <div className='md:h-dvh w-dvw flex flex-col items-center justify-center'>
        <div className='w-full px-8 pb-48 pt-8 md:pb-0 md:pt-0 xl:w-[900px] xl:px-0 xxl:w-[1000px]'>
          <Cards />
          <Project />
        </div>
      </div>
    </>
  )
}

export default Page
