import React, {useState} from 'react'
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
	const {t} = useTranslation();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  	return (
    	<nav className="sticky top-0 z-50 flex flex-col md:flex-row md:justify-between items-center py-2 px-4 text-white bg-primary shadow-md" style={{ boxShadow: "0px 0px 8px .75px white" }}>
    	  	<div className="flex items-center gap-2 w-full md:w-auto justify-between">
				<a href="#">
					<img src='/logo/logo.png' alt='Logo' className='h-[90px] w-auto rouded'/>
				</a>
				<button
					className='md:hidden text-white focus:outline-none'
					aria-label='Toggle menu'
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					<svg 
						className='w-8 h-8'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						{mobileMenuOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						) : (
							<path
                				strokeLinecap="round"
                				strokeLinejoin="round"
                				strokeWidth={2}
                				d="M4 6h16M4 12h16M4 18h16"
              				/>
						)}
					</svg>
				</button>
			</div>
			<div className='hidden md:flex gap-6 items-center'>
				<a 
					href="#about"
					className="px-3 py-2 hover:underline rounded focus:outline-none focus:ring-2 focus:ring-white"
				>
					{t('nav.about')}
				</a>
				<a 
					href="#offer" 
				    className="px-3 py-2 hover:underline rounded focus:outline-none focus:ring-2 focus:ring-white"
				>
					{t('nav.services')}
				</a>
				<a 
  				  	href="#contact" 
  				  	className="px-3 py-2 hover:underline rounded focus:outline-none focus:ring-2 focus:ring-white"
  				>
  				  	{t('nav.contact')}
  				</a>
				<LanguageSwitcher/>
			</div>
			
			{mobileMenuOpen && (
				<div className='flex flex-col gap-4 bg-primary absolute top-full left-0 w-full p-4 md:hidden z-10'>
					<a
						href='#about'
            			className="block px-3 py-2 hover:underline rounded focus:outline-none focus:ring-2 focus:ring-white"
            			onClick={() => setMobileMenuOpen(false)}
					>
						{t('nav.about')}
					</a>
          			<a
          			  	href="#offer"
          			  	className="block px-3 py-2 hover:underline rounded focus:outline-none focus:ring-2 focus:ring-white"
          			  	onClick={() => setMobileMenuOpen(false)}
          			>
          			  	{t('nav.services')}
          			</a>
					<a
            			href="#contact"
            			className="block px-3 py-2 hover:underline rounded focus:outline-none focus:ring-2 focus:ring-white"
            			onClick={() => setMobileMenuOpen(false)}
          			>
            			{t('nav.contact')}
          			</a>
          			<LanguageSwitcher />
				</div>
			)}
    	</nav>
  );
}

export default Navbar
