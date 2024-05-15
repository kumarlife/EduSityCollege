import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play_icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorro's Leaders Today</h2>
        <p>Embark on a transformative educational jounery with our
        university's ocmprehensive eduction programs. Our Cutting-ede 
        curriculm is designed toempwerr students with the knowlegge, 
        skills, and expersinces needed to ecel in the dynamic field of 
        eucation
        </p>
        <p>With a focus on innovation, hands-on learning, and
          perasonalized mentorship, our proograms prepare aspiring educational 
          to make a meaningful impact in classrooms, schools, and communities. </p>
          <p>Whether you aspire to become a teacher, administrattor,
            counselor, or educational leader, our diverse range of programsoffers the 
            perfet pathway to achieve your goals and unlock your
            full potential in shaping the future of education
          </p>
      </div>
    </div>


  )
}

export default About
