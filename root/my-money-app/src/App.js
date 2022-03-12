import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar";
import HomeScreen from "./components/home-screen.js";
import EditUserScreen from "./components/edit-user-screen.js";
import CreateUserScreen from "./components/create-user-screen.js";
import EditPortfolioScreen from "./components/edit-portfolio-screen.js";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar></Navbar>
        <br></br>
        <Routes>
          <Route exact path="/" element={<HomeScreen></HomeScreen>} />
          <Route path="/edit_user" element={<EditUserScreen></EditUserScreen>} />
          <Route path="/create_user" element={<CreateUserScreen></CreateUserScreen>} />
          <Route path="/edit_portfolio" element={<EditPortfolioScreen></EditPortfolioScreen>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
