import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/hero_setup.avif';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>HAY, I'M RAGHUBAL</h1>
        <p>
        I am a software developer specializing in creating and managing
        Web, Mobile applications, E-commerce and ERP solutions. 
        I deliver user-friendly experiences and innovative software that drive business success.
        </p>
      </div>
      <div className='hero-image'>
        <img src={dark_arrow} alt="Hero Graphic" />
      </div>
    </div>
  );
};

export default Hero;
