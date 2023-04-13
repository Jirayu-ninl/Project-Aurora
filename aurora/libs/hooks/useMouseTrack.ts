import { useState, useEffect } from 'react'

function MouseTrack() {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
    movementX: null,
    movementY: null,
    scrollY: null,
  })

  useEffect(() => {
    function handle(e) {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
        movementX: e.movementX,
        movementY: e.movementY,
        scrollY: window.scrollY,
      })
    }

    document.addEventListener('mousemove', handle)

    return () => document.removeEventListener('mousemove', handle)
  })
  return mousePosition
}

export default MouseTrack
