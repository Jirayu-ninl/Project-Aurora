import { Title, Sidebar } from './components'

export default function Home() {
  const sideNav = [
    {
      name: 'Adaptability',
      url: '/home?title=Adaptability',
    },
    {
      name: 'Collaboration',
      url: '/home?title=Collaboration',
    },
    {
      name: 'Creativity',
      url: '/home?title=Creativity',
    },
    {
      name: 'Problem-solving',
      url: '/home?title=Problem-solving',
    },
    {
      name: 'Enthusiasm',
      url: '/home?title=Enthusiasm',
    },
  ]

  return (
    <main className='relative h-screen w-screen overflow-hidden'>
      <Title />
      <Sidebar items={sideNav} />
    </main>
  )
}
