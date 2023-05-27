import Contents from 'contents/pages/services.web'

function Main() {
  return (
    <div className='flex w-screen'>
      <div className='container py-48 px-4 xl:w-[1200px]'>
        {Contents.map((v, i) => (
          <Section content={v} key={i} />
        ))}
      </div>
    </div>
  )
}

const Section = ({ content }) => (
  <div className='relative w-full'>
    <p className='absolute -left-28 -top-28 -z-10 text-10xl font-bold text-primary-0'>
      0{content.number}
    </p>
    {content.content.map((v, i) => (
      <>
        <Header header={v.header} key={i} />
        <div className='grid grid-cols-4 gap-x-4 pt-8'>
          {v.cards.map((v, i) => (
            <Card card={v} key={i} />
          ))}
        </div>
      </>
    ))}
  </div>
)

const Header = ({ header }) => {
  return (
    <div className='Card-back-md-40 mt-8 flex w-full items-center justify-between rounded-md border border-[#323335] py-4 px-8'>
      <div>
        <h1 className='text-3xl font-semibold'>{header.title}</h1>
        <h2 className='opacity-60'>{header.subTitle}</h2>
      </div>
      <ul className='grid list-disc grid-cols-2 gap-x-8'>
        {header.benefits.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  )
}

const Card = ({ card }) => (
  <div className='Card-back-md-40 flex flex-col overflow-hidden rounded-md border border-[#323335] pb-8'>
    <div
      className='p-8'
      style={{
        backgroundColor: card.color.headerBg,
        color: card.color.headerText,
      }}
    >
      <h3 className='text-2xl font-semibold'>{card.title}</h3>
      <h4 className='text-sm opacity-80'>{card.subTitle}</h4>
    </div>
    <ul className='list-disc py-8 pl-12 pr-8 text-sm'>
      {card.details.map((v, i) => {
        if (v.title === 'PLUS') {
          return (
            <div key={i} className='my-4 flex items-center'>
              <p>PLUS</p>
              <div className='ml-2 h-px w-full bg-white/20' />
            </div>
          )
        } else {
          return (
            <>
              <li className='pt-3'>{v.title}</li>
              {v.description && (
                <p className='pt-1 pb-2 text-xs opacity-60'>{v.description}</p>
              )}
            </>
          )
        }
      })}
    </ul>
    <div className='mt-auto flex justify-between px-8'>
      <p className='text-3xl'>${card.value}</p>
      <button className='Card-back-md-40 h-full border border-white/20 px-2'>
        SELECT
      </button>
    </div>
  </div>
)

export default Main
