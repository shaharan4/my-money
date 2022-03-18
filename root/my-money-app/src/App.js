import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

import Navbar from "./components/Navbar";
import HomeScreen from "./components/HomeScreen";
import EditUserScreen from "./components/EditUserScreen";
import CreateUserScreen from "./components/CreateUserScreen";
import PortfolioScreen from "./components/PortfolioScreen";

function App() {
  return (
    <Router>
      <div className="app_container">
        <Navbar></Navbar>
        <br></br>
        <Routes>
          <Route exact path="/" element={<HomeScreen></HomeScreen>} />
          <Route path="/edit_user" element={<EditUserScreen></EditUserScreen>} />
          <Route path="/create_user" element={<CreateUserScreen></CreateUserScreen>} />
          <Route path="/portfolio" element={<PortfolioScreen></PortfolioScreen>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
