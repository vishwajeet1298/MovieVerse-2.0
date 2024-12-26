import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Button from "../../global/Button/Button";
import navbar from "../../images/navbar/navbarmovie.png";
import "./Navbar.css";



function Navbar({ showSignInButton, showInputField, isUserLoggedIn, setIsUserLoggedIn,setSearchQuery }) {
    //console.log(isUserLoggedIn)
    const navigate = useNavigate();

    function goToSignInPage() {
        navigate("/sign-in")
    }

    function goToHomePage() {
        navigate("/");
    }

    function logoutTheUser() {
        auth.signOut();
        setIsUserLoggedIn(false);
        setSearchQuery("");
    }
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="navbar_container">
            <button onClick={goToHomePage} className="navbar_logo_button" aria-label="Home">
                <img className="navbar_logo" src={navbar} alt="logo" />
            </button>
            {showSignInButton === false ? (
                " "
            ) : (
                <Button text="Sign In" onClicking={goToSignInPage} />
            )}

            {isUserLoggedIn && (
                <div>
                    {showInputField && <input className="navbar_input_field" placeholder="Search..." aria-label="Search"
                            onChange={handleSearchChange} />}
                    <Button text="Logout" onClicking={logoutTheUser} />
                </div>
            )}
        </div>
    );
}
export default Navbar;