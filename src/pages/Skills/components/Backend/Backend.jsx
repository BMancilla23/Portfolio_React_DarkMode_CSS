"use client";
import React from 'react';
import PropTypes from 'prop-types';

const Backend = ({}) => {
	return (
		<div className='skills__content'>
 			<h3 className="skills__title">Backend Developer</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Nodejs</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>

					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Nestjs</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>

					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Java</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>

					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Spring boot</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>

					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>MySql</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>


					<div className="skills_data">
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Firebase</h3>
							<div className="skills__level">Intermedio</div>
						</div>
					</div>
				</div>
			</div>
 		</div>
	);
};

Backend.propTypes = {};

export default Backend;