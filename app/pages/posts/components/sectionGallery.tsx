import Image from 'next/legacy/image'

function SectionGallery({ content }) {
  return (
    <div className='mb-24 grid grid-cols-1 gap-4 md:grid-cols-2'>
      {content.map((v: any, i: number) => (
        <div
          className='Anim relative h-64 overflow-hidden rounded-md lg:h-80 xl:hover:scale-95'
          key={i}
        >
          <Image
            className='Anim AnimScale-sm'
            src={v.url}
            // width={v.width}
            // height={v.height}
            alt={'Gallery_' + i}
            layout='fill'
            objectFit='cover'
            quality={100}
            placeholder='blur'
            blurDataURL={
              'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            }
          />
        </div>
      ))}
    </div>
  )
}

export default SectionGallery
