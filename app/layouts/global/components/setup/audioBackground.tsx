'use client'
import { useEffect, useRef } from 'react'
import useAudio from '@aurora/libs/hooks/useAudio'

const AudioUrl = '/audio/WebSound-01.mp3'

const AudioComp = () => {
  const [audio] = useAudio()
  const BGaudio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    audio ? BGaudio.current?.play() : BGaudio.current?.pause()
  }, [audio])

  return (
    <>
      <audio ref={BGaudio} loop id='LayoutIdAudio'>
        <source src={AudioUrl} type='audio/mpeg' />
      </audio>
    </>
  )
}

export default AudioComp
