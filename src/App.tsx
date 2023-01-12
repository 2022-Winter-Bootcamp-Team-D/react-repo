import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import StoreRegister from './pages/StoreRegister/StoreRegister';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StoreRegister/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
