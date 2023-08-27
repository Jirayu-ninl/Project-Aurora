import { UI } from '@global/store'

const useAudio = (): [boolean, () => void] => {
  const audio = UI((state) => state.audio)
  const setAudio = UI((state) => state.setAudio)
  const toggleAudio = () => setAudio(!audio)

  return [audio, toggleAudio]
}

export { useAudio }
