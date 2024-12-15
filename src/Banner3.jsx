import React, { useEffect } from "react";
import "./App.css";

function Banner3() {
  useEffect(() => {
    const cards = document.querySelectorAll(".unique-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); 
          } else {
            entry.target.classList.remove("visible"); 
          }
        });
      },
      { threshold: 0.2 } 
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect(); 
  }, []);

  return (
    <div className="unique-banner-wrapper">
      <div className="unique-banner-background"></div>
      <h1 className="unique-banner-title">Why apply?</h1>
      <p className="unique-banner-description">
        If you're wondering why you should apply, here are compelling reasons
        that make this Hackathon a must-attend event:
      </p>
      <div className="unique-card-container">
        <div className="unique-card slide-left-animation">
          <div className="unique-icon-wrapper">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3>Validation of Ideas</h3>
          <p>
            If you're a team with an AI-driven concept, this is your time to
            shine! Presenting your idea to a diverse group will give you
            feedback and refine your business model.
          </p>
        </div>

        <div className="unique-card slide-right-animation">
          <div className="unique-icon-wrapper">
            <i className="fas fa-tools"></i>
          </div>
          <h3>Skill Enhancement</h3>
          <p>
            By working together on a time-constrained project, you will develop
            essential teamwork and communication skills while learning how to
            efficiently collaborate in a fast-paced environment.
          </p>
        </div>

        <div className="unique-card slide-left-animation">
          <div className="unique-icon-wrapper">
            <i className="fas fa-network-wired"></i>
          </div>
          <h3>Networking Opportunities</h3>
          <p>
            Participating in an AI Hackathon is a great way to expand your
            professional network and connect with like-minded individuals.
          </p>
        </div>

        <div className="unique-card slide-right-animation">
          <div className="unique-icon-wrapper">
            <i className="fas fa-users"></i>
          </div>
          <h3>Team Building</h3>
          <p>
            Hackathons provide an immersive learning experience where you can
            earn new coding techniques and broaden your knowledge base while
            working together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
