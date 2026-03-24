import React from 'react'
import { Link } from 'react-router-dom'

export default function MadheshMatters() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden animate-fadeIn">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      {/* Animated background orbs */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-red-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content wrapper */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 animate-slideUp">
          <Link to="/" className="inline-flex items-center justify-center gap-3 mb-6 group hover:opacity-80 transition-opacity duration-300">
            <div className="h-0.5 w-8 bg-gradient-to-r from-transparent to-orange-500 group-hover:w-12 transition-all duration-300"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 animate-gradient-shift cursor-pointer">
              Madhesh Matters
            </h2>
            <div className="h-0.5 w-8 bg-gradient-to-r from-orange-500 to-transparent group-hover:w-12 transition-all duration-300"></div>
          </Link>
          
          <p className="text-gray-400 text-sm md:text-base mt-6 max-w-2xl mx-auto font-light tracking-wide leading-relaxed animate-blurIn" style={{ animationDelay: '0.2s' }}>
            मधेश क्षेत्रको विकास, समाचार र समुदायको आवाज
            <br className="hidden md:inline" />
            <span className="text-gray-500 text-xs md:text-sm ml-1">Regional Development • Community News</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Card 1 - Latest News */}
          <div className="stagger-item group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:translate-y-[-8px]">
            {/* Hover glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/0 to-orange-600/0 group-hover:from-orange-600/10 group-hover:via-orange-600/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
            
            {/* Image section */}
            <div className="relative h-48 md:h-56 bg-gradient-to-br from-orange-500 to-red-600 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <div className="text-center transform group-hover:scale-125 transition-transform duration-500">
                  <div className="text-6xl md:text-7xl mb-3 animate-bounce">📰</div>
                  <span className="text-xs font-bold tracking-widest text-white/80 uppercase">समाचार</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-7 relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-1">
                Latest News
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-2 leading-relaxed">
                मधेश क्षेत्रको ताजा समाचार र साप्ताहिक अपडेटहरु
              </p>
              <Link 
                to="/latest-news" 
                className="inline-flex items-center text-orange-400 font-semibold text-sm hover:text-orange-300 transition-all duration-300 group/link"
              >
                पढ्नुहोस्
                <span className="inline-block ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2 - Development */}
          <div className="stagger-item group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:translate-y-[-8px]" style={{ animationDelay: '0.1s' }}>
            {/* Hover glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:via-red-600/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>

            {/* Image section */}
            <div className="relative h-48 md:h-56 bg-gradient-to-br from-red-500 to-orange-600 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <div className="text-center transform group-hover:scale-125 transition-transform duration-500">
                  <div className="text-6xl md:text-7xl mb-3 animate-bounce" style={{ animationDelay: '0.1s' }}>🏗️</div>
                  <span className="text-xs font-bold tracking-widest text-white/80 uppercase">विकास</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-7 relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-1">
                Development
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-2 leading-relaxed">
                मधेशको अवसंरचना र आर्थिक विकास परियोजनाहरु
              </p>
              <Link 
                to="/categories" 
                className="inline-flex items-center text-orange-400 font-semibold text-sm hover:text-orange-300 transition-all duration-300 group/link"
              >
                अन्वेषण
                <span className="inline-block ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Card 3 - Community */}
          <div className="stagger-item group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:translate-y-[-8px]" style={{ animationDelay: '0.2s' }}>
            {/* Hover glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/0 via-yellow-600/0 to-yellow-600/0 group-hover:from-yellow-600/10 group-hover:via-yellow-600/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>

            {/* Image section */}
            <div className="relative h-48 md:h-56 bg-gradient-to-br from-yellow-500 to-orange-600 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <div className="text-center transform group-hover:scale-125 transition-transform duration-500">
                  <div className="text-6xl md:text-7xl mb-3 animate-bounce" style={{ animationDelay: '0.2s' }}>🌍</div>
                  <span className="text-xs font-bold tracking-widest text-white/80 uppercase">समुदाय</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-7 relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-1">
                Community
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-2 leading-relaxed">
                मधेश क्षेत्रको सामाजिक र सांस्कृतिक कार्यक्रमहरु
              </p>
              <Link 
                to="/latest-news" 
                className="inline-flex items-center text-orange-400 font-semibold text-sm hover:text-orange-300 transition-all duration-300 group/link"
              >
                जान्नुहोस्
                <span className="inline-block ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden animate-gradient-shift border border-orange-500/50">
          {/* Animated background */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,.1) 0%, transparent 50%)',
          }}></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-4 animate-slideUp">
              मधेशको आवाज सुनिनुहोस्
            </h3>
            <p className="text-orange-100 mb-8 text-sm md:text-base font-light tracking-wide animate-slideUp" style={{ animationDelay: '0.1s' }}>
              हामी मधेश क्षेत्रको विकास, समुदायको खबर र सांस्कृतिक विविधता दिन प्रतिबद्ध छौं
            </p>
            <Link 
              to="/latest-news"
              className="inline-block bg-white text-orange-600 font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-slideUp text-sm md:text-base"
              style={{ animationDelay: '0.2s' }}
            >
              सबै समाचार पढ्नुहोस्
            </Link>
          </div>
        </div>

        {/* Decorative bottom border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mt-20"></div>
      </div>
    </section>
  )
}
