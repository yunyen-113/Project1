import { useEffect, useRef } from 'react'

export function useScrollLock(locked: boolean): void {
  const scrollY = useRef(0)

  useEffect(() => {
    if (!locked) return

    scrollY.current = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY.current}px`
    document.body.style.width = '100%'
    document.body.style.overflowY = 'scroll'

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflowY = ''
      window.scrollTo(0, scrollY.current)
    }
  }, [locked])
}
