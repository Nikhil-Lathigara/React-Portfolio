import { useEffect, useRef } from 'react'

const StarBackground = () => {
  const starsRef = useRef(null)

  useEffect(() => {
    if (!starsRef.current) return

    const container = starsRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    // Clear any existing stars
    container.innerHTML = ''

    // Create stars
    const starCount = 100
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.classList.add('star')
      
      // Random size between 1-3px
      const size = Math.random() * 2 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      
      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 5}s`
      
      container.appendChild(star)
    }

    return () => {
      // Cleanup
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  return (
    <div ref={starsRef} className="stars" aria-hidden="true"></div>
  )
}

export default StarBackground