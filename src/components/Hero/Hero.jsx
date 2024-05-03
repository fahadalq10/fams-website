import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>
            Flexible AI-enabled Mechatronic Systems Lab
            </h1>
            <p>
            Soft and bio-inspired mechatronic systems could effectively deal with uncertain or constrained environments while maximizing the users’ safety. For example, the development of soft robotic structures faces a number of scientific challenges, including material selection, fabrication techniques, and kinematic simulation. There are currently big knowledge gaps in the fabrication, control, and application of versatile soft robotic platforms.
            </p>
            <button className='btn'>Explore more <img src={arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
