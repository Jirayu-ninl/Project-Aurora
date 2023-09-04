import { type Dispatch, useEffect } from 'react'
import { useKeyPress } from '@aurora/libs/hooks/events/useKeyPress'
import { UI } from '@global/store'

const Immersive = (p: { glow: boolean; setGlow: Dispatch<boolean> }) => {
  const _toggleUI = UI((state) => state.toggleUI)

  const pressF = useKeyPress('f')
  const pressG = useKeyPress('g')

  useEffect(() => {
    if (pressF) {
      _toggleUI()
    }
  }, [pressF, _toggleUI])

  useEffect(() => {
    const toggle = () => {
      p.setGlow(!p.glow)
    }
    if (pressG) {
      toggle()
    }
  }, [pressG, p])

  return (
    <>
      <p className='fixed bottom-6 left-1/2 -translate-x-1/2 opacity-60'>
        Press F to hide UI
      </p>
    </>
  )
}

export { Immersive }
