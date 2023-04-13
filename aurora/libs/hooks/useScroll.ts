import { useState, useEffect } from 'react'

function ScrollTrack() {
  const [ScrollPosition, setScrollPosition] = useState({
    scrollY: null,
    scrollable: null,
  })

  useEffect(() => {
    window.addEventListener('scroll', handle)

    function handle(e) {
      setScrollPosition({
        scrollY: window.scrollY,
        scrollable: document.documentElement.scrollHeight - window.innerHeight,
      })
    }

    return () => window.removeEventListener('scroll', handle)
  })
  return ScrollPosition
}

export default ScrollTrack
