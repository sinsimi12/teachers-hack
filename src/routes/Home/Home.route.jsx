import React from "react";

import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../store/AuthContext";

const Home = () => {
    const navigate = useNavigate();

    const { login } = useAuthContext();

    const loginHandler = () => {
        navigate("/profile");
        login({ name: "John" });
    };

    return (
        <div>
            Home
            <button type="button" onClick={loginHandler}>
                Log in
            </button>
        </div>
    );
};

export default Home;
