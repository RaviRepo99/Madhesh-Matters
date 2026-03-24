import React, { useEffect, useRef, useState } from 'react'

/**
 * AnimationWrapper - Adds fade-in animation when element comes into view
 */
export default function AnimationWrapper({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? 'animate-fadeIn' : 'opacity-0'
      }`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        transitionDuration: '800ms'
      }}
    >
      {children}
    </div>
  )
}
