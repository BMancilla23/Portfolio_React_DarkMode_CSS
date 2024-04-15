import React from 'react';
import PropTypes from 'prop-types';

const Info = ({}) => {
    return (
        <div className='about__info grid'>
            <div className="about__box">
                <i className='bx bx-briefcase about__icon'></i>
                <h3 className="about__title">Antecedentes profesionales</h3>
                <span className='about__subtitle'>Estudio técnico</span>
            </div>

            <div className="about__box">
                <i className='bx bx-rocket about__icon'></i>
                <h3 className="about__title">Proyectos</h3>
                <span className="about__subtitle">10 Completados</span>
            </div>
            <div className="about__box">
                <i className='bx bx-task about__icon'></i>
                <h3 className="about__title">Habilidades</h3>
                <span className="about__subtitle">Versátil y adaptable</span>
            </div>
        </div>
    );
};

Info.propTypes = {};

export default Info;
