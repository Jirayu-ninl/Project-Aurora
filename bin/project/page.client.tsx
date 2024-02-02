/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { Scene } from './components'

const Client = ({ projects }: { projects: tProject[] }) => {
  // projects = [...projects, projects[0]]

  return (
    <>
      <Scene projects={projects} />
    </>
  )
}

type tProject = {
  title: string
  slug: string
  featured: boolean
  tagline: string
  tag: string[]
  coverImage: {
    url: string
    width: number
    height: number
  }
}

export default Client
