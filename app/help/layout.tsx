const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='w-dvw flex px-2 md:px-12 lg:px-32 xl:px-0'>
        <div className='container px-4 py-48 xl:w-[1024px]'>{children}</div>
      </div>
    </>
  )
}

export default Layout
