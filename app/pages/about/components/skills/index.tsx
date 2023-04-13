import { motion, AnimatePresence } from 'framer-motion'
import { config as animationConfig } from 'views/animations'

import * as skillsSection from './skills'
import Color from 'views/theme/color'

export const Header = ({ MenuSection, setMenuSection }) => {
  const MenuItems = [
    { number: '01', name: 'Projects' },
    { number: '02', name: 'Dev Skills' },
    { number: '03', name: 'Expertises' },
    { number: '04', name: 'Certificates' },
    { number: '05', name: 'Team & Members' },
    { number: '06', name: 'Works' },
  ]

  const { parent, children } = animationConfig.stagger_yUp_O
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <>
      <motion.div
        variants={parent(0.5)}
        initial='hidden'
        animate='show'
        className='p-7'
      >
        <motion.h1
          variants={children}
          className='text-3xl font-semibold text-primary-0 sm:text-4xl lg:text-5xl xxl:text-7xl'
        >
          Hello, I'm <br />
          Jirayu Ninlapun
        </motion.h1>
        <motion.p
          variants={children}
          className='mt-6 text-1xs font-light md:text-xs lg:text-base xl:mt-2 xxl:mt-6'
        >
          I work as an Interactive Web Developer and Designer.
          <br />
          To build the website, I mostly use ReactJS and NextJS.
          <br />I specialize in GSAP and WebGL to make websites come to life.
        </motion.p>
      </motion.div>
      <motion.div
        className='grid grid-cols-3 pb-0 md:block md:pb-6'
        variants={parent(0.2)}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.5 }}
      >
        {MenuItems.map((v: any, i: number) => (
          <motion.div variants={children} transition={transition} key={i}>
            <motion.a
              initial={{ color: '#FFFFFF' }}
              exit={{ color: '#FFFFFF' }}
              animate={
                MenuSection === i
                  ? { color: Color.primary[0] }
                  : { color: '#FFFFFF' }
              }
              transition={transition}
              className='AnimOpacity-40 Anim flex cursor-pointer flex-col items-center bg-white/10 pb-2 md:flex-row md:bg-transparent'
              style={MenuSection === i && { opacity: 1 }}
              onClick={() => setMenuSection(i)}
            >
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: MenuSection === i ? 1 : 0 }}
                className='-mt-1 mb-2 h-3 w-3 rounded-md bg-primary-0 md:my-0 md:mr-3 md:-ml-2 md:w-5'
              ></motion.div>
              <p className='-mb-px w-4'>{v.number}</p>
              <motion.div
                initial={{ backgroundColor: '#FFFFFF', width: 16 }}
                exit={{ backgroundColor: '#FFFFFF', width: 16 }}
                animate={
                  MenuSection === i
                    ? { backgroundColor: Color.primary[0], width: 32 }
                    : { backgroundColor: '#FFFFFF', width: 16 }
                }
                className='Anim mx-3 hidden h-px w-6 md:block'
              ></motion.div>
              <p className='text-xs md:text-base'>{v.name}</p>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export const SkillSection = ({ MenuSection, data }) => {
  const { Section_Projects, Section_Skills, Section_Team, Section_Works } =
    skillsSection

  const { parent, children } = animationConfig.stagger_xLeft_O
  const transition = { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.9] }
  const Anim = { children, transition }
  return (
    <AnimatePresence>
      {MenuSection === 0 && (
        <motion.div
          variants={parent(0.2)}
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
              key={i}
            />
          ))}
        </motion.div>
      )}
      {MenuSection === 1 && (
        <motion.div
          className='grid grid-cols-2 gap-2 md:grid-cols-1 lg:grid-cols-2'
          variants={parent(0.2)}
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
          className='grid grid-cols-2 gap-2 md:grid-cols-1 lg:grid-cols-2'
          variants={parent(0.2)}
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
          className='grid grid-cols-2 gap-2 md:grid-cols-1 lg:grid-cols-2'
          variants={parent(0.2)}
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
          variants={parent(0.2)}
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
          variants={parent(0.2)}
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
