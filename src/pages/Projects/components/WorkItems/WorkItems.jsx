"use client";
import React from 'react';
import PropTypes from 'prop-types';

const WorkItems = ({item}) => {

	const {image, title} = item;

	return (
		<div className='projects__card' key={item.id}>
 			<div className="projects__container-img">
			 <img className='projects__img' src={image} alt="" />
			</div>
			<h3 className="projects__title">{title}</h3>
			<a href="#" className='projects__button'>
				Demo <i className='bx bx-right-arrow-alt projects__button-icon'></i>
			</a>
 		</div>
	);
};

WorkItems.propTypes = {};

export default WorkItems;