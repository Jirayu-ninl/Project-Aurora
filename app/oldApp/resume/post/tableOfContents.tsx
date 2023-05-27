import Link from 'next/link'

function TableOfContents() {
  const list = [
    { name: 'Film', link: '#film' },
    { name: 'VFX & Motion', link: '#vfx' },
    { name: '3D', link: '#3d' },
    { name: 'Color Grading', link: '#color' },
    // { name: 'Youtube', link: '#' },
    // { name: 'Sound', link: '#' },
  ]
  return (
    <>
      <h2 className='pb-4 text-2xl font-semibold lg:pb-8 lg:text-6xl'>
        Table of contents
      </h2>
      {list.map((v, i) => (
        <Link href={v.link} passHref key={i}>
          <h1 className='cursor-pointer pb-2 text-xl lg:text-4xl'>
            - {v.name}
          </h1>
        </Link>
      ))}
    </>
  )
}

export default TableOfContents
