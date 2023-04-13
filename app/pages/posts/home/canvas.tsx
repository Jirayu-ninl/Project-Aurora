import { useRef } from 'react'
import { motion } from 'framer-motion'
import useStore from './store'
import Image from 'next/image'

export const App = () => {
  const setClicked = useStore((state) => state.setClicked)
  const projects = useStore((state) => state.projects)

  const constraintsRef = useRef(null)

  return (
    <motion.div ref={constraintsRef} className='h-screen w-screen'>
      <motion.div
        drag='x'
        dragConstraints={constraintsRef}
        className='flex h-full w-full items-center justify-center space-x-4'
      >
        {projects.map((v, i) => (
          <Item project={v} key={i} />
        ))}
      </motion.div>
    </motion.div>
  )
}

const Item = ({ project }) => {
  return (
    <div className='relative h-[400px] w-[110px] overflow-hidden'>
      <Image
        className='pointer-events-none'
        src={project.coverImage.url}
        alt={project.title}
        layout='fill'
        objectFit='cover'
      />
    </div>
  )
}
