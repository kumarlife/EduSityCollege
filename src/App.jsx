import React from 'react'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contect from './Components/Contect/Contect'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'


const App = () => {
  return (
    <div>
     <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle ='Our PROGRAM' title='What We offer'/>
        <Programs/>
        <About/>
        <Title subTitle ='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle ='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle ='Contact Us' title='Get in Touch'/>
        <Contect/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

