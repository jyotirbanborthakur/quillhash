import React, { useState } from 'react'
import logoNavBar from '../assets/brandLogo.svg'
import downArrow from '../assets/down-arrow.png'

import "../navBar/navBar.css"
const NavBar = () => {
    const [dropDownAudit, setdropDownAudit] = useState("none")
    const [dropDownResources, setdropDownResources] = useState("none")


    return (
        <div className='navBar-body'>
            <div className='navBar-content'>
                <img src={logoNavBar} alt='N/A'/>
                <section className='navBar-clickables'>
                    <span className='dropdown'onMouseOver={()=>{setdropDownAudit()}} onMouseLeave={()=>{setdropDownAudit("none")}}>Audit Services <img src={downArrow} alt="N/A"/>
                        <ul className="dropdown-content"  style={{display:dropDownAudit}}>
                            <li> 1</li>
                            <li> 2</li>
                            <li> 3</li>
                        </ul>
                    </span>
                    <span>Pricing</span>
                    <span>Blogs</span>
                    <span className='dropdown'onMouseOver={()=>{setdropDownResources()}} onMouseLeave={()=>{setdropDownResources("none")}}>Resources <img src={downArrow} alt="N/A"/>
                        <ul className="dropdown-content"  style={{display:dropDownResources}}>
                            <li> 1</li>
                            <li> 2</li>
                            <li> 3</li>
                        </ul>
                    </span>
                    <button className='navBar-buttons'>Portfolio</button>
                    <button className='navBar-buttons'>Request An Audit</button>
                </section>
            </div>
        </div>
    )
}

export default NavBar