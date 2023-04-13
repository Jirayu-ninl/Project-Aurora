const state = {
  top: 0,
  pages: 0,
  threshold: 4,
  mouse: [0, 0],
  content: [
    {
      tag: '00',
      text: 'The Bacchic\nand Dionysiac\nRites',
      images: [
        '/mock/image/w01.jpg',
        '/mock/image/w02.jpg',
        '/mock/image/w03.jpg',
      ],
    },
    {
      tag: '01',
      text: 'The Elysian\nMysteries',
      images: [
        '/mock/image/w04.jpg',
        '/mock/image/w05.jpg',
        '/mock/image/w06.jpg',
      ],
    },
    {
      tag: '02',
      text: 'The Hiramic\nLegend',
      images: [
        '/mock/image/w07.jpg',
        '/mock/image/w08.jpg',
        '/mock/image/w10.jpg',
      ],
    },
  ],
  depthbox: [
    {
      depth: 0,
      color: '#cccccc',
      textColor: '#ffffff',
      text: 'In a void,\nno one could say\nwhy a thing\nonce set in motion\nshould stop anywhere.',
      image: '/mock/image/w09.jpg',
    },
    {
      depth: -5,
      textColor: '#272727',
      text: 'For why should it stop\nhere rather than here?\nSo that a thing\nwill either be at rest\nor must be moved\nad infinitum.',
      image: '/mock/image/w01.jpg',
    },
  ],
  lines: [
    {
      points: [
        [-20, 0, 0],
        [-9, 0, 0],
      ],
      color: 'black',
      lineWidth: 0.5,
    },
    {
      points: [
        [20, 0, 0],
        [9, 0, 0],
      ],
      color: 'black',
      lineWidth: 0.5,
    },
  ],
}

export default state
