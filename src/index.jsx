import React from 'react';
import './App.css';

function Index() {
  
  return (
    <div className="container">
       
    
      <video className="video-background" autoPlay loop muted>
        <source
          src="assets/images/48376248-47ef-465d-925d-64d2a1a5481c.mp4"
          type="video/mp4"
        />
      </video>

     
      <div className="text-overlay">
        <h1>InnovAlte 2025: Shaping the Future of AI</h1>
        <p>
          Turn your ideas into reality and lead the way in the AI revolution.
          <br />
          Ready to innovate and make a lasting impact in the world of Artificial Intelligence.
        </p>
      </div>
    </div>
  );
}

export default Index;
