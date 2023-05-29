export type tNavCanvasRoute = {
  id: number
  number: string
  title: string
  path: string
}

export const navCanvasRoutes: tNavCanvasRoute[] = [
  {
    id: 0,
    number: '01',
    title: 'HOME',
    path: '/home',
  },
  {
    id: 1,
    number: '02',
    title: 'ABOUT',
    path: '/about',
  },
  {
    id: 2,
    number: '03',
    title: 'SKILLs',
    path: '/about/skills',
  },
  {
    id: 3,
    number: '03',
    title: 'PROJECTS',
    path: '/project',
  },
  {
    id: 4,
    number: '04',
    title: 'BLOG',
    path: '/post',
  },
]
