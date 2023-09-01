import { SetPage } from '@aurora/views/state'

const Layout = (p: { children: React.ReactNode }) => {
  return (
    <>
      <SetPage title='New user' />
      <div className='m-container w-dvw flex items-center justify-center bg-gradient-to-br from-backgroundLight-1 to-blue-200 pt-12 dark:from-background-3 dark:to-background-0 sm:pt-16'>
        <div className='relative h-[32rem] w-[20rem] overflow-hidden rounded-lg bg-backgroundLight-0 p-3 shadow-2xl shadow-black/5 dark:bg-background-1 dark:shadow-black/30 md:h-[50rem] md:w-[32rem] md:rounded-3xl md:p-6 xl:h-[35rem] xl:w-[60rem]'>
          {p.children}
        </div>
      </div>
    </>
  )
}

export default Layout
