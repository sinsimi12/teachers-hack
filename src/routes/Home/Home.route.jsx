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
    const navigate = useNavigate();
    const { login, isLoggedIn } = useAuthContext();

    const emailRef = useRef();
    const passwordRef = useRef();

    const loginSubmitHandler = e => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        navigate("/resources");
        login({ email, password });
    };

    const leftPanel = !isLoggedIn ? (
        <>
            <div className="left__heading">
                <h1>Hey there!</h1>
                <p>
                    Time Chaser is a QR-code based time tracking website that keeps track of your
                    own schedule and advocates for a healthier work-life balance for teachers. 
                </p>
            </div>
            <form className="form" onSubmit={loginSubmitHandler}>
                <div className="form__control">
                    <MdAlternateEmail />
                    <input type="email" ref={emailRef} required placeholder="Email Address" />
                </div>
                <div className="form__control">
                    <MdLock />
                    <input type="password" ref={passwordRef} required placeholder="Password" />
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

            {/* <div className="bottom-wave">
                <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 600"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition duration-300 ease-in-out delay-150"
                >
                    <defs>
                        <linearGradient id="gradient" x1="70%" y1="4%" x2="30%" y2="96%">
                            <stop offset="5%" stop-color="#e44f50"></stop>
                            <stop offset="95%" stop-color="#e44e4f"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 0,600 C 0,600 0,200 0,200 C 82.19487179487177,231.22307692307692 164.38974358974355,262.44615384615383 239,266 C 313.61025641025645,269.55384615384617 380.6358974358975,245.43846153846158 467,237 C 553.3641025641025,228.56153846153842 659.0666666666666,235.8 745,223 C 830.9333333333334,210.2 897.0974358974358,177.3615384615385 963,188 C 1028.9025641025642,198.6384615384615 1094.5435897435898,252.75384615384615 1174,262 C 1253.4564102564102,271.24615384615385 1346.728205128205,235.62307692307692 1440,200 C 1440,200 1440,600 1440,600 Z"
                        stroke="none"
                        stroke-width="0"
                        fill="url(#gradient)"
                        fill-opacity="0.53"
                        class="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                    <defs>
                        <linearGradient id="gradient" x1="70%" y1="4%" x2="30%" y2="96%">
                            <stop offset="5%" stop-color="#e44f50"></stop>
                            <stop offset="95%" stop-color="#e44e4f"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M 0,600 C 0,600 0,400 0,400 C 64.86923076923077,419.5076923076923 129.73846153846154,439.0153846153847 218,456 C 306.26153846153846,472.9846153846153 417.9153846153847,487.44615384615383 499,473 C 580.0846153846153,458.55384615384617 630.6,415.20000000000005 695,413 C 759.4,410.79999999999995 837.6846153846155,449.7538461538462 915,443 C 992.3153846153845,436.2461538461538 1068.6615384615384,383.78461538461534 1156,369 C 1243.3384615384616,354.21538461538466 1341.6692307692308,377.10769230769233 1440,400 C 1440,400 1440,600 1440,600 Z"
                        stroke="none"
                        stroke-width="0"
                        fill="url(#gradient)"
                        fill-opacity="1"
                        class="transition-all duration-300 ease-in-out delay-150 path-1"
                    ></path>
                </svg>
            </div> */}
        </section>
    );
};

export default Home;
