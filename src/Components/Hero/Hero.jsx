import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure beter eductaion for a better worls</h1>
        <p>Our Cutting-edge curriculm is designed to empower students
            with the knowledge, skills, and expersinces need to excel
            in the dynamic field of eductions </p>
           <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
      </div>
    </div>
  )
  
}

export default Hero
