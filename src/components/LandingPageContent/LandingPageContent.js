import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPageContent.css";

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

function LandingPageContent() {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = useCallback((e) => {
        const emailValue = e.target.value;
        const isValid = validateEmail(emailValue);
        setEmail(emailValue);
        setIsEmailValid(isValid);
        setErrorMessage(emailValue === "" ? "" : isValid ? "" : "Please enter a valid email address.");
    }, []);

    const handleGetStartedClick = useCallback(() => {
        if (isEmailValid) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigate("/plans");
            }, 1000); // Simulating a network request
        } else {
            setErrorMessage("Please enter a valid email address.");
        }
    }, [isEmailValid, navigate]);

    return (
        <div className="landingpagecontent_container">
            <div className="main_content">
                <p className="landingpagecontent_title">Watch Unlimited Movies and TV Shows</p>
                <p className="landingpagecontent_subtitle">Watch Anywhere. Cancel Anytime</p>
                <p className="landingpagecontent_description">Ready to Watch? Join Us</p>
                <form className="landingpagecontent_input" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        aria-label="Email address"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button
                        aria-label="Get started with your subscription"
                        onClick={handleGetStartedClick}
                        disabled={!isEmailValid || loading}
                    >
                        {loading ? "Loading..." : "GET STARTED"}
                    </button>
                </form>
                {errorMessage && <p className="error_message" aria-live="polite">{errorMessage}</p>}
            </div>
            <div className="bottom_menu_label">
                <div className="tooltip">
                    <a href="https://www.linkedin.com/in/vishwajeet1298/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <span className="tooltiptext">/vishwajeet1298</span>
                </div>
                <div className="tooltip">
                    <a href="https://github.com/vishwajeet1298" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <span class="tooltiptext">/vishwajeet1298</span>
                </div>
                <div className="tooltip">
                    <a href="mailto:vishwajeet1298@gmail.com">
                        Email
                    </a>
                    <span className="tooltiptext">vishwajeet1298@gmail.com</span>
                </div>
                <div className="tooltip">
                    <a href="tel:+917054088306">Contact</a>
                    <span className="tooltiptext">+91 7054088306</span>
                </div>
                <div className="tooltip">
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7010934989609406465/" target="_blank" rel="noopener noreferrer">Highlights</a>
                    <span className="tooltiptext">Featured Work</span>
                </div>
            </div>
        </div>
    );
}

export default LandingPageContent;