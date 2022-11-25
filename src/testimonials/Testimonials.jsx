import React from 'react'
import '../testimonials/Testimonials.css'
import mention1 from '../assets/mention1 (1).png'
import mention2 from '../assets/mention1 (2).png'
import mention3 from '../assets/mention1 (3).png'
import mention4 from '../assets/mention1 (4).png'
import mention5 from '../assets/mention1 (5).png'
const reviews = [
    {
        id: 1,
        img: mention3,
        comment: "Very professional and timed delivery. Also very prompt in responses and quires",
        name: "Vishu Korde",
        position: "CEO, StackOS"
    },
    {
        id: 2,
        img: mention3,
        comment: "Very professional and timed delivery. Also very prompt in responses and quires",
        name: "Vishu Korde",
        position: "CEO, StackOS"
    },
    {
        id: 3,
        img: mention3,
        comment: "Very professional and timed delivery. Also very prompt in responses and quires",
        name: "Vishu Korde",
        position: "CEO, StackOS"
    }

]
const mentions = [
    {
        id: 1,
        img: mention1
    },
    {
        id: 2,
        img: mention2
    },
    {
        id: 3,
        img: mention3
    },
    {
        id: 4,
        img: mention4
    },
    {
        id: 5,
        img: mention5
    },
    {
        id: 6,
        img: mention5
    },
]
const Testimonials = () => {
    return (
        <div className='testimonial-main-body'>
            <div className='upper-container'>
                <div className='upper-container-left'>
                    <span className='upper-left-container-text'>why are we here</span>
                    <span className='upper-left-container-text-content'>What is the Need of<br></br> Smart Contract Audit?</span>
                    <button id="upper-left-container-button">talk to an expert</button>
                </div>
                <div className='upper-container-right'>
                    <div class="card" id="card1"><span class="title">Smart Contract Audits Build Social Authority</span></div>
                    <div class="card" id="card2"><span class="title">Only 52.7% of the Exploited Web3 Projects were Audited.</span></div>
                    <div class="card" id="card3"><span class="title">47.3% of the Web3 Hacks in First Half of 2022 were due to Smart Contract Vulnerabilities.</span></div>
                    <div class="card" id="card4"><span class="title">Helps in Earning Users/Investors Trust for the Product</span></div>
                    <div class="card" id="card5"><span class="title">Helps in Earning Users/Investors Trust for the Product</span></div>
                </div>
            </div>
            <span className='upper-left-container-text'>Mentions</span>
            <span className='upper-left-container-text-content'>As Featured In</span>
            <div className='testimonial-mention-cards'>
                {
                    mentions.map((service, index) => {
                        return (<span className='cards'>

                            <img id="testimonial-image-vectors" src={service.img} alt="N/A" />
                            <span id="testimonial-cards-link">read more</span>

                        </span>)
                    })
                }
            </div>
            <div className='client-testimonial-section'>
                <section className='section-heading'>
                    <span id='testimonial-review-section-heading'>testimonials</span>
                    <section className='testimonial-link'>
                        <span id="testimonial-link-heading">what our clients are saying</span>
                        <button id="review-link-button">read more</button>
                    </section>
                </section>
            </div>
            <div className='review-section'>
                {
                    reviews.map((service, id) => {
                        return (
                            <div className='review-content-cards'>
                                <img id="review-brand-img" src={service.img} alt="N/A"></img>
                                <span id="reviewer-text">{service.comment}</span>
                                <span id="reviewer-name">{service.name}</span>
                                <span id="reviewer-position">{service.position}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Testimonials