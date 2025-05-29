import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrivacyPolicy = () => {
	const navigate = useNavigate();

  	return (
		<section className="max-w-4xl mx-auto p-8 bg-white text-gray-800">
      		<h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      		<p className="mb-4">Last updated: May 2025</p>

      		<p className="mb-4">
       	 		We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.
      		</p>

      		<h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
      		<p className="mb-4">
        		When you use the contact form on our website, we collect the following personal information:
      		</p>
      		<ul className="list-disc list-inside mb-4">
        		<li>Name</li>
        		<li>Email address</li>
        		<li>Phone number (optional)</li>
        		<li>Message content</li>
      		</ul>

      		<h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
      		<p className="mb-4">
        		The information you provide is used solely to respond to your inquiries and provide the requested services. We do not share your personal data with third parties except for the email service provider (EmailJS) used to process your message.
      		</p>

      		<h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
      		<p className="mb-4">
        		We retain your personal information only as long as necessary to respond to your inquiry and comply with legal obligations.
      		</p>

      		<h2 className="text-2xl font-semibold mb-3">Data Security</h2>
      		<p className="mb-4">
       	 		We take appropriate technical and organizational measures to protect your data during transmission and storage, including using HTTPS encryption.
      		</p>

      		<h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
      		<p className="mb-4">
        		You have the right to:
      		</p>
      		<ul className="list-disc list-inside mb-4">
        		<li>Access the personal data we hold about you</li>
        		<li>Request correction or deletion of your personal data</li>
        		<li>Object to or restrict processing of your data</li>
      		</ul>
      		<p className="mb-4">
        		To exercise these rights, please contact us at <a href="mailto:test@test.com" className="text-primary underline">test@test.com</a>.
      		</p>

      		<h2 className="text-2xl font-semibold mb-3">Cookies</h2>
      		<p className="mb-4">
        		Our website does not use cookies except for essential session management cookies necessary for the contact form to function.
      		</p>

      		<h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
      		<p className="mb-4">
        		We may update this Privacy Policy from time to time. The updated version will be posted on this page.
      		</p>

      		<h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      		<p className="mb-4">
        		If you have any questions about this Privacy Policy, please contact us at:
      		</p>
      		<p>Email: <a href="mailto:test@test.com" className="text-primary underline">test@test.com</a></p>
      		<p>Phone: +420 111 222 333</p>
			<button 
				onClick={(e) => navigate("/")}
				className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out'
			>
				Go Back
			</button>
    	</section>
  	)
}

export default PrivacyPolicy
