import React from "react";
import HomePageContent from "../../components/HomePageContent/HomePageContent";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";

function HomePage({ isUserLoggedIn, setIsUserLoggedIn, searchQuery, setSearchQuery }) {
  return (
    <div>
      <Navbar
        showSignInButton={false}
        showInputField={true}
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        setSearchQuery={setSearchQuery}
      />
      <HomePageContent searchQuery={searchQuery} />
    </div>
  );
}

export default HomePage;