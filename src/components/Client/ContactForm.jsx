import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const ContactForm = ({title, onSubmit}) => {
	const {t} = useTranslation();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const serviceID = 'service_wag4ivq';
		const templateID = 'template_bfkft8l';
		const userID = 'pmbtfsvFYZFpTLRlb';

		const data = {
			from_name: formData.name,
			from_email: formData.email,
			phone: formData.phone,
			message: formData.message,
			subject: title
		};

		emailjs.send(serviceID, templateID, data, userID)
			.then(() => {
				alert('Message sent successfully!');
				setFormData({ name: '', email: '', phone: '', message: '' });
			})
			.catch((err) => {
				console.error(err);
				alert('Failed to send message. Please try again later.');
			});
	};

  	return (
		<form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 rounded">
      		<h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>

      		<input
      		  	type="text"
      		  	name="name"
      		  	placeholder={t('form.name')}
      		  	value={formData.name}
      		  	onChange={handleChange}
      		  	required
      		  	className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
      		/>
	
      		<input
      		  	type="email"
      		  	name="email"
      		  	placeholder={t('form.email')}
      		  	value={formData.email}
      		  	onChange={handleChange}
      		  	required
      		  	className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
      		/>
	
      		<input
      		  	type="tel"
      		  	name="phone"
      		  	placeholder={t('form.phone')}
      		  	value={formData.phone}
      		  	onChange={handleChange}
      		  	className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
      		/>
	
      		<textarea
      		  	name="message"
      		  	placeholder={t('form.message')}
      		  	value={formData.message}
      		  	onChange={handleChange}
      		  	rows={5}
      		  	required
      		  	className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      		/>
	
      		<button
      		  	type="submit"
      		  	className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition cursor-pointer w-full"
      		>
        		{t('form.submit')}
      		</button>
    	</form>
  	)
}

export default ContactForm
