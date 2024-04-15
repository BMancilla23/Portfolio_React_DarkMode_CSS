"use client";
import React from 'react';
import './Qualification.css';
import PropTypes from 'prop-types';

const Qualification = ({}) => {
	return (
		<section className='qualification section'>
 			<h2 className='section__title'>Qualification</h2>
			<span className='section__subtitle'>My personal journey </span>
			<div className="qualification__container contain">
				<div className="qualification__tabs">
					<div className="qualification__button qualification__active button--flex">
						<i className='bx bxs-graduation qualification__icon'></i> Education
					</div>
				
				</div>
				<div className="qualification__sections">
					<div className="qualification__content qualification__content-active">
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Desarrollador de Software</h3>
								<span className="qualification__subtitle">Certus - Instituto</span>
								<div className="qualification__calendar">
									<i className='bx bx-calendar'></i>2021 - 2024
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Desarrollo Frontend</h3>
								<span className="qualification__subtitle">Edteam - Plataforma digital</span>
								<div className="qualification__calendar">
									<i className='bx bx-calendar'></i>2021 - 2022
								</div>
							</div>
							
						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Desarrollo Backend</h3>
								<span className="qualification__subtitle">Platzi - Plataforma digital</span>
								<div className="qualification__calendar">
									<i className='bx bx-calendar'></i>2022 - 2023
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Desarrollo Web</h3>
								<span className="qualification__subtitle">Udemy - Plataforma digital</span>
								<div className="qualification__calendar">
									<i className='bx bx-calendar'></i>2023 - Presente
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
 		</section>
	);
};

Qualification.propTypes = {};

export default Qualification;