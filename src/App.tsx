import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// import StoreRegister from "./pages/StoreRegister/StoreRegister";

import Login from './pages/Login/Login';
import StoreRegister from './pages/StoreRegister/StoreRegister';
import WaitingList from "./pages/WaitingList/WaitingList";
import CustomerRegister from './pages/CustomerRegister/CustomerRegister';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/storeRegister" element={<StoreRegister />} />
          <Route path="/waitingList" element={<WaitingList />} />
          <Route path="/customerRegister" element={<CustomerRegister />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
