import React, { useEffect, useState } from "react";
import "./Schedule.css";
import { Link, useNavigate } from "react-router-dom";

const Schedule = () => {
  const [studentName,/* setStudentName*/] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");
    const name = localStorage.getItem("studentName");

    /*if (!isLoggedIn || !name) {
      navigate("/login");
    } else {
      setStudentName(name);
    }*/
  }, [navigate]);

  return (
    <div >

 
    <div className="schedule-container">
      <h2 className="welcome-text">Hi 👋 {studentName}! Welcome to your LMS.</h2>
      <h1 className="schedule-title">Course Schedule</h1>

      {/* Course Links */}
      <div className="course-list">
        <Link to="/Computer_Graphics" className="course-box computer-graphics">
          <div className="course-image">
            Computer Graphics<br />
            CO2214 Practical Work on CO2224 (2021/2022)
          </div>
        </Link>

        <Link to="/Human_computer" className="course-box human-computer">
          Human Computer
        </Link>

        <Link to="/Software_Management" className="course-box software-management">
          Software Management
        </Link>

        <Link to="/Computer_Architecture" className="course-box computer-architecture">
          Computer Architecture
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Schedule;
