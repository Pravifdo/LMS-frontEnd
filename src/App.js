import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainFront from './front/main-front/mainFront';
import Login from './front/Login/Login';
import Register from './front/Register/Register';
import Schedule from './back-page/Schedule/Schedule';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainFront />} />
          <Route path='/Login' element ={<Login/>}/>
          <Route path="/Schedule/*" element={<Schedule />} />
          <Route path='/Register' element ={<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
