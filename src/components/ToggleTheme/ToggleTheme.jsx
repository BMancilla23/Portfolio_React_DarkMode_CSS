
import { useContext } from 'react';
import './ToggleTheme.css';
import PropTypes from 'prop-types';
import { ThemeContext } from '@/themes/ThemeContext';


const ToggleTheme = ({ }) => {

	const { isDarkMode, toggleTheme } = useContext(ThemeContext)

	return (
		<div className={`toggletheme ${isDarkMode ? 'dark' : ''}`}>
			<button className='toggletheme__button' onClick={toggleTheme}>
				{isDarkMode ? <i className='toggletheme__icon bx bx-moon'></i> :
				<i className='toggletheme__icon bx bx-sun'></i>}
			</button>
		</div>
	);
};

ToggleTheme.propTypes = {};

export default ToggleTheme;