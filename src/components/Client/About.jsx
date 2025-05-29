import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
	const {t} = useTranslation();

  	return (
		<section id='about' className='bg-white text-gray-800 py-50 px-4 md:px-8'>
			<div className='max-w-4xl mx-auto'>
				<h2 className='text-primary text-3xl md:text-4xl font-bold mb-6 text-center drop-shadow-md'>
					{t('about.title')}
				</h2>
				<p className='text-primary text-lg md:text-xl leading-relaxed text-justify indent-4 drop-shadow-md'>
					{t('about.description')}
				</p>
			</div>
		</section>
  	)
}

export default About
