import React from "react";
import "./MainFront.css";
import logo from "./logo.webp"; // Make sure the logo image is in the correct directory
import Carousel from "react-bootstrap/Carousel";
import image1 from "./photo1.webp"; // Import your images
import image2 from "./image3.png"; // Import your images
import image3 from "./image2.jpg"; // Import your images
import { Link } from "react-router-dom";

function MainFront() {
  return (
    <div className="Front">
      <div className="Front-header">
        <div className="header-content">
          <img src={logo} alt="Logo" className="Logo" />
          <div className="name">FernandoX</div>
        </div>
        <h1>Welcome to the Front!</h1>

        <div className="page">
          LMS provides free access to high-quality Computer Science courses,
          helping students learn and grow in various fields such as programming,
          artificial intelligence, data science, and cybersecurity. LMS users
          can explore, enroll, and track their progress in real-time across
          multiple courses, gaining hands-on experience through interactive
          lessons and coding challenges. Analytical insights from LMS help
          improve student engagement, enhance the learning experience, and
          empower students with knowledge that boosts their career prospects.
        </div>
        <div className="logi-button">
          <Link to="/Login" className="login">
            Login
          </Link>

          <Link to={"/register"} className="register">
            Register
          </Link>
        </div>
      </div>

      {/* Include the Carousel component here */}
      <IndividualIntervalsExample />
    </div>
  );
}

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainFront;
