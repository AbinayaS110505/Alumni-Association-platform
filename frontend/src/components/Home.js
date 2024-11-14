import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import "./User/styles/Home.css";

function Home() {
  const navigate = useNavigate();  // Initialize navigate function

  const handleGetStarted = () => {
    navigate('/main');  // Redirect to the main page (or any route you desire)
  };

  return (
    <div className='homeContainer'>
      <Navbar />
      <div className="home-content">
        <h1>Welcome to the Alumni Association</h1>
        <p>Stay connected with your fellow alumni, share experiences, and grow your network.</p>
        <button className="get-started" onClick={handleGetStarted}>Get Started</button> {/* Attach the click event */}
      </div>
    </div>
  );
}

export default Home;
