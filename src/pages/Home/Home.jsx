"use client";
import React from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import { Data, Social } from './components';


const Home = ({ }) => {

	return (
		<section className="home section">
			<div className="home__container container grid">
				<div className="home__content grid">
					<Social/>
					<div className="home__img"></div>
					<Data />

				</div>
			</div>
		</section>
	);
};

Home.propTypes = {};

export default Home;