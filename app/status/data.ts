const Data = (_gpuTier: any, _dark: boolean, _audio: boolean) => [
  {
    name: 'app',
    contents: [
      {
        isHeader: true,
        name: 'Aurora Front-end',
      },
      {
        isHeader: false,
        name: 'NodeJs',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'Vercel',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'Cloudflare',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'Domain DNS',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'Edge Functions',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'API Fetch Service',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: true,
        name: 'UI Modules',
        className: '',
      },
      {
        isHeader: false,
        name: 'ThreeJs',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: true,
        name: 'App State',
        className: '',
      },
      {
        isHeader: false,
        name: 'Mobile?',
        value: _gpuTier?.isMobile?.toString(),
        className: '',
      },
      {
        isHeader: false,
        name: 'Caching',
        value: 'true',
        className: '',
      },
      {
        isHeader: false,
        name: 'PWA',
        value: 'true',
        className: '',
      },
      {
        isHeader: false,
        name: 'Dark mode',
        value: _dark.toString(),
        className: '',
      },
      {
        isHeader: false,
        name: 'Audio Background',
        value: _audio.toString(),
        className: '',
      },
    ],
  },
  {
    name: 'server',
    contents: [
      {
        isHeader: true,
        name: 'Aurora Backend',
        className: '',
      },
      {
        isHeader: false,
        name: 'NodeJs',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'GraphQL API',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'MongoDB Connection',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'PostgreSQL Connection',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'Redis Caching',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: true,
        name: 'Aurora Nodes',
        className: '',
      },
      {
        isHeader: false,
        name: 'AP-SouthEast-1 (Sydney)',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'AP-SouthEast-2 (Sydney)',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'US-East-1 (Ashburn)',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'US-East-2 (Ashburn)',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'US-West-2 (Oregon)',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'SEA-1 (Thailand)',
        value: 'down',
        className: 'text-red-500',
      },
      {
        isHeader: false,
        name: 'SEA-2 (Singapore)',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: true,
        name: 'SQL Servers',
        className: '',
      },
      {
        isHeader: false,
        name: 'AWS AP-southeast-1',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'AWS US-East-1',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: true,
        name: 'Redis Servers',
        className: '',
      },
      {
        isHeader: false,
        name: 'AP-southeast-1',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'US-East-1',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: true,
        name: 'MongoDB Servers',
        className: '',
      },
      {
        isHeader: false,
        name: 'US-East-1 (N. Virginia)',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'EU-West-3 (Paris)',
        value: 'normal',
        className: 'text-green-500',
      },
      {
        isHeader: false,
        name: 'AP-southeast-1 (Singapore)',
        value: 'stopped',
        className: 'text-orange-500',
      },
      {
        isHeader: false,
        name: 'ap-northeast-1 (Tokyo)',
        value: 'normal',
        className: 'text-green-500',
      },
    ],
  },
  {
    name: 'device',
    contents: [
      {
        isHeader: false,
        name: 'GPU',
        value: _gpuTier?.gpu,
        className: '',
      },
      {
        isHeader: false,
        name: 'fps',
        value: _gpuTier?.fps,
        className: '',
      },
      {
        isHeader: false,
        name: 'tier',
        value: _gpuTier?.tier,
        className: '',
      },
    ],
  },
]

export default Data
