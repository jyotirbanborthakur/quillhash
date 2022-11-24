import React from 'react'
import brandLogo from '../assets/footer/brand-logo.png'
import '../footer/Footer.css'
import youtube from '../assets/footer/yt.svg'
import discord from '../assets/footer/discord.svg'
import facebook from '../assets/footer/fb.svg'
import linkedin from '../assets/footer/linkedIn.svg'
import redit from '../assets/footer/redit.png'
import instagram from '../assets/footer/insta.svg'
import twitter from '../assets/footer/twitter.svg'
import ud from '../assets/footer/ud.png'
import telegram from '../assets/footer/telegram.png'


const mediaLinks=[
    
    {
        id:1,
        img:youtube
    },
    {
        id:2,
        img:discord
    },
    {
        id:3,
        img:facebook
    },
    {
        id:4,
        img:linkedin
    },
    {
        id:5,
        img:redit
    },
    {
        id:6,
        img:instagram
    },
    {
        id:7,
        img:twitter
    },
    {
        id:8,
        img:ud
    },
    {
        id:9,
        img:telegram
    },

]
const apiFooter = [
    {
        heading: "explore",
        explore: [
            {
                title: "Carrer",
            },
            {
                title: "Courses"
            },
            {
                title: "Blockchain Security CTF"
            },
            {
                title: "QuillAudits Partner Program"
            },
            {
                title: "Referral Program"
            }
        ]
    },
    {
        heading: "service",
        service: [{
            title: "Smart Contract Auditing"
        },
        {
            title: "Blockchain Pen Testing"
        },
        {
            title: "Due Diligence"
        }
        ]
    }
]
const Footer = () => {
    return (<div className='footer-main'>
        <div className='footer-body'>
            <div><span className='footer-list-heading'>Parent Company</span>
                <section className='footer-brand-details'>
                    <img src={brandLogo} style={{ width: "10vw", margin: "0.5vw 0 0.5vw 0" }}></img>
                    <span className='footer-brand-details-text'>Quillhash delivers enterprise grade blockchain technology to leading companies worldwide.</span>
                </section>
            </div>
            <div className='footer-list'><span className='footer-list-heading'>Explore</span>
                {
                    apiFooter.map((service) => {
                        return (
                            <section className='footer-links'>
                                {
                                    service.explore == null ? "" :
                                        service.explore.map((service) => { return (<span>{service.title}</span>) })
                                }
                            </section>

                        )
                    })
                }
            </div>
            <div className='footer-list'><span className='footer-list-heading'>Service</span>
                {
                    apiFooter.map((service) => {
                        return (

                            <section className='footer-links'>
                                {
                                    service.service == null ? "" :

                                        service.service.map((service) => { return (<span>{service.title}</span>) })
                                }
                            </section>
                        )
                    })
                }
            </div>
            <div><span className='footer-list-heading'>Contact Us</span>
                <span className='footer-address'>LG 006, DLF Grand Mall, Mehrauli<br></br>Gurgaon Road, Near Sikanderpur DLF<br></br>Phase1, Sector 28, Gurugram,<br></br>Haryana - 122002 <br></br><br></br>
                <span className='footer-contact-email'>contact@quillaudits.com</span>
                </span>
            </div>
        </div>
        <section className='media-link-section'>
            <span className='media-link-heading'>Join our Journey</span>
            <section className='media-links'>
                {
                    mediaLinks.map(({img},id)=>{
                        return (
                           <div key={id}> <img src={img}></img></div>
                        )
                    })
                }
            </section>
        </section>
        <section className='right-reserve-section'>
            <span>All Rights Reserved. © Copyright 2022. QuillHash Technologies Private Limited</span>
        </section>
        </div>
    )
}

export default Footer