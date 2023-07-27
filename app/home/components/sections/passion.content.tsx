import { ContentData } from './passion.content.data'

const PassionSectionContent = () => {
  return (
    <>
      <div className='absolute top-[260vh] flex h-[70vh] w-screen flex-col items-center justify-between'>
        {ContentData.map((row, index) => (
          <div className='flex w-[1440px] justify-between' key={index}>
            {row.map((item, index2) => (
              <div
                className='Anim relative w-1/3 cursor-pointer overflow-hidden rounded-lg border border-black/20 bg-white/10 p-10 pb-12 backdrop-blur-lg hover:bg-primary-0 dark:border-white/40 dark:hover:bg-tertiary-2'
                key={index2}
              >
                <h2 className=' mb-6 text-4xl font-bold'>
                  {item.title[0]} <br /> {item.title[1]}
                </h2>
                <h6 className='absolute -right-4 -top-8 text-8xl font-black'>
                  0{item.index}
                </h6>
                <p className='text-sm'>{item.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default PassionSectionContent
