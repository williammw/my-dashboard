import React from 'react'
import './AboutMe.css'


function AboutMe() {
  return (
    <div className="aboutme">
      <div></div>
      <div className="aboutme__center">
        <div className="aboutme__row">
          <span className="aboutme__title">About me</span>
          <div className="aboutme_p">software Engineer and researcher, 
          focusing on techniques from seeking alpha 
          from machine learning to solve difficult 
          decision problems, enjoy front-end design with latest technology
          such as reactjs, nodejs.
          </div>
        </div>
        <div className="aboutme__row">
          <div className="aboutme__avatar">
          <img 
            className="aboutme_bio" 
            src="./img/propic.JPG"/>  
          </div>
          
          </div>
      </div>
      <div></div>
    </div>
  )
}

export default AboutMe
