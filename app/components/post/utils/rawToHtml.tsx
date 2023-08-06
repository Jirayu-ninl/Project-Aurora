/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import clsx from 'clsx'
import { tContent, tImage, tText } from './rawToHtml.d'

const ObjectText = ({ content }: { content: tText[] }) => {
  return (
    <>
      {content.map((v: any, i: number) => {
        return v.bold ? (
          <strong
            key={i}
            className='px-0.5 font-semibold text-quaternary-2 dark:text-primary-0'
          >
            {v.text}
          </strong>
        ) : (
          v.text
        )
      })}
    </>
  )
}

type tBlockKeys =
  | 'paragraph'
  | 'heading-one'
  | 'heading-two'
  | 'heading-three'
  | 'heading-four'
  | 'heading-five'
  | 'heading-six'
  | 'image'
  | 'class'
  | 'block-quote'

type tBlock = {
  [Key in tBlockKeys]: (c: any, i: number) => any
}

const BLOCK: tBlock = {
  paragraph: ({ children }: { children: tText[] }, i: number) => (
    <p className='py-2 text-[#5c5c5c] dark:text-[#bbbbbb]' key={i}>
      &emsp;&emsp;&emsp;
      <ObjectText content={children} />
    </p>
  ),
  'heading-one': ({ children }: { children: tText[] }, i: number) => (
    <h1
      className='pb-4 pt-16 text-3xl font-semibold lg:pt-24 lg:text-5xl'
      key={i}
    >
      <ObjectText content={children} />
    </h1>
  ),
  'heading-two': ({ children }: { children: tText[] }, i: number) => (
    <h2
      className='pb-4 pt-16 text-2xl font-semibold lg:pt-24 lg:text-4xl'
      key={i}
    >
      <ObjectText content={children} />
    </h2>
  ),
  'heading-three': ({ children }: { children: tText[] }, i: number) => (
    <h3
      className='text-1xl pb-4 pt-16 font-semibold lg:pt-24 lg:text-3xl'
      key={i}
    >
      <ObjectText content={children} />
    </h3>
  ),
  'heading-four': ({ children }: { children: tText[] }, i: number) => (
    <h4
      className='py-4 pl-4 text-lg font-semibold lg:py-8 lg:pl-8 lg:text-xl'
      key={i}
    >
      <ObjectText content={children} />
    </h4>
  ),
  'heading-five': ({ children }: { children: tText[] }, i: number) => (
    <h5 className='py-8 pl-8 font-semibold lg:text-lg' key={i}>
      <ObjectText content={children} />
    </h5>
  ),
  'heading-six': ({ children }: { children: tText[] }, i: number) => (
    <h6
      className='py-8 pl-6 text-xl font-light italic lg:py-16 lg:pl-12 lg:text-3xl lg:leading-10'
      key={i}
    >
      <ObjectText content={children} />
    </h6>
  ),
  image: (c: tImage, i: number) => (
    <div className='flex w-full justify-center py-8' key={i}>
      <Image
        className='overflow-hidden rounded-lg'
        src={c.src}
        alt={c.altText}
        height={c.height}
        width={c.width}
        // fill
        objectFit='cover'
        placeholder='blur'
        blurDataURL={
          'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
        }
      />
    </div>
  ),
  class: (
    c: { children: tContent[]; className: string; type: string },
    i: number,
  ) => (
    <div className={clsx(c.className)} key={i}>
      <RawMap RAW={c.children} />
    </div>
  ),
  'block-quote': ({ children }: { children: tText[] }, i: number) => (
    <blockquote
      className='my-6 rounded-md border-4 border-y-white/0 border-l-quaternary-2 border-r-white/0 bg-black/5
      p-6 text-xl font-light dark:border-l-primary-0 dark:bg-black/40 lg:my-12 lg:text-2xl lg:leading-10'
      key={i}
    >
      <ObjectText content={children} />
    </blockquote>
  ),
}

const RawMap = ({ RAW }: { RAW: tContent[] }) => {
  return (
    <>
      {RAW.map(
        (v, i) =>
          BLOCK[v.type as tBlockKeys] && BLOCK[v.type as tBlockKeys](v, i),
      )}
    </>
  )
}

export { RawMap, ObjectText }
