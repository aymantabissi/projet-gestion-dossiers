import React from 'react';  
import {  Router, Route, Routes , useLocation} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { isAuthenticated } from './utils/auth';

function App() {
   const location = useLocation();
     const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div>
      {!hideNavbar && isAuthenticated() && <Navbar />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Add more routes here as needed */}
        </Routes>

    </div>
  );
}

export default App;
