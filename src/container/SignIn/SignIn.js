import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SignInBody from "../../components/SignInBody/SignInBody";


import "./SignIn.css";


function SignIn({setIsUserLoggedIn}){
    
    return(
        <div>
            <Navbar showSignInButton={false}  />
            <SignInBody  setIsUserLoggedIn={setIsUserLoggedIn}/>
        </div>
    );
}
export default SignIn;