import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { MdAlternateEmail, MdLock } from "react-icons/md";

import { useAuthContext } from "../../store/AuthContext";

import qrCode from "../../assets/qr_code.gif";
import "./Home.styles.scss";
import { useRef } from "react";

const Home = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const emailRef = useRef();
    const passwordRef = useRef();

    const loginSubmitHandler = () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        navigate("/resources");
        login({ email, password });
    };

    return (
        <section className="home">
            <aside className="left">
                <div className="left__heading">
                    <h1>Hey there!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum
                        excepturi tenetur.
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
            </aside>
            <aside className="right">
                <img src={qrCode} alt="" />
            </aside>
        </section>
    );
};

export default Home;
