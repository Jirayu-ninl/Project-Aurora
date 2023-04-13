import Image from 'next/legacy/image'
import Link from 'next/link'

function RelatedProjects({ content }) {
  return (
    <>
      <div className='pt-16 pb-48'>
        <h6 className='mb-14 font-semibold'>Related Projects</h6>
        {content?.map((v, i) => (
          <Link href={v.slug} key={i} passHref>
            <div className='Anim AnimTranslate-10 AnimSaturate-0 relative -mt-12 h-48 cursor-pointer overflow-hidden rounded-md drop-shadow-[-12px_-12px_25px_rgba(0,0,0,0.7)] xl:drop-shadow-none'>
              <div className='absolute top-4 left-4 z-10'>
                <h5 className='text-2xl font-bold'>{v.title}</h5>
                <div>
                  {v.tag?.map((v, i) => (
                    <button
                      className='Anim AnimTranslate-4 mr-2 rounded border border-white/40 bg-white/20 py-1
                      px-2 text-xs uppercase backdrop-blur-md hover:bg-primary-0 hover:text-black'
                      key={i}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <Image
                alt={v.title}
                src={v.coverImage.url}
                layout='fill'
                objectFit='cover'
                placeholder='blur'
                blurDataURL={
                  'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                }
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default RelatedProjects
