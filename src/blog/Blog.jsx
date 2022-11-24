import React from 'react'
import '../blog/Blog.css'
import blogVector from '../assets/blog.png'
const api = [
    {
        id: 1,
        img: blogVector,
        heading: "Web3 Security: Classification & Analysis of Web3 Hacks",
        time: "15 Mar, 2023",
        content: "At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version."
    },
    {
        id: 2,
        img: blogVector,
        heading: "Web3 Security: Classification & Analysis of Web3 Hacks",
        time: "15 Mar, 2023",
        content: "At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version."
    },
    {
        id: 3,
        img: blogVector,
        heading: "Web3 Security: Classification & Analysis of Web3 Hacks",
        time: "15 Mar, 2023",
        content: "At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version."
    }
]
const Blog = () => {
    return (
        <div className='blog-body'>
            <div className='blog-heading-section'>
                <span id="blog-section-heading">our blogs</span>
                <section className='blog-heading-clickables'>
                    <span id="blog-section-heading-text">Catch up on the news</span>
                    <button id="blog-link-button">read more</button>
                </section>
                <div className='blog-cards'>
                    {
                        api.map((service, id) => {
                            return (
                                <div className='card-content'>
                                    <img src={service.img}></img>
                                    <span id='blog-title'>{service.heading}</span>
                                    <span id='blog-time'>{service.time}</span>
                                    <span id="blog-content">{service.content}</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Blog