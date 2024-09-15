import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import backgroundVideo from "../../assets/bg-video.mp4"; // Adjust the path as needed

const Welcome = () => {
  return (
    <div className="welcome-container">
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>
          CSE Department Student <br></br> CGPA Leaderboard
        </h1>
        <div className="buttons">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>
      </div>
      <div className="discription">
        <p>
          Welcome to the official CGPA leaderboard for the CSE Department. Here,
          you can track the academic performance of students based on their
          CGPA. Only CSE department students are eligible to access this
          leaderboard.
        </p>
      </div>
      <footer>
        <p>Developed by <strong><a href="https://www.linkedin.com/in/ar-abdulrahman" target="_blank" rel="noreferrer">Abdul Rahman A.</a></strong> | CSE Department</p>
      </footer>
    </div>
  );
};

export default Welcome;
