import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt=''/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>campus</li>
        <li>Testimonials</li>
        <li>Contact us</li>
       
      </ul>
    </nav>
  )
}

export default Navbar






















// import React, { useEffect, useState } from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.png'
// import menu_icon from '../../assets/menu-icon.png'


// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   useEffect(()=>{
//     window.addEventListener('scroll',()=>{
//       window.scrollY > 50 ? setSticky(true) : setSticky(false);
//     })
//   },[])

//   const [mobileMenu, setMobileMenu] = useState
//   const toggleMenu = ()=>{

//   }

//   return (
//     <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
//       <img src={logo} alt="" className='logo' />
//       <ul>
//         <li><Link to='hero' smooth={true} offset={0} duration={500}
//          >Home</Link></li>
//         <li> <Link to='program' smooth={true} offset={0} duration={500}
//          >Program</Link></li>
//         <li> <Link to='about' smooth={true} offset={0} duration={500}
//          >About us</Link> </li>
//         <li> <Link to='campus' smooth={true} offset={0} duration={500}
//          >Campus</Link> </li>
//         <li> <Link to='testimonials' smooth={true} offset={0} duration={500}
//          > Testimonials </Link> </li>
//         <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact us</Link></li>
//       </ul>
//       <img src={menu_icon}  className="menu-icon" onLoad={toggleMenu} />
//     </nav>
//   )
// }

// export default Navbar

