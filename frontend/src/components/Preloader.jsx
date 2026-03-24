import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

export default function Preloader({ onComplete }) {
  const navigate = useNavigate()

  useEffect(() => {
    // Master timeline
    const tl = gsap.timeline()

    // Stagger letters animation - each letter of "Madhesh Matters"
    const text = 'Madhesh Matters'
    const letterElements = document.querySelectorAll('.preloader-letter')

    // Phase 1: Stagger letters coming in (0s - 2s)
    tl.to(letterElements, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: 'back.out',
      stagger: {
        amount: 0.8,
        grid: 'auto'
      }
    }, 0)

    // Phase 2: Hold and pulsate (2s - 4s)
    tl.to(letterElements, {
      duration: 1.5,
      scale: 1.05,
      ease: 'sine.inOut',
      stagger: 0.05
    }, 2)

    // Phase 3: Add glow effect to the text
    tl.to('.preloader-text-container', {
      duration: 0.5,
      filter: 'drop-shadow(0 0 20px rgba(234, 88, 12, 0.8))',
      ease: 'power2.inOut'
    }, 2)

    // Phase 4: Scale up the logo container (3.5s - 4.5s)
    tl.to('.preloader-logo-container', {
      duration: 1,
      scale: 1.1,
      ease: 'elastic.out(1, 0.5)'
    }, 3.5)

    // Phase 5: Exit animation - fade out + slide up (4.5s - 5.5s)
    tl.to('.preloader-overlay', {
      duration: 1,
      opacity: 0,
      ease: 'power2.inOut'
    }, 4.5)

    tl.to('.preloader-content', {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: 'power2.inOut'
    }, 4.5)

    // Call onComplete when done
    tl.call(() => {
      if (onComplete) {
        onComplete()
      }
    }, [], 5.5)

    // Cleanup
    return () => {
      tl.kill()
    }
  }, [onComplete])

  const handleClick = () => {
    navigate('/')
    if (onComplete) {
      onComplete()
    }
  }

  return (
    <div className="preloader-overlay" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="preloader-content">
        {/* Background animated gradient */}
        <div className="preloader-bg-gradient"></div>

        {/* Logo Container */}
        <div className="preloader-logo-container">
          {/* Animated circles background */}
          <div className="preloader-circle preloader-circle-1"></div>
          <div className="preloader-circle preloader-circle-2"></div>
          <div className="preloader-circle preloader-circle-3"></div>

          {/* Text Animation */}
          <div className="preloader-text-container">
            <h1 className="preloader-title">
              {'Madhesh Matters'.split('').map((letter, idx) => (
                <span
                  key={idx}
                  className="preloader-letter"
                  style={{
                    opacity: 0,
                    transform: 'translateY(30px)',
                    display: 'inline-block',
                    marginRight: letter === ' ' ? '0.5em' : '0'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

          </div>

          {/* Loading indicator */}
          <div className="preloader-loader">
            <div className="preloader-line"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
