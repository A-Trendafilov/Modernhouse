import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger for resetting scroll, not a value the effect reads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
