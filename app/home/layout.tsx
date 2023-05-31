function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative h-screen w-screen'>
      {/* <div className='absolute h-full w-full'>
        <h1 className='text-10xl'>BG</h1>
      </div> */}
      <div className='pointer-events-none absolute h-full w-full'>
        {children}
      </div>
    </div>
  )
}

export default Layout
