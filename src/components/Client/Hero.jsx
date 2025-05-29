import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
	const {t} = useTranslation();

  	return (
		<section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      		<video
        		autoPlay
        		loop
        		muted
        		playsInline
        		className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      		>
        		<source src="/media/hero-bg.mp4" type="video/mp4" />
      		</video>
			
			<div className="absolute inset-0 bg-black opacity-50 z-0" />

			<div className="relative z-10 text-white px-4">
        		<h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{t('hero.title')}</h1>
        		<p className="max-w-xl mx-auto text-lg md:text-xl drop-shadow-md">{t('hero.subtitle')}</p>
      		
  				<div className="w-full border-t border-white opacity-50 mt-6 mb-6" />

				<div className='flex items-center justify-center space-x-6'>
					<a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-300'>
						<svg className='w-12 h-12 fill-current' viewBox='0 0 24 24'>
							<path d="M22 12.07c0-5.49-4.46-9.94-9.94-9.94S2.12 6.58 2.12 12.07c0 4.98 3.65 9.1 8.44 9.86v-6.97h-2.54v-2.89h2.54V9.77c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.89h-2.32v6.97c4.8-.76 8.45-4.89 8.45-9.87z"/>
						</svg>
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
      					<svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
        					<path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 3a1 1 0 110 2 1 1 0 010-2zm-5 1.5A5.5 5.5 0 1111.5 19 5.507 5.507 0 0112 6.5zm0 2A3.5 3.5 0 1015.5 12 3.504 3.504 0 0012 8.5z"/>
      					</svg>
    				</a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
    				  	<svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
    				  	  	<path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.48 8.48 0 01-2.7 1.03 4.22 4.22 0 00-7.2 3.85A12 12 0 013 5.15a4.23 4.23 0 001.31 5.64 4.15 4.15 0 01-1.91-.53v.05a4.22 4.22 0 003.38 4.14 4.24 4.24 0 01-1.9.07 4.23 4.23 0 003.94 2.93A8.46 8.46 0 012 19.54 11.94 11.94 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.18 8.18 0 0022.46 6z"/>
    				  	</svg>
    				</a>
				</div>
			</div>

			<div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 slow-bounce'>
				<a href='#about' aria-label='Scroll down'>
					<svg
						className='w-10 h-10 text-white'
						fill='none'
						stroke='currentColor'
						strokeWidth={2}
						viewBox='0 0 24 24'
					>
						<path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7'/>
					</svg>
				</a>
			</div>
    	</section>
  	)
}

export default Hero
