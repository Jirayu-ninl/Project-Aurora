'use client'
import { useEffect, useRef } from 'react'
import { useAudio } from '@aurora/libs/hooks/audio'

const AudioUrl = '/layout/audio/WebSound.mp3'

const AudioComp = () => {
  const [audio] = useAudio()
  const BGaudio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    audio ? BGaudio.current?.play() : BGaudio.current?.pause()
  }, [audio])

  return (
    <>
      <audio ref={BGaudio} loop key='audioBG'>
        <source src={AudioUrl} type='audio/mpeg' />
      </audio>
    </>
  )
}

export default AudioComp
