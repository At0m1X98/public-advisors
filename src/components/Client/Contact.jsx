import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const Contact = () => {
	const {t} = useTranslation();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		title: "",
		message: ""
	});

	const handleChange = (e) => {
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

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
			subject: formData.title
		};

		emailjs.send(serviceID, templateID, data, userID)
			.then(() => {
				alert('Message sent successfully!');
				setFormData({ name: '', email: '', phone: '', message: '', title: '' });
			})
			.catch((err) => {
				console.error(err);
				alert('Failed to send message. Please try again later.');
			});
	};

	return (
		<section id="contact" className='bg-white text-gray-800 py-50 px-4 md:px-8'>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8'>
				<div className='flex-1'>
					<h2 className='"text-primary text-3xl md:text-4xl font-bold mb-6 text-center md:text-left'>
						{t('contact.title')}
					</h2>
					<p className="mb-8 text-lg leading-relaxed text-justify indent-4 break-words whitespace-normal">
            			{t('contact.description')}
          			</p>
					<div className="mb-8 space-y-3">
            			<p><strong>{t('contact.phone')}:</strong> +420 111 222 333</p>
            			<p><strong>{t('contact.email')}:</strong> test@test.com</p>
            			<p><strong>{t('contact.address')}:</strong> Seifertova 87, Praha 3, Žižkov</p>
          			</div>

					<form onSubmit={handleSubmit} className='space-y-4 max-w-md'>
						<input
							type='text'
							name='title'
							placeholder={t('contact.form.title') || 'Subject'}
							value={formData.title}
							onChange={handleChange}
							required
							className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary'
						/>						
						<input
							type='text'
							name='name'
							placeholder={t('contact.form.name')}
							value={formData.name}
							onChange={handleChange}
							required
							className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary'
						/>	
						<input
							type='email'
							name='email'
							placeholder={t('contact.form.email')}
							value={formData.email}
							onChange={handleChange}
							required
							className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary'
						/>
						<input
							type='tel'
							name='phone'
							placeholder={t('contact.form.phone')}
							value={formData.phone}
							onChange={handleChange}
							className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary'
						/>
						<textarea
							name='message'
							placeholder={t('contact.form.message')}
							value={formData.message}
							onChange={handleChange}
							required
							rows={5}
							className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none'
						/>
						<button
							type='submit'
							className='bg-primary text-white px-6 py-3 rounded transition duration-300 ease-in-out hover:bg-primary-dark hover:scale-105 cursor-pointer'
						>
							{t('contact.form.submit')}
						</button>
					</form> 
				</div>

				<div className='flex-1 min-h-[300px] rounded overflow-hidden shadow-md'>
					<iframe
            			title="Seifertova 87, Praha 3 Map"
            			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.968066857228!2d14.460159615834598!3d50.07695567942433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a6a9be258f%3A0xf2485bfc564993e2!2sSeifertova%2087%2C%20130%2000%20Praha%203!5e0!3m2!1sen!2scz!4v1685399985222!5m2!1sen!2scz"
            			width="100%"
            			height="100%"
            			style={{ border: 0 }}
            			allowFullScreen=""
            			loading="lazy"
            			referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</section>
	)
}

export default Contact