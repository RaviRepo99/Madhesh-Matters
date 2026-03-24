import React, { useEffect, useState } from 'react'

export default function LoadingScreen({ isVisible = true }) {
  const [dots, setDots] = useState('')
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    
    // Dots animation
    const dotsInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'))
    }, 400)

    // Progress bar animation (5 seconds total) - 100% in 5 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / 50) // 100% in 5 seconds (50 intervals of 100ms)
        return newProgress > 100 ? 100 : newProgress
      })
    }, 100)

    // Counter animation (1 to 100 in 5 seconds)
    const counterInterval = setInterval(() => {
      setCounter(prev => {
        const newCounter = prev + 2 // 2 per 100ms = 100 in 5 seconds
        return newCounter > 100 ? 100 : newCounter
      })
    }, 100)
    
    return () => {
      clearInterval(dotsInterval)
      clearInterval(progressInterval)
      clearInterval(counterInterval)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center z-50 backdrop-blur-sm">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-yellow-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo / Text Animation */}
        <div className="mb-12 md:mb-16 animate-slideUp">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent animate-gradient-shift px-2">
              Madhesh Matters
            </h1>
          </div>
          <p className="text-gray-400 text-xs md:text-sm font-light tracking-[0.2em] uppercase px-2">
            News & Updates
          </p>
        </div>

        {/* Advanced Loader - Circular with Enhanced Animation */}
        <div className="flex justify-center items-center gap-2 mb-12">
          <svg className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-2xl" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2.5"
              strokeDasharray="282"
              strokeDashoffset="0"
              className="animate-spin"
              style={{ animationDuration: '2.5s', filter: 'url(#glow)' }}
              filter="url(#glow)"
            />
            {/* Inner rotating circle */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1.5"
              opacity="0.5"
              className="animate-spin"
              style={{ animationDuration: '3.5s', animationDirection: 'reverse' }}
            />
          </svg>
        </div>

        {/* Dot loader fallback with enhanced animation */}
        <div className="flex justify-center items-center gap-3 mb-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 rounded-full shadow-lg shadow-orange-500/50"
              style={{
                animation: `pulse 1.4s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Counter Display - Numeric Progress */}
        <div className="mb-8">
          <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent tracking-tight">
            {counter}
          </div>
          <p className="text-gray-500 text-xs mt-2">% तयारी</p>
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 text-xs sm:text-sm font-light tracking-wider mb-8 px-2">
          <span>Loading your stories</span>
          <span className="text-orange-500 font-semibold">{dots}</span>
        </p>

        {/* Progress bar - Dynamic with Enhanced Styling */}
        <div className="mb-8 px-2 sm:px-0">
          <div className="w-full sm:w-64 mx-auto h-2 bg-gray-800/50 rounded-full overflow-hidden border border-gray-700/50 backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full shadow-2xl shadow-orange-500/50 transition-all duration-100 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/10 rounded-full animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 text-xs mt-8 font-light">
          मधेशको समाचार तयार गरिदैछ...
        </p>
      </div>
    </div>
  )
}
