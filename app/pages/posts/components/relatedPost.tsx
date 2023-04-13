import Image from 'next/legacy/image'
import Link from 'next/link'
import AvatarImg from 'public/page/about/Profile_Avatar@2x.png'

const BlogFooter = ({ data }) => {
  return (
    <>
      <div className=''>
        <div className=''>
          <div className=''>
            <div>
              {data.tag?.map((v, i) => (
                <button key={i}>{v}</button>
              ))}
            </div>
            <div>
              <div>
                <Image
                  placeholder='blur'
                  src={AvatarImg}
                  alt='IceJI Avatar image'
                  height={80}
                  width={80}
                />
              </div>
              <div>
                <h2>Jirayu Ninlapun</h2>
                <p>
                  Cinematic Art, Bangkok University. Experience: 7 years in
                  Graphics Design, 5 years in VFX & Editor, and 2 years in Web
                  Developer.
                </p>
              </div>
            </div>
          </div>
          <div className=''>
            {data.relatedContent.map((v, i) => (
              <Link href={v.slug} key={i} passHref>
                <div>
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
                  <div>
                    <h3>{v.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogFooter
