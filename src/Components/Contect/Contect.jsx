import React from 'react'
import './Contect.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white_arrow.png'




const Contect = () => {
    
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
        <p>Feel free to rech out throught contact form o rfind
            our contact information below. your feedbadk, question, and suggestions are impotant ot us as we strive to provide exceptioanl service to our university community.
        </p>
        <ul>
            <li> <img src={mail_icon} alt="" /> Contact@GreatStack.dev</li>
            <li> <img src={phone_icon} alt="" /> +1 123-456-7890</li>
            <li> <img src={location_icon} alt="" /> 77Massaachusetts Ave, Cambride <br/> MA 02139, Unitd States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="">
            <label>Yoru Name </label>
            <input type="text" name="name" placeholder='Enter your name' required />
            <label>Phone Number </label>
            <input type="text" name='phone' placeholder='Enter your mobile' required />
            <label> Write your message here </label>
            <textarea name="message" rows="6" placeholder='Enter your mesage' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{}</span>
      </div>
    </div>
  )
}

export default Contect
