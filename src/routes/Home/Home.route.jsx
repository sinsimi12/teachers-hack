import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { MdAlternateEmail, MdLock } from "react-icons/md";

import { useAuthContext } from "../../store/AuthContext";

import qrCode1 from "../../assets/qr_code1.gif";
import thanksTeacher from "../../assets/thank_you_teacher.gif";

import "./Home.styles.scss";
import { useRef } from "react";
import LinkButton from "../../ui/LinkButton/LinkButton.component";

const Home = () => {
    // const navigate = useNavigate();
    const { login, isLoggedIn, loginStatus } = useAuthContext();
    const hasLoginStatus = Object.keys(loginStatus).length > 0;

    const emailRef = useRef();
    const passwordRef = useRef();

    const loginSubmitHandler = e => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        // if (hasLoginStatus && loginStatus.type !== "error") {
        //     console.log("qweqweqwe");
        //     navigate("/resources");
        // }

        login({ email, password });
    };

    const leftPanel = !isLoggedIn ? (
        <>
            <div className="left__heading">
                <h1>Hey there!</h1>
                <p>
                    Time Chaser is a QR code-based time tracking website that keeps track of your
                    own schedule and advocates for a healthier work-life balance for teachers.
                </p>
            </div>
            <form className="form" onSubmit={loginSubmitHandler}>
                {hasLoginStatus && (
                    <p className={`login-status  ${loginStatus.type}`}>{loginStatus.content}</p>
                )}

                <div className="form__control">
                    <MdAlternateEmail />
                    <input
                        type="email"
                        defaultValue="mina.christian@xavier.edu"
                        ref={emailRef}
                        required
                        placeholder="Email Address"
                    />
                </div>
                <div className="form__control">
                    <MdLock />
                    <input
                        type="password"
                        ref={passwordRef}
                        defaultValue="123456"
                        required
                        placeholder="Password"
                    />
                </div>

                <button type="submit" className="form__submit-btn">
                    Log In
                </button>
                <p className="form__sign-up">
                    Don't have an account? <Link to="">Sign Up</Link>
                </p>
            </form>
        </>
    ) : (
        <>
            <div className="left__heading">
                <h1 className="heading-primary">Your sacrifices don't go unnoticed.</h1>

                <p>
                    I'm still using a skill you taught me. You saw something in me that I didn't see
                    in myself. I wouldn't be where I am without you.
                </p>

                <LinkButton route="/map" />
            </div>
        </>
    );

    return (
        <section className="home">
            <div className="top-right-circle"></div>

            <div className="bottom-left-circle"></div>
            {/* <div className="bottom-left-circle"></div> */}

            <aside className="left">{leftPanel}</aside>
            <aside className="right">
                <img src={isLoggedIn ? thanksTeacher : qrCode1} alt="QR Code GIF" />
            </aside>
        </section>
    );
};

export default Home;
