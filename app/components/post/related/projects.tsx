import Image from 'next/legacy/image'
import Link from 'next/link'

const RelatedProjects = ({ projects }: { projects: any }) => {
  return (
    <>
      <div className='pb-48 pt-16'>
        <h6 className='mb-14 font-semibold'>Related Projects</h6>
        {projects &&
          projects.map((v: any, i: number) => (
            <Link href={v.slug} key={i} passHref>
              <div className='Anim AnimTranslate-10 AnimSaturate-0 relative -mt-12 h-48 cursor-pointer overflow-hidden rounded-md drop-shadow-[-12px_-12px_25px_rgba(0,0,0,0.2)] dark:drop-shadow-[-12px_-12px_25px_rgba(0,0,0,0.7)]'>
                <div className='absolute left-4 top-4 z-10'>
                  <h5 className='text-2xl font-bold text-white'>{v.title}</h5>
                  <div>
                    {v.tag?.map((v: string, i: number) => (
                      <button
                        className='Anim AnimTranslate-4 mr-2 rounded border border-white/40 bg-white/20 px-2 py-1
                      text-xs uppercase text-white backdrop-blur-md hover:bg-quaternary-2 hover:text-white dark:hover:bg-primary-0 dark:hover:text-black'
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

export { RelatedProjects }
