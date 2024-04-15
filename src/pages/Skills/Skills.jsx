"use client";
import React from 'react';
import './Skills.css';
import PropTypes from 'prop-types';
import {Frontend, Backend} from './components'

const Skills = ({}) => {
	return (
		<section className='skills section'>
 			<h2 className='section__title'>Skills</h2>
			<span className='section__subtitle'>My technical level</span>

			<div className="skills__container container grid">
				<Frontend/>
				<Backend/>
			</div>
 		</section>
	);
};

Skills.propTypes = {};

export default Skills;