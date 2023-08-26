export type tNavSecondaryRoute = {
  id: number
  title: string
  setBackRoute: string
  scrollable?: boolean
  showFooter?: boolean
  showNav?: boolean
  route: {
    title: string
    path: string
  }[]
}

type routeKeys =
  | 'home'
  | 'project'
  | 'post'
  | 'app'
  | 'portal'
  | 'shop'
  | 'portfolio'
  | 'about'
  | 'tools'
  | 'status'
  | 'help'
  | 'example'

export type tNavSecondaryRoutes = {
  [Key in routeKeys]: tNavSecondaryRoute
}

export const navSecondaryRoutes: tNavSecondaryRoutes = {
  home: {
    id: 0,
    title: 'Home',
    setBackRoute: '/home',
    scrollable: false,
    route: [
      {
        title: 'Intro',
        path: '/home?id=intro',
      },
      {
        title: 'Passionate',
        path: '/home?id=passionate',
      },
      {
        title: 'Skills',
        path: '/home?id=skills',
      },
      {
        title: 'Projects',
        path: '/home?id=projects',
      },
      {
        title: 'Services',
        path: '/home?id=services',
      },
    ],
  },
  project: {
    id: 1,
    title: 'Projects',
    setBackRoute: '/project',
    route: [
      {
        title: 'Highlights',
        path: '/project/highlight',
      },
      {
        title: 'Categories',
        path: '/project/categories',
      },
      {
        title: 'Content',
        path: '/project',
      },
    ],
  },
  post: {
    id: 2,
    title: 'Posts',
    setBackRoute: '/post',
    route: [
      {
        title: 'Highlights',
        path: '/post/highlight',
      },
      {
        title: 'Categories',
        path: '/post/categories',
      },
      {
        title: 'Content',
        path: '/post',
      },
    ],
  },
  shop: {
    id: 3,
    title: 'Shop',
    setBackRoute: '/shop',
    route: [],
  },
  portfolio: {
    id: 4,
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
  about: {
    id: 10,
    title: 'About',
    setBackRoute: '/about',
    route: [
      {
        title: 'Overall',
        path: '/about',
      },
      {
        title: 'Skills',
        path: '/about/skills',
      },
    ],
  },
  portal: {
    id: 20,
    title: 'Portal',
    setBackRoute: '/portal',
    route: [
      {
        title: 'Sign in',
        path: '/portal',
      },
      {
        title: 'Sign up',
        path: '/portal/signup',
      },
    ],
  },
  app: {
    id: 21,
    title: 'App',
    setBackRoute: '/app',
    showFooter: false,
    route: [
      {
        title: 'Profile',
        path: '/app',
      },
      {
        title: 'Dashboard',
        path: '/app/dashboard',
      },
      {
        title: 'Settings',
        path: '/app/settings',
      },
    ],
  },
  tools: {
    id: 30,
    title: 'Tools',
    setBackRoute: '/tools',
    scrollable: false,
    route: [
      {
        title: 'GLSL Editor',
        path: '/tools/glslEditor',
      },
    ],
  },
  status: {
    id: 40,
    title: 'Status',
    setBackRoute: '/status',
    route: [
      {
        title: 'App',
        path: '/status/app',
      },
      {
        title: 'Server',
        path: '/status/server',
      },
      {
        title: 'Client',
        path: '/status/client',
      },
      {
        title: 'PKGs',
        path: '/status/packages',
      },
    ],
  },
  help: {
    id: 80,
    title: 'Help',
    setBackRoute: '/help',
    route: [
      {
        title: 'Privacy Policy',
        path: '/help/privacy-policy',
      },
      {
        title: 'Terms of Service',
        path: '/help/terms-of-service',
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
