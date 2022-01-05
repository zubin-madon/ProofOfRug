import React from 'react';
import './App.css';
import SolCard from './pages/solcard';
import EthCard from './pages/ethcard';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <div className='App'>
    <Router>
    <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" exact element={<Home />} />
        <Route path="/ETH" exact element={<EthCard />} />
        <Route path="/SOL" exact element={<SolCard />} />
        
      </Routes>
      <div className='footer'>
      <Footer />
      </div>
      
    </Router> 
    </div>
    
   
  )
}

export default App;
