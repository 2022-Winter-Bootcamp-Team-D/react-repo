import React from 'react';
import './App.css';
<<<<<<< HEAD
=======
import CustomerRegister from './pages/CustomerRegister/CustomerRegister';
import Login from './pages/CustomerRegister/Login';
>>>>>>> develop
import {
  BrowserRouter as Router,
  Routes,
  Route,
<<<<<<< HEAD
} from "react-router-dom";

// import CustomerRegister from "./pages/CustomerRegister/CustomeRegister";
// import StoreRegister from "./pages/StoreRegister/StoreRegister";
import WaitingList from "./pages/WaitingList/WaitingList";
import Calender from './components/WaitingList/Calender';
import StoreInformation from "././components/WaitingList/StoreInformation";
=======
} from "react-router-dom";        // 라우터를 사용하기 위한 
>>>>>>> develop

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<WaitingList />} />
=======
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<CustomerRegister />} />
>>>>>>> develop
        </Routes>
      </div>
    </Router>
  );
}

export default App;
