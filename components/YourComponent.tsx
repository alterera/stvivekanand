'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

// const scrollToElement = () => {
//   const lenis = new Lenis()
//   lenis.scrollTo('#your-element-id')
// }

const YourComponent = () => {
  // Move useEffect inside the component
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e: { scroll: number }) => {
      // Your scroll-based animations here
      console.log(e.scroll) // Current scroll position
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, []) // No need to add Lenis as dependency since it's imported

  return null // or your actual component JSX
}

export default YourComponent 