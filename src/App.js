import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './MasterChillersLogo.png';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to August 27, 2025, Pakistan time (UTC+5)
    // Using ISO string format with Pakistan timezone
    const targetDate = new Date('2025-08-27T00:00:00+05:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailClick = () => {
    window.open('mailto:contact@masterchillers.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+923214849700', '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/SCM748g5SW1pCswv9', '_blank');
  };

  return (
    <div className="App">
      <div className="countdown-container">
        <div className="logo-section">
          <img src={logo} alt="Master Chillers Logo" className="logo" />
        </div>
        
        <h1 className="title">Master Chillers</h1>
        <p className="subtitle">Temperature Control Excellence</p>
        
        <div className="countdown-timer">
          <div className="time-unit">
            <div className="time-value">{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className="time-label">Days</div>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <div className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="time-label">Hours</div>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <div className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="time-label">Minutes</div>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <div className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="time-label">Seconds</div>
          </div>
        </div>
        
        <p className="description">
          Revolutionizing temperature control solutions. Get ready for the future of HVAC technology.
        </p>
        
        <div className="cta-section">
          <h2 className="cta-title">Want to Know More?</h2>
          <p className="cta-description">
            Be the first to experience our cutting-edge temperature control solutions.
          </p>
          <div className="contact-info">
            <div className="contact-item" onClick={handleEmailClick}>
              <span className="contact-icon">📧</span>
              <span className="contact-text">contact@masterchillers.com</span>
            </div>
            <div className="contact-item" onClick={handlePhoneClick}>
              <span className="contact-icon">📞</span>
              <span className="contact-text">+92 321 484 9700</span>
            </div>
            <div className="contact-item" onClick={handleLocationClick}>
              <span className="contact-icon">📍</span>
              <span className="contact-text">Bank Stop, Street # 3 Umar Park, Hakim Chock, Lahore – Kasur Rd, Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
