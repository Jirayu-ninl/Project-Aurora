import { useEffect } from 'react'

export default function useBodyPointerCursor(hoverState: boolean) {
  useEffect(() => {
    const body = document.body
    if (hoverState) {
      body.style.cursor = 'pointer'
    } else {
      body.style.cursor = 'default'
    }
  })
}
