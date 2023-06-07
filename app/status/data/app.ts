const Data = (_gpuTier: any, _dark: boolean, _audio: boolean) => {
  return {
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
  }
}

export default Data
