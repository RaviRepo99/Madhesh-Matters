import React from 'react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-red-100 mt-2">Last updated: October 20, 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto rounded-lg shadow-lg p-8 md:p-12">

          {/* Website Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Website Notice</h2>
            <p className="text-blue-700 leading-relaxed">
              <strong>Madhesh Matters News Channel</strong> is an online news platform providing 
              news, updates, and information from Nepal and around the world. By accessing this 
              website, you agree to follow the terms and conditions outlined below.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              By accessing and using Madhesh Matters News Channel, you agree to comply with 
              these Terms of Service. If you do not agree with any part of these terms, 
              please discontinue using this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Description of Service</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Madhesh Matters News Channel provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Latest news and updates from Nepal and worldwide</li>
              <li>Political, business, sports, entertainment, and social news</li>
              <li>Articles, reports, and informational content</li>
              <li>Multimedia news content for readers</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When using this website, users agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Use the website only for lawful purposes</li>
              <li>Not attempt to damage, hack, or disrupt website services</li>
              <li>Respect intellectual property rights of published content</li>
              <li>Not reproduce or redistribute content without permission</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              All content published on Madhesh Matters News Channel including articles, 
              images, logos, and design elements are the property of the website unless 
              otherwise stated. Unauthorized copying or distribution of content is prohibited.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Content Disclaimer</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              While we strive to provide accurate and updated information, Madhesh Matters 
              News Channel does not guarantee the completeness or accuracy of all published 
              content. News information may change as new updates become available.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Madhesh Matters News Channel will not be held responsible for any direct 
              or indirect damages resulting from the use of information available on this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Privacy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Please refer to our{' '}
              <Link to="/privacy-policy" className="text-red-600 hover:text-red-700 hover:underline">
                Privacy Policy
              </Link>{' '}
              for information on how we handle website data and user information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Changes to Terms</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may update these Terms of Service from time to time. Continued use of 
              this website after changes are published constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Contact</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For questions, feedback, or inquiries:
            </p>

            <ul className="list-none text-gray-700 mb-6 space-y-2">
              <li><strong>Email:</strong> mattermadhesh@gmail.com</li>
              <li><strong>Location:</strong> Janakpur Dham / Kathmandu, Nepal</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                to="/" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}