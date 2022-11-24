import React from 'react'
import cube from '../assets/cube.png'
import '../homePage/Homepage.css'
import NavBar from '../navBar/NavBar'
const bottomSection=
[
    {
        id:1,
        values:"$12.8B",
        text1:"Amount Lost To",
        text2:"Defi Hacks on 2021"
    },
    {
        id:2,
        values:"600K",
        text1:"Lines of Codes",
        text2:"Secured by Quil;Audits"
    },
    {
        id:3,
        values:"$14.6B",
        text1:"Amount Protected",
        text2:"By QuillAudit"
    }
]
const HomePage = () => {

    return (
        <div className='main'>
            <NavBar />
            <img className='homePage-vector' src={cube} alt='N/A' />
            <div className='homePage-center-container'>
                <section className='homePage-center-element'>
                    <span className='text'>Emerging Web3 Ventures</span>
                    <span className='text'>Trust Our Smart Contract</span>
                    <span className='text'>Audit & Diligence Services</span>
                </section>
                <section className='homePage-signature-text'>
                    <span>QuillAudits Making web3 a safer place</span>
                </section>
                <section className='homePage-clickable-buttons'>
                    <button id='button-left'>Request Free Quote</button>
                    <button id="button-right">Explore services</button>
                </section>
                <div className='homePage-bottom-section'>
                    
                      {
                        bottomSection.map(({values,text1,text2},id)=>{
                            return(
                           <div key={id}>
                             <span className='homePage-bottom-elements'>
                            <span className='bottom-section-highlight-values'>{values}</span>
                            <section className='homePage-bottom-content'>
                                <span className='bottom-section-text'>{text1}</span>
                                <span className='bottom-section-text'>{text2}</span>
                            </section>
                        </span>
                           </div>
                            )
                        })
                      }                    
                </div>
            </div>

        </div>

    )
}

export default HomePage