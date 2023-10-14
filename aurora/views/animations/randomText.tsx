/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useRef } from 'react'

type tOptions = {
  interval?: number
  timeout?: number
}

const randCharSet = (length: number) => {
  const char = 'abcdefghijklmnopqrstuvwxyz0123456789!*'
  const randArray = []
  for (let i = 0; i < length; i++) {
    const ci = Math.floor(Math.random() * char.length)
    randArray.push(char[ci])
  }
  return randArray.join('')
}

const onHover = ({
  text,
  options = { interval: 100, timeout: 500 },
}: {
  text: string
  options?: tOptions
}) => {
  const ref = useRef<HTMLParagraphElement | null>(null)

  const startRand = () => {
    if (ref.current && ref.current.innerHTML) {
      const run = setInterval(() => {
        ref.current!.innerHTML = randCharSet(text.length)
      }, options.interval)

      setTimeout(() => {
        console.log('stop')
        clearInterval(run)
        ref.current!.innerHTML = text
      }, options.timeout)
    }
  }

  return (
    <p ref={ref} onMouseEnter={() => startRand()}>
      {text}
    </p>
  )
}

const RandomCharacter = {
  onHover,
}

export { RandomCharacter }
