const Dashboard = () => {
  return (
    <div className='flex h-screen w-screen bg-gradient-to-tl from-indigo-500 to-cyan-500 px-5 pt-28 pb-12'>
      <div className='Card-back-md-40 w-24 p-6'></div>
      <div className='Card-back-md-40 ml-5 flex w-full items-center justify-center'>
        <p>Coming soon</p>
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div className='Card-back-md-40 w-full p-6'>
      <p>Hello</p>
    </div>
  )
}

const CardsContainer = () => {
  return (
    <div className='Card-back-md-40 ml-5 grid w-full grid-cols-6 gap-8 p-6'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Dashboard
