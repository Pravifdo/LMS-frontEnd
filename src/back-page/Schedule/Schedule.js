import React from 'react';
import './Schedule.css';
import { Routes, Route, Link } from 'react-router-dom';
import Computer_Graphics from './couser/Computer_Graphics';
import Human_computer from './couser/Human_computer';
import Software_Management from './couser/Software_Management';
import Computer_Architecture from './couser/Computer_Architecture';


const Schedule = () => {
  return (
    <div className="schedule-container">
      <h1 className="schedule-title">Course Schedule</h1>

      {/* Course Links */}
      <div className="course-list">
        <Link to="/Computer_Graphics" className="course-box computer-graphics">Computer Graphics</Link>
        <Link to="/Human_computer" className="course-box human-computer">Human Computer</Link>
        <Link to="/Software_Management" className="course-box software-management">Software Management</Link>
        <Link to="/Computer_Architecture" className="course-box computer-architecture">Computer Architecture</Link>
       
      </div>

      {/* Route Definitions */}
      <Routes>
        <Route path="/Computer_Graphics" element={<Computer_Graphics />} />
        <Route path="/Human_computer" element={<Human_computer />} />
        <Route path="/Software_Management" element={<Software_Management />} />
        <Route path="/Computer_Architecture" element={<Computer_Architecture />} />
        
      </Routes>
    </div>
  );
};

export default Schedule;
