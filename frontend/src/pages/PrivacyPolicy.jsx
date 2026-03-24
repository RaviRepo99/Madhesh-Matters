import React from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-red-100 mt-2">Last updated: October 20, 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto rounded-lg shadow-lg p-8 md:p-12">

          {/* Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Website Notice</h2>
            <p className="text-blue-700 leading-relaxed">
              <strong>Madhesh Matters News Channel</strong> is an online news platform that provides
              news, information, and updates from Nepal and around the world. We are committed to
              protecting the privacy of our readers and maintaining transparency in how information
              is handled on this website.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Welcome to Madhesh Matters News Channel. This Privacy Policy explains how we collect,
              use, and protect information when you visit our website. By using our website, you
              agree to the practices described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you use our website, we may collect certain information including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Basic visitor information such as browser type and device information</li>
              <li>Information provided through contact forms or email communication</li>
              <li>Cookies that help improve website performance and user experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. How We Use Information</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The information collected may be used to improve website performance, respond to
              inquiries, maintain security, and provide better news content and updates to our
              visitors.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Data Security</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We take appropriate security measures to protect any information shared with us.
              However, please note that no method of internet transmission is completely secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Third-Party Services</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our website may contain links to external websites or services. We are not responsible
              for the privacy policies or practices of those third-party sites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Your Rights</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Users may contact us to request correction or removal of personal information shared
              through our website. We respect the privacy rights of our visitors.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. Any updates will be posted on
              this page with a revised date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Contact Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For questions regarding this Privacy Policy or our news services, please contact us:
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