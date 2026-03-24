import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../api'

export default function Sidebar() {
  const [categories, setCategories] = useState([])
  const [popularArticles, setPopularArticles] = useState([])

  useEffect(() => {
    // Load categories
    api.listCategories()
      .then(setCategories)
      .catch(console.error)

    // Load popular/recent articles (is_highlight or recent published)
    api.listArticles({ is_highlight: '1', limit: 5, status: 'published' })
      .then(articles => {
        // If no highlights, fall back to recent articles
        if (articles.length === 0) {
          return api.listArticles({ limit: 5, status: 'published' })
        }
        return articles
      })
      .then(setPopularArticles)
      .catch(console.error)
  }, [])

  return (
    <aside className="space-y-4 md:space-y-6">
      {/* Categories Section */}
      <div className="bg-white rounded-lg shadow p-4 md:p-6">
        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 pb-2 md:pb-3 border-b-2 border-red-600">
          Categories
        </h3>
        <ul className="space-y-1 md:space-y-2">
          {categories.map(category => (
            <li key={category.id}>
              <Link
                to={`/category/${category.slug}`}
                className="flex items-center justify-between text-gray-700 hover:text-red-600 transition-colors py-1.5 md:py-2 px-2 md:px-3 hover:bg-gray-50 rounded text-sm md:text-base"
              >
                <span className="font-medium">{category.name}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Articles Section */}
      <div className="bg-white rounded-lg shadow p-4 md:p-6">
        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 pb-2 md:pb-3 border-b-2 border-red-600">
          Popular Articles
        </h3>
        <div className="space-y-3 md:space-y-4">
          {popularArticles.map((article, index) => (
            <article key={article.id} className="border-b pb-3 md:pb-4 last:border-0 last:pb-0">
              <Link to={`/article/${article.slug}`} className="group">
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-red-600 text-white rounded flex items-center justify-center font-bold text-xs md:text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-xs md:text-sm text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-1">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-1.5 md:gap-2 text-xs text-gray-500">
                      {article.published_at && (
                        <time>
                          {new Date(article.published_at).toLocaleDateString()}
                        </time>
                      )}
                      {article.categories && article.categories[0] && (
                        <>
                          <span>•</span>
                          <span className="text-red-600">{article.categories[0].name}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Advertisement */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-gray-100 py-2 px-4">
          <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">Advertisement</p>
        </div>
        <a 
          href="https://dishhome.com.np/" 
          className="block hover:opacity-90 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="https://jaankaari.info/wp-content/uploads/2025/05/250.250px-1-1.gif" 
            alt="Advertisement - Hire Me!" 
            className="w-full h-auto"
          />
          {/* Advertisement 2 */}
<div className="bg-white rounded-lg shadow overflow-hidden">
  <div className="bg-gray-100 py-2 px-4">
    <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">
      Advertisement
    </p>
  </div>

  <a
    href="https://times-motors.com/en/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://i.imgur.com/dD1Ibz3.gif"
      alt="Advertisement"
      className="w-full h-auto"
    />
    {/* Advertisement 3 */}
<div className="bg-white rounded-lg shadow overflow-hidden">
  <div className="bg-gray-100 py-2 px-4">
    <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">
      Advertisement
    </p>
  </div>

  <a
    href="https://www.himalayanbank.com/en/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://images.merolagani.com//content/bigyapan/fb432c68-498c-47ca-9595-d98cb313bf00.gif"
      alt="Advertisement"
      className="w-full h-auto"
    />
  </a>
  {/* Advertisement 4 */}
<div className="bg-white rounded-lg shadow overflow-hidden">
  <div className="bg-gray-100 py-2 px-4">
    <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">
      Advertisement
    </p>
  </div>

  <a
    href="https://wa.link/c58jym"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://casinoinnepal.com/wp-content/uploads/2018/12/000.gif"
      alt="Advertisement"
      className="w-full h-auto"
    />
    {/* Advertisement 5 */}
<div className="bg-white rounded-lg shadow overflow-hidden">
  <div className="bg-gray-100 py-2 px-4">
    <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">
      Advertisement
    </p>
  </div>

  <a
    href="https://thenext.edu.np/contact-us/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/651798879_1382562357250635_2697175080719626932_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=FOLhrJRFL3UQ7kNvwFolVzm&_nc_oc=AdmaoVlfabOozvceMk-t6eimhnharukpaI7vgB4JjxkCTCHRL58igE8_4Gn5NygVhjEk4LtR-xfsrQYm2ZNYd3sH&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=Chrt-wH8kNLolsGJKCBrJg&_nc_ss=8&oh=00_Afz9UhmYMum1gFR96ADA6KBsDSsRmFTZG0nW0ur8293R1g&oe=69BA1991"
      alt="Advertisement"
      className="w-full h-auto"
    />
  </a>
</div>
  </a>
</div>
</div>
  </a>
</div>
        </a>
      </div>
    </aside>
  )
}
