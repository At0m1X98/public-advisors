import React from 'react'

const Footer = () => {
  	return (
		<footer className='p-4 bg-gray-100 text-center text-sm text-gray-600'>
			&copy {new Date().getFullYear()} Public Advisor. All rights reserved.
			<a href="/privacy" className="underline hover:text-primary">
    			Privacy Policy
  			</a>
		</footer>
  	);
}

export default Footer
