
import { useState } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom'

const Header = ({ }) => {

	const [isMenuOpen, setisMenuOpen] = useState(false)

	const toggleMenu = () => {
		setisMenuOpen(!isMenuOpen)
	}

	return (
		<div className='header'>
			<div className="container header__container">
				<div className="header__container-logo">
					<Link to='/' className='header__logo'>Br<span className='header__logo-text'>yan</span></Link>
				</div>
				<button className='header__menu-toggle' onClick={toggleMenu}><i className={isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}></i></button>
				<nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
					<ul className='header__menu'>
						<li className='header__menu-item'><NavLink className='header__menu-link' onClick={toggleMenu} to='/'>Home</NavLink></li>
						<li className='header__menu-item'><NavLink className='header__menu-link' onClick={toggleMenu} to='/about'>About</NavLink></li>
						<li className='header__menu-item'><NavLink className='header__menu-link' onClick={toggleMenu} to='/skills'>Skills</NavLink></li>
						<li className='header__menu-item'><NavLink className='header__menu-link' onClick={toggleMenu} to='/projects'>Projects</NavLink></li>
						<li className='header__menu-item'><NavLink className='header__menu-link' onClick={toggleMenu} to='/qualification'>Qualification</NavLink></li>
						<li className='header__menu-item'><NavLink className='header__menu-link' onClick={toggleMenu} to='/contact' >Contact</NavLink></li>
					</ul>
				</nav>
			</div>
		</div>
	);
};


export default Header;