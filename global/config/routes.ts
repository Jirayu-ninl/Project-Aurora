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
    title: 'PROJECTS',
    path: '/project',
  },
  {
    id: 2,
    number: '03',
    title: 'BLOG',
    path: '/post',
  },
  {
    id: 3,
    number: '04',
    title: 'APP',
    path: '/app',
  },
  {
    id: 4,
    number: '05',
    title: 'SHOP',
    path: '/shop',
  },
]
