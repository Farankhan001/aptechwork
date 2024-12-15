import React from "react";
import './App.css';

function Banner4() {
  return (
    <>
      <div className="prizes-container">
        <h2 className="prizes-title">Prizes & awards</h2>
        <p className="prizes-description">
          If you're wondering why you should apply, here are compelling reasons
          that make this Hackathon a must-attend event:
        </p>

        <div className="prizes-wrapper">
       
          <div className="prize-item">
            <h3 className="prize-place first-place">FIRST PLACE</h3>
            <p className="prize-amount first-amount">5,000 €</p>
          </div>

       
          <div className="prize-item">
            <h3 className="prize-place second-place">SECOND PLACE</h3>
            <p className="prize-amount second-amount">2,500 €</p>
          </div>

        
          <div className="prize-item">
            <h3 className="prize-place third-place">THIRD PLACE</h3>
            <p className="prize-amount third-amount">1,500 €</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner4;
