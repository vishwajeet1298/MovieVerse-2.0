import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import HomePage from './container/HomePage/HomePage';
import LandingPage from './container/LandingPage/LandingPage';
import SignIn from './container/SignIn/SignIn';
import Subscription from "./container/Subscription/Subscription";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isUserLoggedIn ? (
                <HomePage
                  isUserLoggedIn={isUserLoggedIn}
                  setIsUserLoggedIn={setIsUserLoggedIn}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              ) : (
                <LandingPage />
              )
            }
          />
          <Route path="/sign-in" element={<SignIn setIsUserLoggedIn={setIsUserLoggedIn} />} />
          <Route path="/plans" element={<Subscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;