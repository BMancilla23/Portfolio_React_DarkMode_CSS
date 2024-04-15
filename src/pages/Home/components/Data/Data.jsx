import React from 'react'
import { Link } from 'react-router-dom'

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Bryan G. Mancilla <i className='home__code bx bx-code-alt'></i>
        </h1>
        <h3 className='home__subtitle'>Programador Web</h3>
        <p className='home__description'>
            !Saludos! Soy Bryan, me especializo en el desarrollo web full stack conociendo tecnologías tanto de frontend como de backend 
        </p>
        <button className='button button--flex'><Link className='home__button-link' to='/contact'>Enviar Mensaje <i className='home__button-icon bx bx-send'></i></Link></button>
    </div>
  )
}

export default Data;