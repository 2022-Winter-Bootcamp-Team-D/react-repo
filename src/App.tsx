import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// import StoreRegister from "./pages/StoreRegister/StoreRegister";
import WaitingList from "./pages/WaitingList/WaitingList";
import Calender from './components/WaitingList/Calender';
import StoreInformation from "././components/WaitingList/StoreInformation";
import Login from './pages/CustomerRegister/Login';
import CustomerRegister from './pages/CustomerRegister/CustomerRegister';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/storeRegister" element={<CustomerRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
