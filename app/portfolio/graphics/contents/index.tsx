import Link from 'next/link'
import Image from 'next/image'
import listMovies from './movies'
import listVFX from './vfx'
import list3D from './3d'
import listColor from './color'
import listYoutube from './youtube'

import type { tContent } from './content.d'

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

const Title = ({
  title,
  number,
  id,
}: {
  title: string
  number: string
  id: string
}) => (
  <div className='flex items-end justify-between pt-32' id={id}>
    <h2 className='text-2xl uppercase tracking-wide md:text-5xl'>{title}</h2>
    <div className='mb-2 mt-auto h-px w-full bg-white' />
    <p className='pl-2'>{number}</p>
  </div>
)

const Item = ({ content }: { content: tContent }) => {
  return (
    <>
      <ImgBlock src={content.img} altText={content.name} />
      <div className='flex items-end pb-2 pt-6 '>
        <h3 className='text-xl font-semibold md:text-3xl'>{content.name}</h3>
        <p className='pb-1 pl-1 text-2xs opacity-60 md:text-sm'>
          {content.year}
        </p>
        <div className='flex items-center pb-1 pl-4'>
          {content.link?.map((v, i) => (
            <Link href={v.url} key={i}>
              <p className='Anim mx-1 cursor-pointer rounded-md border px-2 py-px text-xs opacity-80 hover:opacity-100 md:text-lg'>
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
                className='bg-primary-1/20 mx-1 my-1 rounded-full px-3 py-0.5 text-xs lg:my-0 lg:text-sm'
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

const ImgBlock = ({ src, altText }: { src: string; altText: string }) => {
  return (
    <div className='relative mt-28 flex h-[200px] w-full justify-center py-8 md:h-[380px] lg:h-[460px] xl:h-[555px]'>
      <div className='absolute -left-6 -top-6 h-16 w-16 rounded-full bg-primary-0' />
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
