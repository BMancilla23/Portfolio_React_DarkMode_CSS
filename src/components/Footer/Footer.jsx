import { Link } from 'react-router-dom';
import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({ }) => {
	return (
		<footer className='footer'>
			<h1 className="footer__title">Bryan</h1>
			<div className="footer__container container">

				<ul className="footer__list">
					<li><Link to="/home" className="footer__link">Home</Link></li>
					<li><Link to="/about" className="footer__link">About</Link></li>
					<li><Link to="/skills" className="footer__link">Skills</Link></li>
					<li><Link to="/portfolio" className="footer__link">Portfolio</Link></li>
					<li><Link to="/qualification" className="footer__link">Qualification</Link></li>
					<li><Link to="/contact" className="footer__link">Contact</Link></li>
				</ul>

				<div className="footer__social">
					<a href="#" className='footer__social-link' >
						<i className='bx bxl-facebook'></i>
					</a>
					<a href="#" className='footer__social-link'>
						<i className='bx bxl-github'></i>
					</a>
					<a href="#" className='footer__social-link'>
						<i className='bx bxl-instagram'></i>
					</a>
				</div>
			</div>
			<span className="footer__copy">&#169; Adev. Todos los derechos reservados</span>
		</footer>
	)
};

Footer.propTypes = {};

export default Footer;