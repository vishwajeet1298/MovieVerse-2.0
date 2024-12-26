import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.js";
import Button from "../../global/Button/Button";
import { SIGN_IN_BODY_TEXT } from "../constants/components.js";
import "./SignInBody.css";

function SignInBody({ setIsUserLoggedIn }) {

    const navigate = useNavigate()
    const [showSignInBox, setShowSignInBox] = useState(true);

    //setvariable for form validation and auth
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function setShowSignInBoxAs(param) {
        setShowSignInBox(param);
        setError("");
        setEmailError("");
        setPasswordError("");
    }
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    }

    function handleEmailChange(e) {
        const value = e.target.value;
        setEmail(value);
        if (value === "") {
            setEmailError("");
        } else if (!validateEmail(value)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }
    }

    function handlePasswordChange(e) {
        const value = e.target.value;
        setPassword(value);
        if (value === "") {
            setPasswordError("");
        } else if (!validatePassword(value)) {
            setPasswordError("Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 symbol.");
        } else {
            setPasswordError("");
        }
    }

    function signUp() {
        // console.log("Email",email);
        // console.log("Password",password);
        // console.log("Running");
        setLoading(true);
        setError(""); // Clear previous errors
        if (email === "" || password === "" || confirmPassword === "") {
            setError("Fields can't be empty");
            setLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((data) => {
                console.log(data)
                setIsUserLoggedIn(true);
                navigate("/");
            })
            .catch(err => {
                console.error(err);
                setError("Error signing up: " + err.message);
                setLoading(false);
            });

    }

    function signIn() {
        setLoading(true);
        setError("");
        auth.signInWithEmailAndPassword(email, password)
            .then((data) => {
                console.log("Logged In Successfully")
                setIsUserLoggedIn(true);
                navigate("/");
            })
            .catch(err => {
                console.error(err);
                setError("Error signing in: " + err.message);
                setLoading(false);
            });
    }

    function loginAsGuest() {
        setIsUserLoggedIn(true);
        navigate("/");
    }


    //  To demonstrate use of useState in Signup page.  

    //console.log("showsignInBox",showSignInBox)
    return (
        <>
            {showSignInBox ? (   //SIGN_IN PAGE
                <div className="signinbody_container">
                    <div className="signinbody_form">
                        <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_IN_TITLE}</p>
                        {error && <p className="error_message">{error}</p>}
                        <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER}
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                            className={emailError ? "input_error" : ""}
                        />
                        {emailError && <p className="error_message">{emailError}</p>}
                        <input placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER}
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={passwordError ? "input_error" : ""}
                        />
                        {passwordError && <p className="error_message">{passwordError}</p>}
                        <Button
                            text={loading ? "Loading..." : SIGN_IN_BODY_TEXT.LOGIN_TEXT}
                            onClicking={signIn}
                            disabled={loading || emailError || passwordError}
                        />
                        <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER}
                            onClicking={loginAsGuest}
                        />
                        <p className="signinbody_text">
                            {SIGN_IN_BODY_TEXT.NEW_TO_THIS_APP}{" "}
                            <span onClick={() => setShowSignInBoxAs(false)} >
                                {SIGN_IN_BODY_TEXT.SIGN_UP_NOW}
                            </span>
                        </p>
                    </div>
                </div>
            ) : (
                //SIGN_UP PAGE
                <div className="signinbody_container">
                    <div className="signinbody_form">
                        <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_UP_TITLE}</p>
                        {/* <input
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
            />*/}
                        {error && <p className="error_message">{error}</p>}
                        <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER}
                            type="email" value={email}
                            onChange={handleEmailChange}
                            className={emailError ? "input_error" : ""}
                        />
                        {emailError && <p className="error_message">{emailError}</p>}
                        <input placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER}
                            type="password" value={password}
                            // onChange={e => setPassword(e.target.value)}
                            onChange={handlePasswordChange}
                            className={passwordError ? "input_error" : ""}
                        />
                        {passwordError && <p className="error_message">{passwordError}</p>}
                        <input
                            placeholder="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button
                            text={loading ? "Loading..." : SIGN_IN_BODY_TEXT.SIGN_UP_TEXT}
                            onClicking={signUp}
                            disabled={loading || emailError || passwordError}
                        />
                        <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER}
                            onClicking={loginAsGuest} />
                        <p className="signinbody_text">
                            {SIGN_IN_BODY_TEXT.ALREADY_REGISTERED}{" "}
                            <span onClick={() => setShowSignInBoxAs(true)}>
                                {SIGN_IN_BODY_TEXT.LOGIN_TEXT}</span> </p>

                    </div>
                </div>
            )}
        </>
    );

}
export default SignInBody;