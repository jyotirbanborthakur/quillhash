import React from 'react'
import '../getInTouch/GetInTouch.css'
import getIntouchVector from '../assets/getInTouch.png'
const GetInTouch = () => {
  return (
    <div className='getInTouch-body'>
        <div className='getInTouch-cards'>
            <div className='getInTouch-card'>
                <span id="getInTouch-card-heading">
                Join Hands With us to<br></br>secure Web3 Together
                </span>
                <span id="getInTouch-card-text">Help us in our journey to secure web3 by joining our team of talented<br></br> individuals spread across the globe.</span>
                <button id="getInTouch-apply-button">Apply now!</button>
            </div>
            <div>
                <img id="getIntouchVector" src={getIntouchVector} alt="N/A"></img>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch