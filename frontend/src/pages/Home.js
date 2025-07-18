import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import interviewImg from "./interview.jpg";

const Home = () => {
  return (
    <div className="home-wrapper">
      <header className="navbar">
        <h1>Level Up Your Interview Game!</h1>
        <div className="auth-buttons">
          <Link to="/login" className="nav-btn">Login</Link>
          <Link to="/register" className="nav-btn">Register</Link>
        </div>
      </header>

      <div className="home-hero">
        <div className="hero-text">
          <h2>Say Goodbye to Boring Prep.</h2>
          <p>Let me make it easy for you - Simplify your preparation with curated flashcards across React, Node, Python, MongoDB, and more. #all in one place</p>
          
        </div>
        <div className="hero-img">
          <img src={interviewImg} alt="Interview Prep" />
        </div>
      </div>
    </div>
  );
};

export default Home;
