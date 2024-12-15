import React, { useEffect } from 'react';
import './App.css';

function Banner1() {
  useEffect(() => {
    const elements = document.querySelectorAll('.zoom-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in');
          } else {
            entry.target.classList.remove('zoom-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((element) => observer.observe(element));

  
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <div className="banner-container">
      <div className="logo-container">
        <img
          src="assets/images/Asset 1@2x-10.png" 
          alt="Logo"
          className="logo"
        />
      </div>
        <div className="banner-content zoom-on-scroll">
          <h1>ABOUT INNOVAlTE 2025</h1>
          <p>
            Revolutionizing the Future Through Artificial Intelligence
            Artificial Intelligence is transforming industries and reshaping the
            way we live and work. Our mission is to harness the power of AI to create innovative
            solutions that make a real difference.
          </p>
          <br />
          <p>Advanced Machine Learning Algorithms</p>
          <p>Natural Language Processing</p>
          <p>Computer Vision Technology</p>
          <p>Predictive Analytics</p>
        </div>

      
        <img
          src="assets/images/lovepik-artificial-intelligence-robot-technology-machinery-png-image_401924817_wh1200-removebg-preview.png"
          alt="AI Image"
          className="animated-image zoom-on-scroll"
        />
      </div>
    </>
  );
}

export default Banner1;
