import { css } from '@emotion/css'
import Link from 'next/link'

export default function Index() {
  const container = css`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: '#161616';
    & > div {
      width: 1024px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      @media (max-width: 480px) {
        width: 400px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 1024px) {
        padding: 0 24px;
      }
    }
  `

  const testItemsList = [
    {
      name: 'Audio BG',
      link: '/test/audio',
    },
    {
      name: 'Scroll FX',
      link: '/test/scroll',
    },
    {
      name: 'ThreeJS',
      link: '/test/three',
    },
    {
      name: 'Simple Page',
      link: '/test/page',
    },
    {
      name: 'Marquee',
      link: '/test/marquee',
    },
    {
      name: 'Firebase user',
      link: '/test/firebaseUser',
    },
    {
      name: 'BSC SDK',
      link: '#',
    },
    {
      name: 'Ethereum App',
      link: '/app/walletETH',
    },
  ]

  return (
    <div className={container}>
      <div>
        {testItemsList.map((item, i) => (
          <TestItem item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

const TestItem = ({ item }) => {
  const testItem = css`
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #242424;
    transition-duration: 500ms;
    border-radius: 15px;
    box-shadow: -15px -15px 15px rgb(255 255 255 / 2%),
      15px 15px 15px rgb(0 0 0 / 30%);
    &:hover {
      background: #2e2e2e;
      transition-duration: 250ms;
    }
    @media (max-width: 480px) {
      height: 80px;
    }
  `
  return (
    <Link href={item.link} passHref>
      <div className={testItem}>{item.name}</div>
    </Link>
  )
}
