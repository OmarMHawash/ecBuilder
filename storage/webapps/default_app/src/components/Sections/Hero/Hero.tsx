import React from 'react'
import { metaData, heroData } from '../../../utils/newProject'
import './Hero.scss'
const Hero = (): JSX.Element => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-section__content__title">
          Welcome to Our <span className="text-p">{metaData.title}</span>
        </h1>
        <h4 className="hero-section-descr">{heroData.description}</h4>
      </div>
      <div className="hero-image">
        <div className="image-wrapper">
          <img src={heroData.img} alt="hero-img" />
        </div>
      </div>
    </div>
  )
}

export default Hero
