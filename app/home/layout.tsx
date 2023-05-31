function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative h-screen w-screen'>
      <div className='absolute h-full w-full'>{children}</div>
      <div className='absolute h-full w-full'>
        <h1 className='BG'></h1>
      </div>
    </div>
  )
}

export default Layout
