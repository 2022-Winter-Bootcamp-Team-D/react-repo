import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import CustomerRegister from "./pages/CustomerRegister/CustomerRegister";
// import StoreRegister from "./pages/StoreRegister/StoreRegister";
import WaitingList from "./pages/WaitingList/WaitingList";
import Calender from './components/WaitingList/Calender';
import StoreInformation from "././components/WaitingList/StoreInformation";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/waitinglist" element={<WaitingList />} />
          <Route path="/customerregister" element={<CustomerRegister />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
