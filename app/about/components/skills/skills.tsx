import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCodeFork,
  faDownload,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons'

type DataType = {
  target?: number
  number?: string
  setMenuSection?: any
  name?: string | []
  title?: string | string[]
  sub?: string | string[]
  type?: string | []
  des?: string | []
  details?: string | string[]
  link?: string
  star?: string | []
  pos?: string | []
  location?: string | string[]
  date?: string | []
  Anim?: any
}

const classRowContent = {
  container:
    'w-full px-4 sm:px-10 mb-2 Card-back-md-40 py-5 sm:py-9 xl:hover:bg-quaternary-2 dark:xl:hover:bg-primary-0 dark:xl:hover:text-black xl:hover:text-white Anim AnimTranslate-10 flex flex-col',
  h5: 'text-xs tracking-wide uppercase',
  h4: 'text-2xl font-semibold',
  p: 'text-sm font-extralight',
  div: {
    css: 'items-center pt-6 ml-auto hidden sm:flex',
  },
}

const classGridContent = {
  container:
    'w-full flex flex-col justify-between pl-5 md:pl-7 xxl:pl-10 Card-back-md-40 h-[220px] md:h-[320px] py-5 md:py7 xxl:py-9 xl:hover:bg-quaternary-2 dark:xl:hover:bg-primary-0 dark:xl:hover:text-black xl:hover:text-white Anim AnimTranslate-10',
  h5: 'sm:tracking-wide uppercase text-2xs md:text-1xs lg:text-2xs xxl:text-xs',
  h6: 'mt-1 md:mt-3 text-xs font-light md:text-base opacity-60',
  h4: 'text-sm sm:text-base font-semibold md:text-xl lg:text-lg xxl:text-2xl',
}

export const Section_Projects = ({
  type,
  name,
  des,
  star,
  Anim,
  icon,
  link,
}: DataType & { icon: 'fork' | 'download' | 'website' }) => {
  const IconList = {
    fork: {
      text: 'fork',
      icon: faCodeFork,
    },
    download: {
      text: 'download',
      icon: faDownload,
    },
    website: {
      text: 'website',
      icon: faDesktop,
    },
  }

  return (
    <motion.div variants={Anim.children} transition={Anim.transition}>
      <div className={classRowContent.container}>
        <h5 className={classRowContent.h5}>{type}</h5>
        <h4 className={classRowContent.h4}>{name}</h4>
        <p className={classRowContent.p}>{des}</p>
        <Link
          className={clsx(classRowContent.div.css, 'cursor-pointer')}
          href={link as string}
        >
          <FontAwesomeIcon icon={IconList[icon].icon} className='h-4' />
          <p className='ml-2'>{IconList[icon].text}</p>
        </Link>
      </div>
    </motion.div>
  )
}

export const Section_Skills = ({ title, sub, details, Anim }: DataType) => (
  <motion.div variants={Anim.children} transition={Anim.transition}>
    <div className={classGridContent.container}>
      <div>
        {Array.isArray(sub) &&
          sub?.map((v: string, i: number) => (
            <h5 key={i} className={classGridContent.h5}>
              {v}
            </h5>
          ))}
        <h6 className={classGridContent.h6}>{details}</h6>
      </div>
      <div>
        {Array.isArray(title) &&
          title?.map((v: string, i: number) => (
            <h4 key={i} className={classGridContent.h4}>
              {v}
            </h4>
          ))}
      </div>
    </div>
  </motion.div>
)

export const Section_Team = ({ name, des, location, Anim }: DataType) => (
  <motion.div variants={Anim.children} transition={Anim.transition}>
    <div className={classRowContent.container}>
      <div>
        <h5 className={classRowContent.h5}>{location}</h5>
        <h4 className={classRowContent.h4}>{name}</h4>
        <p className={classRowContent.p + ' pt-3'}>{des}</p>
      </div>
    </div>
  </motion.div>
)

export const Section_Works = ({ name, des, pos, date, Anim }: DataType) => (
  <motion.div variants={Anim.children} transition={Anim.transition}>
    <div className={classRowContent.container}>
      <h5 className={classRowContent.h5}>{pos}</h5>
      <h4 className={classRowContent.h4}>{name}</h4>
      <p className={classRowContent.p}>{des}</p>
      <p className='pt-5 text-sm sm:pt-8'>{date}</p>
    </div>
  </motion.div>
)
