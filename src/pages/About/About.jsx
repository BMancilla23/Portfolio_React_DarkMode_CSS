"use client";
import React from 'react';
import './About.css';
import PropTypes from 'prop-types';
import AboutImg from '@/assets/about.jpg'
import { Info } from './components';
import CV from '@/assets/John-Cv.pdf'

const About = ({}) => {
	return (
		<section className='about section'>
 			<h2 className='section__title'>About Me</h2>
			<span className='section__subtitle'>My Introduction</span>

			<div className="about__container container grid">
				<img src={AboutImg} alt="" className='about__img' />
				<div className="about__data">
					<Info/>
					<p className='about__description'>
					Profesional Técnico de desarrollo de software autodidacta con conocimiento en desarrollo web, utilizando lenguajes como javascript, java y frameworks como Reactjs, Angular, Spring bot y Nestjs. 
					</p>
					<a className='button button--flex' href={CV} download="" >Descargar CV <i className='bx bxs-download'></i></a>
				</div>
			</div>
 		</section>
	);
};

About.propTypes = {};

export default About;