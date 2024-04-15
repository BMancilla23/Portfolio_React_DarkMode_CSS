"use client";
import React from 'react';
import PropTypes from 'prop-types';

const Frontend = ({}) => {
	return (
		<div className='skills__content'>
 			<h3 className="skills__title">Frontend developer</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>HTML</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>

					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>CSS</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>

					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Javascript</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>

					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Tailwind</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>

					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Reactjs</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>

					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Angular</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>

				</div>
			
			</div>
 		</div>
	);
};

Frontend.propTypes = {};

export default Frontend;