import './Contact.css';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Contact = ({ }) => {

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_8iz65bm', 'template_tm403mp', form.current, {
					publicKey: 'lQaS5RRoREW-nNO4t'
				}
			).then(
				() => {
					console.log('SUCCESS')
				},
				(error) => {
					console.log('FAILED...', error.text)
				}
			)
	}



	return (
		<section className='contact section'>
			<h2 className='section__title'>Get in touch</h2>
			<span className='section__subtitle'>Contact Me</span>

			<div className="contact__container container grid">
				<div className="contact__content">
					<h3 className="contact__title">Información</h3>

					<div className="contact__info">
						<div className="contact__card">
							<i className='bx bx-mail-send contact__card-icon'></i>

							<h3 className='contact__card-title'>Email</h3>
							<span className="contact__card-data">bmancilla119@gmail.com</span>
							<a href="#" className="contact__button">Write me <i className='bx bx-right-arrow-alt contact__button-icon'></i> </a>
						</div>

						<div className="contact__card">
							<i className='bx bxl-whatsapp contact__card-icon'></i>

							<h3 className='contact__card-title'>Whatsapp</h3>
							<span className="contact__card-data">+51 935 855 675</span>
							<a href="mailto:bmancilla119@gmail.com" className="contact__button">Write me <i className='bx bx-right-arrow-alt contact__button-icon'></i> </a>
						</div>

						<div className="contact__card">
							<i className='bx bxl-messenger contact__card-icon'></i>

							<h3 className='contact__card-title'>Messenger</h3>
							<span className="contact__card-data">Bryan Mancilla</span>
							<a href="#" className="contact__button">Write me <i className='bx bx-right-arrow-alt contact__button-icon'></i> </a>
						</div>
					</div>
				</div>
				<div className="contact__content">
					<h3 className="contact__title">Escríbeme tu proyecto</h3>

					<form ref={form} onSubmit={sendEmail} className="contact__form">
						<div className="contact__form-div">
							<label htmlFor="" className='contact__form-tag'>Nombre</label>
							<input type="text" name='name' className='contact__form-input' placeholder='Insert your name' />
						</div>
						<div className="contact__form-div">
							<label htmlFor="" className='contact__form-tag'>Correo</label>
							<input type="email" name='email' className='contact__form-input' placeholder='Insert your email' />
						</div>
						<div className="contact__form-div contact__form-area">
							<label htmlFor="" className='contact__form-tag'>Project</label>
							<textarea name='project' className='contact__form-input' cols="30" rows="10" placeholder='Write your project'></textarea>
						</div>
						<button type='submit' className='button button--flex'>Enviar Mensaje</button>
					</form>
				</div>
			</div>
		</section>
	);
};

Contact.propTypes = {};

export default Contact;