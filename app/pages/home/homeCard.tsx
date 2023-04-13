import Link from 'next/link'
import Image from 'next/legacy/image'

export default function FooterCard({ Title, Href, imgSrc }) {
  return (
    <Link href={Href} passHref>
      <div className='Anim relative h-[105px] w-[100px] overflow-hidden rounded-lg hover:cursor-pointer md:w-[200px] lg:hover:-translate-y-7 xxl:w-[282px]'>
        <div className='absolute z-10 h-full w-full bg-secondary-0/60' />
        <div className='Anim absolute z-20 flex h-full w-full items-center justify-center hover:bg-[#ffd000]/60 hover:backdrop-blur-sm'>
          <h6 className='text-xl font-bold uppercase'>{Title}</h6>
        </div>
        <Image
          src={'/page/home/' + imgSrc}
          width={564}
          height={210}
          alt={'TheIceJi' + Title}
          layout='fill'
          objectFit='cover'
          quality={100}
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </div>
    </Link>
  )
}
