import Link from 'next/link'
import Image from 'next/image'
import { listMovies, listVFX, list3D, listColor, listYoutube } from './contents'

function Content() {
  return (
    <>
      <Title title='Film' number='01' id='film' />
      {listMovies.map((v, i) => (
        <Item content={v} key={i} />
      ))}
      <Title title='VFX & Motion' number='02' id='vfx' />
      {listVFX.map((v, i) => (
        <Item content={v} key={i} />
      ))}
      <Title title='3D & Rendering' number='03' id='3d' />
      {list3D.map((v, i) => (
        <Item content={v} key={i} />
      ))}
      <Title title='Color Grading' number='04' id='color' />
      {listColor.map((v, i) => (
        <Item content={v} key={i} />
      ))}
    </>
  )
}

const Title = ({ title, number, id }) => (
  <div className='flex items-end justify-between pt-32' id={id}>
    <h2 className='text-2xl uppercase tracking-wide md:text-5xl'>{title}</h2>
    <div className='mt-auto mb-2 h-px w-full bg-white' />
    <p className='pl-2'>{number}</p>
  </div>
)

const Item = ({ content }) => {
  return (
    <>
      <ImgBlock src={content.img} altText={content.title} />
      <div className='flex items-end pt-6 pb-2 '>
        <h3 className='text-xl font-semibold md:text-3xl'>{content.name}</h3>
        <p className='pl-1 pb-1 text-2xs md:text-sm opacity-60'>{content.year}</p>
        <div className='flex items-center pl-4 pb-1'>
          {content.link?.map((v, i) => (
            <Link href={v.url} key={i}>
              <p className='Anim mx-1 cursor-pointer rounded-md border py-px px-2 text-xs opacity-80 hover:opacity-100 md:text-lg'>
                {v.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <p className='text-xs opacity-60 md:text-lg'>
        &emsp;&emsp;&emsp;{content.description}
      </p>
      {content.tag && (
        <div className='flex items-center pt-2'>
          <p className='text-xs md:text-lg '>Responsibility:&emsp;</p>
          <div className='flex flex-wrap'>
            {content.tag.map((v, i) => (
              <p
                key={i}
                className='mx-1 my-1 rounded-full bg-primary-1/20 py-0.5 px-3 text-xs lg:my-0 lg:text-sm'
              >
                {v}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

const ImgBlock = ({ src, altText }) => {
  return (
    <div className='relative mt-28 flex h-[200px] w-full justify-center py-8 md:h-[380px] lg:h-[460px] xl:h-[555px]'>
      <div className='absolute -top-6 -left-6 h-16 w-16 rounded-full bg-primary-0' />
      <Image
        className='overflow-hidden rounded-lg'
        src={src}
        alt={altText}
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        blurDataURL={
          'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
        }
      />
    </div>
  )
}

export default Content
