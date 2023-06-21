async function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
        <h1>Profile {id}</h1>
      </main>
    </>
  )
}

export default Page
