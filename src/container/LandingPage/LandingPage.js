import React from "react";
import LandingPageContent from "../../components/LandingPageContent/LandingPageContent";
import Navbar from "../../components/Navbar/Navbar";


function LandingPage(){
return(
    <div className="landingpage_container">
        <Navbar />
        <LandingPageContent />
    </div>
)
}
export default LandingPage;