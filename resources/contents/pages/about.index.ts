import ImgWhatIdo_Music from 'public/page/about/FreeTime_Music@2x.png'
import ImgSongOkad from 'public/projects/music/single/Okad@2x.png'
import ImgSongTudJai from 'public/projects/music/single/TudJai@2x.png'
import ImgSongYungraw from 'public/projects/music/single/Yungraw@2x.png'
import ImgSongPorraew from 'public/projects/music/single/Porraew@2x.png'

import ImgFreeTime_vlog from 'public/projects/vlog/FreeTime_vlog@2x.png'
import ImgSongPleng from 'public/projects/vlog/SongPleng@2x.png'
import ImgFanFilm from 'public/projects/vlog/FanFilm@2x.png'
import ImgFanFilm_S from 'public/projects/vlog/FanFilm_S@2x.png'
import ImgGolfTell from 'public/projects/vlog/GolfTell@2x.png'

import ImgFreeTime_Film from 'public/projects/film/FreeTime_Film@2x.png'
import ImgCamile from 'public/projects/film/Camile@2x.png'
import ImgFTiktok from 'public/projects/film/Tiktok@2x.png'
import ImgOnce from 'public/projects/film/Once@2x.png'
import ImgIGotIt from 'public/projects/film/IGotIt@2x.png'

export const FreeTimeItems = [
  {
    title: 'Music',
    header: true,
    coverImg: ImgWhatIdo_Music,
    tags: [
      {
        name: 'All Song',
        link: 'https://www.youtube.com/channel/UCkuktA0dNvT9Te3-V0nl9zg/videos',
      },
      {
        name: 'AVA Studio',
        link: 'https://www.youtube.com/c/AVAStudio98/videos',
      },
    ],
    items: [
      {
        Title: 'ขอโอกาส',
        Img: ImgSongOkad,
        Sub: 'ขอโอกาส - TheIceJI',
        Link: 'https://youtu.be/j5eLU5nttq4',
      },
      {
        Title: 'ตัดใจยังไง',
        Img: ImgSongTudJai,
        Sub: 'ตัดใจยังไง - TheIceJI',
        Link: '',
      },
      {
        Title: 'ยังรออยู่ไหม',
        Img: ImgSongYungraw,
        Sub: 'ยังรออยู่ไหม - TheIceJI',
        Link: 'https://youtu.be/NjxqT5Hdee0',
      },
      {
        Title: 'พอแล้วความรัก',
        Img: ImgSongPorraew,
        Sub: 'พอแล้วความรัก - TheIceJI',
        Link: 'https://youtu.be/lT-wLYmJays',
      },
    ],
  },
  {
    title: 'Vlog & channel',
    header: false,
    coverImg: ImgFreeTime_vlog,
    tags: [
      {
        name: 'View more',
        link: '',
      },
    ],
    items: [
      {
        Title: 'SongPleng',
        Img: ImgSongPleng,
        Sub: '',
        Link: 'https://youtu.be/8TinxPFFzFc',
      },
      {
        Title: 'FanFilm',
        Img: ImgFanFilm,
        Sub: '',
        Link: 'https://youtu.be/IRzBV-eykCc',
      },
      {
        Title: 'FanFilm (Special)',
        Img: ImgFanFilm_S,
        Sub: '',
        Link: '',
      },
      {
        Title: 'GolfTell',
        Img: ImgGolfTell,
        Sub: '',
        Link: 'https://youtu.be/R12tZ_QiK08',
      },
    ],
  },
  {
    title: 'Filming',
    header: false,
    coverImg: ImgFreeTime_Film,
    tags: [],
    items: [
      {
        Title: 'Camile',
        Img: ImgCamile,
        Sub: '',
        Link: '',
      },
      {
        Title: 'Tiktok',
        Img: ImgFTiktok,
        Sub: '',
        Link: '',
      },
      {
        Title: 'Once',
        Img: ImgOnce,
        Sub: '',
        Link: '',
      },
      {
        Title: 'I got it',
        Img: ImgIGotIt,
        Sub: '',
        Link: '',
      },
    ],
  },
]
