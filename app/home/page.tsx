import { Title, Sidebar } from './components'

export default function Home() {
  return (
    <main className='relative h-screen w-screen overflow-hidden'>
      <Title />
      <Sidebar />
    </main>
  )
}
