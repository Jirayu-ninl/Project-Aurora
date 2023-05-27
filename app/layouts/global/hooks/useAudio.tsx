import { UI } from '@app/store'

export default function useAudio() {
  const audio = UI((state) => state.audio)
  const setAudio = UI((state) => state.setAudio)
  const toggleAudio = () => setAudio(!audio)

  return [audio, toggleAudio]
}
