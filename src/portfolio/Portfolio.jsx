import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import bookVector from '../assets/portfolio-book.png'
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import "../portfolio/Portfolio.css"
const api = [
    {
        id: 1,
        vector: bookVector,
        name: 'Stack OS Audit Report',
    },
    {
        id: 2,
        vector: bookVector,
        name: 'Stack OS Audit Report',
    },
    {
        id: 3,
        vector: bookVector,
        name: 'Stack OS Audit Report',
    },
    {
        id: 4,
        vector: bookVector,
        name: 'Stack OS Audit Report',
    },
    {
        id: 5,
        vector: bookVector,
        name: 'Stack OS Audit Report',
    },
    {
        id: 6,
        vector: bookVector,
        name: 'Stack OS Audit Report',
    },
]
const Portfolio = () => {
    return (
        <div className='portfolio-main-body'>
            <span id="portfolio-section-text">portfolio</span>
            <span id="portfolio-heading-text">latest work</span>
            <section>
                <button className='portfolio-button'>Ethereum</button>
                <button className='portfolio-button'>Binance SC</button>
                <button className='portfolio-button'>NFT</button>
                <button className='portfolio-button'>Solana</button>
            </section>
            <div className='swipe'>
                <Swiper
                    slidesPerView={3}
                    centeredSlides={false}
                    slidesPerGroupSkip={0}
                    grabCursor={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    style={{ margin: "3vw", padding: "3vw 6vw 3vw 6vw" }}>
                    {
                        api.map((service) => 
                        {
                            return (
                                <SwiperSlide className='swiper-slides'>
                                    <img className='swiper-vector' alt="N/A"src={service.vector}></img>
                                    <span>{service.name}</span>
                                    <section>
                                        <button className='portfolio-viewing-button'>View</button>
                                        <button className='portfolio-viewing-button'>Download</button>
                                    </section>
                                </SwiperSlide>
                            )
                        }
                        )
                    }
                </Swiper>
            </div>
            <button className='portfolio-lower-section-button'>button</button>

        </div>
    )
}

export default Portfolio