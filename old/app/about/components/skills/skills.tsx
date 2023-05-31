import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

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
  star?: string | []
  pos?: string | []
  location?: string | string[]
  date?: string | []
  Anim?: any
}

const classRowContent = {
  container:
    'w-full px-10 mb-2 Card-back-md-40 py-9 xl:hover:bg-primary-0 xl:hover:text-black Anim AnimTranslate-10',
  h5: 'text-xs tracking-wide uppercase',
  h4: 'text-2xl font-semibold',
  p: 'text-sm font-extralight',
  div: {
    css: 'flex items-center pt-6',
  },
}

const classGridContent = {
  container:
    'flex flex-col justify-between pl-5 md:pl-7 xxl:pl-10 Card-back-md-40 h-[220px] md:h-[320px] py-5 md:py7 xxl:py-9 xl:hover:bg-primary-0 xl:hover:text-black Anim AnimTranslate-10',
  h5: 'tracking-wide uppercase text-2xs md:text-1xs lg:text-2xs xxl:text-xs',
  h6: 'mt-1 md:mt-3 text-xs font-light md:text-base opacity-60',
  h4: 'text-sm sm:text-base font-semibold md:text-xl lg:text-lg xxl:text-2xl',
}

export const Section_Projects = ({ type, name, des, star, Anim }: DataType) => (
  <motion.div variants={Anim.children} transition={Anim.transition}>
    <div className={classRowContent.container}>
      <h5 className={classRowContent.h5}>{type}</h5>
      <h4 className={classRowContent.h4}>{name}</h4>
      <p className={classRowContent.p}>{des}</p>
      <div className={classRowContent.div.css}>
        <FontAwesomeIcon icon={solid('code-fork')} className='h-4' />
        <p className='ml-2'>fork</p>
      </div>
    </div>
  </motion.div>
)

export const Section_Skills = ({ title, sub, details, Anim }: DataType) => (
  <motion.div variants={Anim.children} transition={Anim.transition}>
    <div className={classGridContent.container}>
      <div>
        {sub?.map((v: string, i: number) => (
          <h5 key={i} className={classGridContent.h5}>
            {v}
          </h5>
        ))}
        <h6 className={classGridContent.h6}>{details}</h6>
      </div>
      <div>
        {title?.map((v: string, i: number) => (
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
      <p className='pt-8 text-sm'>{date}</p>
    </div>
  </motion.div>
)
