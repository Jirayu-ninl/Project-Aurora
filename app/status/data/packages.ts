import envinfo from 'envinfo'

export const getEnvInfo = async () => {
  const getData = envinfo.run(
    {
      System: ['OS', 'CPU', 'Memory'],
      Binaries: ['Node', 'Yarn'],
      Browsers: ['Chrome', 'Firefox', 'Safari'],
      Databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'],
      npmPackages: [
        'react',
        'next',
        'next-auth',
        'next-pwa',
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
        'framer-motion',
        'framer-motion-3d',
        '@trpc/client',
        'zod',
      ],
    },
    { json: true, showNotFound: true },
  )
  const data = await getData
  return data
}

const Data = {
  name: 'device',
  contents: [
    {
      isHeader: false,
      name: 'React',
      value: '18.2.0',
      className: '',
    },
  ],
}

export default Data
