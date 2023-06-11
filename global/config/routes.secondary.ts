export type tNavSecondaryRoute = {
  id: number
  title: string
  setBackRoute: string
  route: {
    title: string
    path: string
  }[]
}

export type tNavSecondaryRoutes = {
  home: tNavSecondaryRoute
  project: tNavSecondaryRoute
  post: tNavSecondaryRoute
  app: tNavSecondaryRoute
  shop: tNavSecondaryRoute
  portfolio: tNavSecondaryRoute
  status: tNavSecondaryRoute
  example: tNavSecondaryRoute
}

export const navSecondaryRoutes: tNavSecondaryRoutes = {
  home: {
    id: 0,
    title: 'Home',
    setBackRoute: '/home',
    route: [
      {
        title: 'INTRO',
        path: '/home/intro',
      },
      {
        title: 'PASSIONATE',
        path: '/home/passionate',
      },
      {
        title: 'SKILLs',
        path: '/home/skills',
      },
      {
        title: 'PROJECTS',
        path: '/home/projects',
      },
      {
        title: 'SERVICES',
        path: '/home/services',
      },
    ],
  },
  project: {
    id: 1,
    title: 'Project',
    setBackRoute: '/project',
    route: [
      {
        title: 'HIGHLIGHT',
        path: '/project/highlight',
      },
      {
        title: 'CATEGORIES',
        path: '/project/categories',
      },
    ],
  },
  post: {
    id: 2,
    title: 'Post',
    setBackRoute: '/post',
    route: [
      {
        title: 'HIGHLIGHT',
        path: '/post/highlight',
      },
      {
        title: 'CATEGORIES',
        path: '/post/categories',
      },
    ],
  },
  app: {
    id: 3,
    title: 'App',
    setBackRoute: '/app',
    route: [
      {
        title: 'DASHBOARD',
        path: '/app/dashboard',
      },
      {
        title: 'SETTINGS',
        path: '/app/settings',
      },
    ],
  },
  shop: {
    id: 4,
    title: 'Shop',
    setBackRoute: '/shop',
    route: [],
  },
  portfolio: {
    id: 11,
    title: 'Portfolio',
    setBackRoute: '/portfolio',
    route: [
      {
        title: 'Graphics',
        path: '/portfolio/graphics',
      },
      {
        title: 'Dev',
        path: '/portfolio/dev',
      },
    ],
  },
  status: {
    id: 12,
    title: 'Status',
    setBackRoute: '/status',
    route: [
      {
        title: 'APP',
        path: '/status/app',
      },
      {
        title: 'SERVER',
        path: '/status/server',
      },
      {
        title: 'CLIENT',
        path: '/status/client',
      },
      {
        title: 'HOST',
        path: '/status/host',
      },
    ],
  },
  example: {
    id: 99,
    title: 'Example',
    setBackRoute: '/example',
    route: [
      {
        title: 'PAGE A',
        path: '/example/page-a',
      },
      {
        title: 'PAGE B',
        path: '/example/page-b',
      },
    ],
  },
}
