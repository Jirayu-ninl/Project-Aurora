import Image from 'next/legacy/image'

const BlogContentRaw = ({ RAW }) => {
  return (
    <>
      {RAW.map((v, i: number) => {
        if (v.type == 'paragraph') {
          return (
            <p key={i} className='py-2 text-[#bbbbbb]'>
              &emsp;&emsp;&emsp;
              <ObjectText content={v.children} />
            </p>
          )
        } else if (v.type == 'heading-one') {
          return (
            <h1 key={i} className='pt-24 pb-4 text-5xl font-semibold'>
              <ObjectText content={v.children} />
            </h1>
          )
        } else if (v.type == 'heading-two') {
          return (
            <h2 key={i} className='pt-24 pb-4 text-4xl font-semibold'>
              <ObjectText content={v.children} />
            </h2>
          )
        } else if (v.type == 'heading-three') {
          return (
            <h3 key={i} className='pt-24 pb-4 text-3xl font-semibold'>
              <ObjectText content={v.children} />
            </h3>
          )
        } else if (v.type == 'heading-four') {
          return (
            <h4 key={i} className='py-8 pl-8 text-xl font-semibold'>
              <ObjectText content={v.children} />
            </h4>
          )
        } else if (v.type == 'heading-five') {
          return (
            <h5 key={i} className='py-8 pl-8 text-lg font-semibold'>
              <ObjectText content={v.children} />
            </h5>
          )
        } else if (v.type == 'heading-six') {
          return (
            <h6
              key={i}
              className='py-16 pl-12 text-3xl font-light italic leading-10'
            >
              <ObjectText content={v.children} />
            </h6>
          )
        } else if (v.type == 'image') {
          return (
            <div className='flex w-full justify-center py-8' key={i}>
              <Image
                className='overflow-hidden rounded-lg'
                src={v.src}
                alt={v.altText}
                height={v.height}
                width={v.width}
                // layout='fill'
                objectFit='cover'
                placeholder='blur'
                blurDataURL={
                  'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                }
              />
            </div>
          )
        } else if (v.type == 'class') {
          return (
            <>
              <BlogContentRaw RAW={v.children} key={i} />
            </>
          )
        } else if (v.type == 'block-quote') {
          return (
            <blockquote
              key={i}
              className='my-12 rounded-md border-4 border-y-white/0 border-r-white/0
            border-l-primary-0 bg-black/40 p-6 text-3xl font-light leading-10'
            >
              <ObjectText content={v.children} />
            </blockquote>
          )
        } else {
          return ''
        }
      })}
    </>
  )
}

export const ObjectText = ({ content }) => {
  return (
    <>
      {content.map((v, i) => {
        return v.bold ? (
          <strong key={i} className='px-0.5 font-semibold text-primary-0'>
            {v.text}
          </strong>
        ) : (
          v.text
        )
      })}
    </>
  )
}

export default BlogContentRaw
