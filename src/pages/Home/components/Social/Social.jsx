import React from 'react';
import PropTypes from 'prop-types';

const Social = ({}) => {
  return (
    <div className='home__social'>
      <a className="home__social-icon" href="#" target='_blank'>
        <i className='bx bxl-instagram'></i>
      </a>

      <a className="home__social-icon" href="#" target='_blank'>
        <i className='bx bxl-facebook'></i>
      </a>

      <a className="home__social-icon" href="#" target='_blank'>
        <i className='bx bxl-github'></i>
      </a>
    </div>
  );
};

Social.propTypes = {};

export default Social;
