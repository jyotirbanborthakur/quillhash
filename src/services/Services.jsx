import React from 'react'
import '../services/Services.css'
import cube from "../assets/cube.png"
import servicesImage from '../assets/services-section-img.png'
import ether from '../assets/ether.webp'
const names = [
    {
        id: 1,
        name: "pathfund",
    },
    {
        id: 2,
        name: "pathfund"
    },
    {
        id: 3,
        name: "pathfund"
    },
    {
        id: 4,
        name: "pathfund"
    },
    {
        id: 5,
        name: "pathfund"
    },
    {
        id: 6,
        name: "pathfund"
    }
]
const services = [
    {
        id: 1,
        type: "service",
        heading: "Smart Contract Auditing",
        text:"Our Audit Process for smart contract is based on the comprehensive approach we follow to investigate the code for security flaws and potential vulnerabilities.",
        button:"Explore",
       img:cube,
       demo:[
       {
        image:ether,
        text:"Ethereum"
       },
       {
        image:ether,
        text:"Polygon"
       },
       {
        image:ether,
        text:"BSC"
       },
       {
        image:ether,
        text:"Solana"
       },
       {
        image:ether,
        text:"EOS"
       }]
    },
    {
        id: 2,
        type: "service",
        heading: "Blockchain Penetration Testing",
        text:'QuillAudits proven strategy to tackle vulnerabilities specific to blockchain technology comes with a mix-blend of conventional pentesting approach and dynamic blockchain analysis.',
        button:"Learn More",
        img:cube
    },
    {
        id: 3,
        type: "service",
        heading: "Due Diligence",
        text:'QuillAudits acknowledges the significant threats involved in smart contracts, which can lead to many critical possibilities.',
        button:"Explore",
        img:cube,
        demo:[
            {
                image:ether,
                text:"DeFi Due Diligence"
               },
               {
                image:ether,
                text:"NFT Due Diligence"
               },
               {
                image:ether,
                text:"Rug Pull Due Diligence"
               },
        ]     
    }   
]

const Services = () => {
    return (
        <div className='services-main-body'>
            <section className='services-top-bar'>
                <span id="services-top-bar-text1">clients</span>
                <span id="services-top-bar-text2">partners</span>
                <section id="services-top-bar-brandings">
                    {
                        names.map(({ name }, id) => {
                            return (
                                <span key={id}>{name}</span>
                            )
                        })
                    }
                </section>
            </section>
            {
                services.map((service, index) => {

                    return (<div style={{margin:"2vw 0 0 0"}}>
                       
                        {index % 2 === 0 ?
                            <div style={{margin:"2vw 0 12vw 0"}}>
                                 <img src={service.img}style={{}} alt="N/A" className="services-img"/><div key={service.id} style={{ float: "right",display:"flex",flexDirection:"column",width:"30vw"}}>
                                <span className='services-id-text'>{service.type}</span>
                                <span className='services-heading-text'>{service.heading}</span>
                                <span className='services-text-body'>{service.text}</span>
                                {service.demo==null?"":
                                    service.demo.map((service,id)=>{
                                        return (
                                            <section key={id}><img className='services-demo-vector' src={service.image}></img><span>{service.text}</span> </section>
                                        )
                                    })
                                }
                                <button className='services-buttons'>{service.button}</button>
                                
                            </div>
                                <br>
                                </br>
                            </div>
                            :
                            <div style={{margin:"2vw 0 12vw 0"}}>
                                 <img  className="services-img"src={service.img} alt="N/A"style={{float:"right"}}/>
                                <div key={service.id} style={{display:"flex",flexDirection:"column",width:"30vw"}}>
                                <span className='services-id-text'>{service.type}</span>
                                <span className='services-heading-text'>{service.heading}</span>
                                <span className='services-text-body'>{service.text}</span>
                                {service.demo==null?"":
                                    service.demo.map((service,id)=>{
                                        return (
                                            <section key={id}><img className='services-demo-vector' src={service.image}></img><span>{service.text}</span> </section>
                                        )
                                    })
                                }
                                <button className='services-buttons'>{service.button}</button>
                               
                                </div>
                                <br>
                                </br>
                            </div>
                        }  
                    </div>
                    )
                })
            }
            <div className='service-lower-section'>
                <section className='services-lower-section-content'>
                    <span className='services-lower-section-subtext'>the security</span>
                    <span className='services-lower-section-heading'>how we secure our web3 project</span>
                    <img id="services-lower-section-img" src={servicesImage} alt="N/A"></img>
                </section>
            </div>
        </div>
    )
}

export default Services