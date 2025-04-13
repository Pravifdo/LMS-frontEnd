import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainFront from './front/main-front/mainFront';
import Login from './front/Login/Login';
import Register from './front/Register/Register';
import Schedule from './back-page/Schedule/Schedule';

// Updated imports to follow PascalCase
import ComputerArchitecture from './back-page/Schedule/couser/Computer_Architecture';
import ComputerGraphics from './back-page/Schedule/couser/Computer_Graphics';
import HumanComputer from './back-page/Schedule/couser/Human_computer';
import SoftwareManagement from './back-page/Schedule/couser/Software_Management';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<MainFront />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          
          {/* Schedule Route */}
          <Route path="/Schedule" element={<Schedule />} />

          {/* Course Routes */}
          <Route path="/Computer_Graphics" element={<ComputerGraphics />} />
          <Route path="/Human_computer" element={<HumanComputer />} />
          <Route path="/Software_Management" element={<SoftwareManagement />} />
          <Route path="/Computer_Architecture" element={<ComputerArchitecture />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
