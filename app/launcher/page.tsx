import { Client } from './page.client'
import { Cards } from './cards'
import { Project } from './projects'

function Page() {
  return (
    <>
      <Client />
      <div className='m-container w-dvw flex flex-col items-center justify-center'>
        <div className='xl:w-[1000px]'>
          <Cards />
          <Project />
        </div>
      </div>
    </>
  )
}

export default Page
