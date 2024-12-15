import React, { useEffect } from 'react';
import './App.css';

function CustomBanner() {
  useEffect(() => {
    const items = document.querySelectorAll('.custom-timeline-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');  
        }
      });
    }, { threshold: 1 });  
    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-banner-container">
        <div className="custom-banner-content">
          <h1>InnovAlte 2025</h1>
          <p className="custom-subtitle">Challenge your AI Potential</p>
          <button class="button">Register Your Team</button>
          <div className="custom-timeline">
            <div className="custom-timeline-item">
              <span className="custom-competition-name">Orientation, Announcement and Team Registration</span>
              <span className="custom-date">15th December 2024</span>
            </div>
            <div className="custom-timeline-item">
              <span className="custom-competition-name">Idea Submission</span>
              <span className="custom-date">11th January 2025</span>
            </div>
            <div className="custom-timeline-item">
              <span className="custom-competition-name">Pitch Day</span>
              <span className="custom-date">18th January 2025</span>
            </div>
            <div className="custom-timeline-item">
              <span className="custom-competition-name">Final Project List</span>
              <span className="custom-date">27th January 2025</span>
            </div>
            <div className="custom-timeline-item">
              <span className="custom-competition-name">Project Plan Submission</span>
              <span className="custom-date">13th February 2025</span>
            </div>
            <div className="custom-timeline-item">
              <span className="custom-competition-name">Prototype Submission</span>
              <span className="custom-date">4th March 2025</span>
            </div>
            <div className="custom-timeline-item">
              <span className="custom-competition-name">Pre-Submission Presentation</span>
              <span className="custom-date">10th April 2025</span>
            </div>
            <div className="custom-timeline-item">
              <span className="custom-competition-name">Final Submission</span>
              <span className="custom-date">25th April 2025</span>
            </div>
            <div className="custom-timeline-item">
              <span className="custom-competition-name">Presentation</span>
              <span className="custom-date">10th May 2025</span>
            </div>
            <div className="custom-timeline-item">
              <span className="custom-competition-name">Result Announcement</span>
              <span className="custom-date">17th May 2025</span>
            </div>
          </div>
         

        </div>
        
      </div>
 

    </>
  );
}

export default CustomBanner;
