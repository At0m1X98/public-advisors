import React from 'react'
import { Link } from 'react-router-dom	'

const Footer = () => {
  	return (
		<footer className='p-4 bg-gray-100 text-center text-sm text-gray-600'>
			&copy {new Date().getFullYear()} Public Advisor. All rights reserved.
			<Link to="/privacy" className="underline hover:text-primary">
    			Privacy Policy
  			</Link>
		</footer>
  	);
}

export default Footer
