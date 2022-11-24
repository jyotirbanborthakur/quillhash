import React from 'react'
import '../contact/Contact.css'
import contactVector from '../assets/contactVector.png'
import logo from '../assets/contact.png'
const Contact = () => {
  return (
    <div className='contact-body'>
        <div className='contact-container-left'>
            <img id="contact-vector"src={logo}></img>
            <span>DeFi & NFT Hacks, CTFs, and Blockchain Security Insights Straight to your Inbox.</span>
            <span>Explore our weekly newsletter: HashingBits. Stay updated on everything we’re publishing. Stand a step ahead.</span>
            <form>
                <input id="contact-input"placeholder='youremail@gmail.com'></input>
            </form>
            <section className='success-notice'>
                
            <span id="tick">✅</span>
            <span>Your email has been successfully registered, headlines will be sent to you soon.</span>
            </section>
        </div>
        <div className='contact-container-right'>
            <img src={contactVector}></img>
        </div>
    </div>
  )
}

export default Contact