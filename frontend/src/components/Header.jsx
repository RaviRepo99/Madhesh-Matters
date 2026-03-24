import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getToken, logout } from '../utils/auth'
import * as api from '../api'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categories, setCategories] = useState([])
  const [nepalTime, setNepalTime] = useState('')
  const [temperature, setTemperature] = useState(null)
  const navigate = useNavigate()
  const logged = !!getToken()

  useEffect(() => {
    api.listCategories().then(setCategories).catch(console.error)
  }, [])

  // Nepal Time Update (Kathmandu - GMT+5:45)
  useEffect(() => {
    const updateNepalTime = () => {
      const timeString = new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      })
      setNepalTime(timeString)
    }
    updateNepalTime()
    const timer = setInterval(updateNepalTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Fetch Temperature
  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=27.7172&longitude=85.3240&current=temperature_2m&temperature_unit=celsius')
        const data = await response.json()
        setTemperature(data.current?.temperature_2m)
      } catch (error) {
        console.error('Failed to fetch temperature:', error)
      }
    }
    fetchTemperature()
    const tempTimer = setInterval(fetchTemperature, 10 * 60 * 1000) // Update every 10 minutes
    return () => clearInterval(tempTimer)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('header')) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Close mobile menu when navigating
  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/')
  }

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
<header className="bg-white sticky top-0 z-50">
  {/* Top Bar - Info Section */}
  <div className="bg-gray-900 text-white text-xs md:text-sm">
    <div className="container mx-auto px-2 md:px-4 py-2 md:py-3">
      <div className="flex items-center justify-between gap-2 md:gap-4">
        
        {/* Left: Date & Time */}
        <div className="flex items-center gap-1 md:gap-3 text-xs md:text-sm">
          <div className="flex flex-col">
            <span className="font-semibold text-red-500">
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="text-gray-300">{nepalTime} (NPT)</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-700"></div>
          {temperature !== null && (
            <div className="hidden md:flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <span className="text-yellow-400 font-semibold">{temperature.toFixed(1)}°C</span>
              <span className="text-gray-400">Kathmandu</span>
            </div>
          )}
        </div>

        {/* Right: Social Icons Only */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=61578403272702" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors p-1 md:p-0">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" className="hover:text-red-500 transition-colors p-1 md:p-0">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/who_izz_he/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors p-1 md:p-0">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.55 4 20 5.45 20 7.75v8.5C20 18.55 18.55 20 16.25 20h-8.5C5.45 20 4 18.55 4 16.25v-8.5C4 5.45 5.45 4 7.75 4zm4.25 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Advertisement Banner - Mobile Responsive */}
  <div className="bg-gray-100 border-b border-gray-300">
    <div className="container mx-auto px-2 md:px-4 py-2">
      <div className="flex justify-center items-center min-h-[60px] md:min-h-[90px]">
        <a
          href="https://www.ronbpost.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center"
        >
          <img
            src="https://www.ronbpost.com/wp-content/uploads/2025/09/Neo-Money-Transfer-Banner.gif"
            alt="Advertisement"
            className="w-full max-w-2xl h-auto object-contain"
          />
        </a>
      </div>
    </div>
  </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <h1 className="text-3xl font-bold text-red-600">Madhesh<span className="text-gray-900">Matters</span> <span className="text-sm text-gray-500">Live</span></h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</Link>
            {!logged && (
              <Link to="/latest-news" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Latest News</Link>
            )}
            {logged ? (
              <>
                <Link to="/admin/articles/new" className="text-gray-700 hover:text-red-600 font-medium transition-colors whitespace-nowrap">Create Article</Link>
                <Link to="/admin/articles" className="text-gray-700 hover:text-red-600 font-medium transition-colors whitespace-nowrap">All Articles</Link>
                <Link to="/admin/categories" className="text-gray-700 hover:text-red-600 font-medium transition-colors whitespace-nowrap">Categories</Link>
                <Link to="/admin/media" className="text-gray-700 hover:text-red-600 font-medium transition-colors whitespace-nowrap">Media</Link>
                <Link to="/admin/tags" className="text-gray-700 hover:text-red-600 font-medium transition-colors whitespace-nowrap">Tags</Link>
                <Link to="/admin/dashboard" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {categories.slice(0, 6).map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/category/${cat.slug}`} 
                    className="text-gray-700 hover:text-red-600 font-medium transition-colors whitespace-nowrap"
                  >
                    {cat.name}
                  </Link>
                ))}
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-red-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2 border-t pt-4">
            <Link to="/" onClick={handleNavClick} className="text-gray-700 hover:bg-red-100 hover:text-red-600 active:bg-red-200 active:text-red-700 font-medium transition-colors px-3 py-2 rounded-lg">Home</Link>
            {!logged && (
              <Link to="/latest-news" onClick={handleNavClick} className="text-gray-700 hover:bg-red-100 hover:text-red-600 active:bg-red-200 active:text-red-700 font-medium transition-colors px-3 py-2 rounded-lg">Latest News</Link>
            )}
            {logged ? (
              <>
                <Link to="/admin/articles/new" onClick={handleNavClick} className="text-gray-700 hover:bg-red-100 hover:text-red-600 active:bg-red-200 active:text-red-700 font-medium transition-colors px-3 py-2 rounded-lg">Create Article</Link>
                <Link to="/admin/articles" onClick={handleNavClick} className="text-gray-700 hover:bg-red-100 hover:text-red-600 active:bg-red-200 active:text-red-700 font-medium transition-colors px-3 py-2 rounded-lg">All Articles</Link>
                <Link to="/admin/categories" onClick={handleNavClick} className="text-gray-700 hover:bg-red-100 hover:text-red-600 active:bg-red-200 active:text-red-700 font-medium transition-colors px-3 py-2 rounded-lg">Categories</Link>
                <Link to="/admin/media" onClick={handleNavClick} className="text-gray-700 hover:bg-red-100 hover:text-red-600 active:bg-red-200 active:text-red-700 font-medium transition-colors px-3 py-2 rounded-lg">Media</Link>
                <Link to="/admin/tags" onClick={handleNavClick} className="text-gray-700 hover:bg-red-100 hover:text-red-600 active:bg-red-200 active:text-red-700 font-medium transition-colors px-3 py-2 rounded-lg">Tags</Link>
                <Link to="/admin/dashboard" onClick={handleNavClick} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 active:bg-red-800 transition-colors font-medium text-center">
                  Dashboard
                </Link>
                <button 
                  onClick={() => { handleLogout(); handleNavClick(); }}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 active:bg-gray-800 transition-colors font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {categories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/category/${cat.slug}`}
                    onClick={handleNavClick}
                    className="text-gray-700 hover:bg-red-100 hover:text-red-600 active:bg-red-200 active:text-red-700 font-medium transition-colors px-3 py-2 rounded-lg"
                  >
                    {cat.name}
                  </Link>
                ))}
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
