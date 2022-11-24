import React from 'react';
import ReactDOM from 'react-dom/client';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import Faq from './faq/Faq';
import Footer from './footer/Footer';
import GetInTouch from './getInTouch/GetInTouch';
import HomePage from './homePage/HomePage';
import './index.css';
import Portfolio from './portfolio/Portfolio';
import reportWebVitals from './reportWebVitals';
import Services from './services/Services';
import Testimonials from './testimonials/Testimonials';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
    <Services />
    <Portfolio />
    <Testimonials/>
    <Faq/>
    <Blog/>
    <Contact/>
    <GetInTouch/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
