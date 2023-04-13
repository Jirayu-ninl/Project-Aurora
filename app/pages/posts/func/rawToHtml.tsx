import Image from 'next/image'

const RawToHtml = ({ RAW }) => {
  // const CreateHeadingTag = (h, content) => '<h' + h + '>' + content + '</h' + h + '>'
  return (
    <>
      {RAW.map((v, i: number) => {
        if (v.type == 'paragraph') {
          return (
            <p key={i}>
              &emsp;&emsp;&emsp;
              <ObjectText content={v.children} />
            </p>
          )
        } else if (v.type == 'heading-one') {
          return (
            <h1 key={i}>
              <ObjectText content={v.children} />
            </h1>
          )
        } else if (v.type == 'heading-two') {
          return (
            <h2 key={i}>
              <ObjectText content={v.children} />
            </h2>
          )
        } else if (v.type == 'heading-three') {
          return (
            <h3 key={i}>
              <ObjectText content={v.children} />
            </h3>
          )
        } else if (v.type == 'heading-four') {
          return (
            <h4 key={i}>
              <ObjectText content={v.children} />
            </h4>
          )
        } else if (v.type == 'heading-five') {
          return (
            <h5 key={i}>
              <ObjectText content={v.children} />
            </h5>
          )
        } else if (v.type == 'heading-six') {
          return (
            <h6 key={i}>
              <ObjectText content={v.children} />
            </h6>
          )
        } else if (v.type == 'image') {
          return (
            <div className={CSS.Image} key={i}>
              <Image
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
            <div className={v.className}>
              <RawToHtml RAW={v.children} key={i} />
            </div>
          )
        } else if (v.type == 'block-quote') {
          return (
            <blockquote key={i}>
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
        return v.bold ? <strong key={i}>{v.text}</strong> : v.text
      })}
    </>
  )
}

export default RawToHtml
