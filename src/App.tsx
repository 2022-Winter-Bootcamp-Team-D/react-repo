import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerRegister from './pages/CustomerRegister/CustomerRegister';
import Login from './pages/CustomerRegister/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";        // 라우터를 사용하기 위한 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<CustomerRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
