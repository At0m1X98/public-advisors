import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

const Offer = () => {
  const { t } = useTranslation();
  const [selectedTitle, setSelectedTitle] = useState(null);
  const closeForm = () => setSelectedTitle(null);

  	return (
		<>
    		<section id="offer" className="bg-gray-100 text-gray-800 py-50 px-4 md:px-8">
    		    <div className="max-w-5xl mx-auto text-center">
    		      	<h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
    		        	{t('offer.title')}
    		      	</h2>
    		      	<p className="text-lg md:text-xl leading-relaxed mb-4 text-justify indent-4">
    		        	{t('offer.description')}
    		      	</p>
    		      	<p className="mb-10 italic text-sm text-gray-600">
    		        	{t('offer.clickPrompt')}
    		      	</p>

    		      	<div className="flex flex-wrap justify-center gap-8">
    		        	{[1, 2, 3, 4].map((num) => (
    		          		<div
    		            		key={num}
    		            		className="bg-white p-6 rounded shadow-md w-72
    		            		          transform transition-transform duration-300
    		            		          hover:scale-105
    		            		          hover:shadow-lg hover:shadow-primary/50 cursor-pointer"
    		            		onClick={() => setSelectedTitle(t(`offer.item${num}.title`))}
    		          		>	
    		            		<h3 className="font-semibold text-xl mb-2">{t(`offer.item${num}.title`)}</h3>
    		            		<p className="block" style={{ textIndent: '1rem' }}>
    		            	  		{t(`offer.item${num}.description`)}
    		            		</p>
    		          		</div>
    		        	))}

    		        	<div
    		          	className="bg-white p-6 rounded shadow-md w-72
    		                transform transition-transform duration-300
    		                hover:scale-105
    		                hover:shadow-lg hover:shadow-primary/50 cursor-pointer"
    		          	onClick={() => setSelectedTitle(t('offer.item.title'))}
    		        	>
    		          		<h3 className="font-semibold text-xl mb-2">{t('offer.item.title')}</h3>
    		          		<p className="block" style={{ textIndent: '1rem' }}>
    		            		{t('offer.item.description')}
    		          		</p>
    		        	</div>
    		      	</div>
    		    </div>
    		</section>
			{selectedTitle && (
				<div 
					className='fixed inset-0 bg-opac flex justify-center items-center z-50'
					onClick={closeForm}
				>
					<div 
						className='bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative border border-gray-300'
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="absolute top-3 right-3 text-gray-700 hover:text-gray-900
									text-3xl font-bold focus:outline-none p-1
									rounded-full hover:bg-gray-200 cursor-pointer
									flex item-center justify-center"
							onClick={closeForm}
							aria-label='Close form'
						>
							&times;
						</button>

						<ContactForm title={selectedTitle}/>
					</div>
				</div>
			)}
		</>
  	)
}

export default Offer;
