import envinfo from 'envinfo'

export const getEnvInfo = async () => {
  const getData = envinfo.run(
    {
      System: ['OS', 'CPU', 'Memory'],
      Binaries: ['Node', 'Yarn', 'npm'],
      Browsers: ['Chrome', 'Firefox', 'Safari'],
      Databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'],
      npmPackages: [
        'react',
        'next',
        'next-auth',
        'next-pwa',
        '@babel/core',
        'typescript',
        'ioredis',
        'graphql',
        'mongodb',
        'prisma',
        'tailwindcss',
        'clsx',
        'postcss',
        '@emotion/css',
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        '@react-three/csg',
        'postprocessing',
        'lamina',
        'glslify',
        '@theatre/core',
        'framer-motion',
        'framer-motion-3d',
        '@trpc/client',
        'zod',
        '@sentry/nextjs',
        'zustand',
      ],
    },
    { json: true, showNotFound: true },
  )
  const data = await getData
  return data
}

const Data = async () => {
  const dataInfo = JSON.parse(await getEnvInfo())

  return {
    name: 'device',
    contents: [
      {
        isHeader: true,
        name: 'Environment',
      },
      {
        isHeader: false,
        name: 'Node',
        value: dataInfo.Binaries.Node.version,
        className: '',
      },
      {
        isHeader: false,
        name: 'Yarn',
        value: dataInfo.Binaries.Yarn.version,
        className: '',
      },
      {
        isHeader: false,
        name: 'NPM',
        value: dataInfo.Binaries.npm.version,
        className: '',
      },
      {
        isHeader: true,
        name: 'Dependencies',
      },
      {
        isHeader: false,
        name: 'React',
        value: dataInfo.npmPackages.react.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Next',
        value: dataInfo.npmPackages.next.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Next-auth',
        value: dataInfo.npmPackages['next-auth'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Next-pwa',
        value: dataInfo.npmPackages['next-pwa'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Babel',
        value: dataInfo.npmPackages['@babel/core'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'TypeScript',
        value: dataInfo.npmPackages.typescript.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Redis',
        value: dataInfo.npmPackages.ioredis.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'GraphQL',
        value: dataInfo.npmPackages.graphql.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'MongoDB',
        value: dataInfo.npmPackages.mongodb.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Prisma',
        value: dataInfo.npmPackages.prisma.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'TailwindCSS',
        value: dataInfo.npmPackages.tailwindcss.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'clsx',
        value: dataInfo.npmPackages.clsx.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'PostCSS',
        value: dataInfo.npmPackages.postcss.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Emotion/css',
        value: dataInfo.npmPackages['@emotion/css'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'ThreeJs',
        value: dataInfo.npmPackages.three.installed,
        className: '',
      },
      {
        isHeader: false,
        name: '@react-three/fiber',
        value: dataInfo.npmPackages['@react-three/fiber'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: '@react-three/drei',
        value: dataInfo.npmPackages['@react-three/drei'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: '@react-three/csg',
        value: dataInfo.npmPackages['@react-three/csg'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Postprocessing',
        value: dataInfo.npmPackages['postprocessing'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Lamina',
        value: dataInfo.npmPackages.lamina.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'GLSL',
        value: dataInfo.npmPackages.glslify.installed,
        className: '',
      },
      {
        isHeader: false,
        name: '@theatre/core',
        value: dataInfo.npmPackages['@theatre/core'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Framer Motion',
        value: dataInfo.npmPackages['framer-motion'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Framer Motion 3D',
        value: dataInfo.npmPackages['framer-motion-3d'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'TRPC',
        value: dataInfo.npmPackages['@trpc/client'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'ZOD',
        value: dataInfo.npmPackages.zod.installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Sentry',
        value: dataInfo.npmPackages['@sentry/nextjs'].installed,
        className: '',
      },
      {
        isHeader: false,
        name: 'Zustand',
        value: dataInfo.npmPackages.zustand.installed,
        className: '',
      },
    ],
  }
}

export default Data
