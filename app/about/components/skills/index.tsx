import type { Dispatch } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageSkillsAnimation as animationConfig } from '@global/config/defineAnimationConfig'

import * as skillsSection from './skills'
import { theme } from '@global/config/defineConfig'
const Color = theme.color

type tVariants = {
  [key: string]: any
}

export const Header = ({
  MenuSection,
  setMenuSection,
  _dark,
}: {
  MenuSection: number
  setMenuSection: Dispatch<number>
  _dark: boolean
}) => {
  const MenuItems = [
    { number: '01', name: 'Projects' },
    { number: '02', name: 'Dev Skills' },
    { number: '03', name: 'Expertises' },
    { number: '04', name: 'Certificates' },
    { number: '05', name: 'Teams' },
    { number: '06', name: 'Works' },
  ]

  const { parent, children } = animationConfig.stagger_yUp_O
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <>
      <motion.div
        variants={parent(0.5) as tVariants}
        initial='hidden'
        animate='show'
        className='p-4 sm:p-7'
      >
        <motion.h1
          variants={children as tVariants}
          className='text-3xl font-semibold text-quaternary-2 dark:text-primary-0 sm:text-4xl lg:text-5xl xxl:text-7xl'
        >
          Hello, I'm <br />
          Jirayu Ninlapun
        </motion.h1>
        <motion.p
          variants={children as tVariants}
          className='mt-2 text-1xs font-light sm:mt-6 md:text-xs lg:text-base xl:mt-2 xxl:mt-6'
        >
          I work as an Interactive Web Developer and Designer.
          <br />
          To build the website, I mostly use NextJS, Prisma, and tRPC.
          <br />I specialize in Motion and WebGL to make websites come to life.
        </motion.p>
      </motion.div>
      <motion.div
        className='grid grid-cols-3 pb-0 md:block md:pb-6'
        variants={parent(0.2) as tVariants}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.5 }}
      >
        {MenuItems &&
          MenuItems.map((v: any, i: number) => (
            <motion.div
              variants={children as tVariants}
              transition={transition}
              key={i}
            >
              <motion.div
                initial={{ color: _dark ? '#ffffff' : '#101010' }}
                exit={{ color: _dark ? '#ffffff' : '#101010' }}
                animate={
                  MenuSection === i
                    ? { color: _dark ? Color.primary[0] : Color.quaternary[2] }
                    : { color: _dark ? '#ffffff' : '#101010' }
                }
                transition={transition}
                className='AnimOpacity-40 Anim relative flex cursor-pointer flex-col items-center bg-white/10 pb-2 pt-2 sm:pt-0 md:flex-row md:bg-transparent'
                style={MenuSection === i && { opacity: 1 }}
                onClick={() => setMenuSection(i)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: MenuSection === i ? 1 : 0 }}
                  className='absolute -left-[6px] top-[14px] -mt-1 mb-2 h-3 w-3 rounded-md bg-quaternary-2 dark:bg-primary-0 sm:relative sm:left-0 sm:top-px md:my-0 md:-ml-2 md:mr-3 md:w-5'
                ></motion.div>
                <p className='-mb-px hidden w-4 sm:block'>{v.number}</p>
                <motion.div
                  initial={{
                    backgroundColor: _dark ? '#ffffff' : '#101010',
                    width: 16,
                  }}
                  exit={{
                    backgroundColor: _dark ? '#ffffff' : '#101010',
                    width: 16,
                  }}
                  animate={
                    MenuSection === i
                      ? {
                          backgroundColor: _dark
                            ? Color.primary[0]
                            : Color.quaternary[2],
                          width: 32,
                        }
                      : {
                          backgroundColor: _dark ? '#ffffff' : '#101010',
                          width: 16,
                        }
                  }
                  className='Anim mx-3 hidden h-px w-6 md:block'
                ></motion.div>
                <p className='text-xs md:text-base'>{v.name}</p>
              </motion.div>
            </motion.div>
          ))}
      </motion.div>
    </>
  )
}

export const SkillSection = ({
  MenuSection,
  data,
  _dark,
}: {
  MenuSection: number
  data: any
  _dark: boolean
}) => {
  const { Section_Projects, Section_Skills, Section_Team, Section_Works } =
    skillsSection

  const { parent, children } = animationConfig.stagger_xLeft_O
  const transition = { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.9] }
  const Anim = { children, transition }
  return (
    <AnimatePresence>
      {MenuSection === 0 && (
        <motion.div
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_01'
        >
          {data.Projects.map((v: any, i: number) => (
            <Section_Projects
              Anim={Anim}
              name={v.name}
              type={v.type}
              des={v.description}
              star={v.star}
              icon={v.icon}
              link={v.link}
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 1 && (
        <motion.div
          className='grid w-[calc(100vw-2rem)] grid-cols-2 gap-2 sm:w-full md:grid-cols-1 lg:grid-cols-2'
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_02'
        >
          {data.DevSkills.map((v: any, i: number) => (
            <Section_Skills
              Anim={Anim}
              title={v.name}
              sub={v.type}
              details={v.level}
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 2 && (
        <motion.div
          className='grid w-[calc(100vw-2rem)] grid-cols-2 gap-2 sm:w-full md:grid-cols-1 lg:grid-cols-2'
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_03'
        >
          {data.Expertises.map((v: any, i: number) => (
            <Section_Skills
              Anim={Anim}
              title={v.name}
              sub={v.category}
              details={v.level}
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 3 && (
        <motion.div
          className='grid w-[calc(100vw-2rem)] grid-cols-2 gap-2 sm:w-full md:grid-cols-1 lg:grid-cols-2'
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_04'
        >
          {data.Certificates.map((v: any, i: number) => (
            <Section_Skills
              Anim={Anim}
              title={v.name}
              sub={v.academy}
              details={v.date}
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 4 && (
        <motion.div
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_05'
        >
          {data.Teams.map((v: any, i: number) => (
            <Section_Team
              Anim={Anim}
              name={v.name}
              des={v.description}
              location={v.location}
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 5 && (
        <motion.div
          variants={parent(0.2) as tVariants}
          initial='hidden'
          animate='show'
          key='AboutSkill_06'
        >
          {data.Works.map((v: any, i: number) => (
            <Section_Works
              Anim={Anim}
              name={v.company}
              des={v.description}
              pos={v.position}
              date={v.date}
              key={i}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
