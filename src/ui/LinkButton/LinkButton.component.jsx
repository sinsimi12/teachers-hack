import React from "react";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

import "./LinkButton.styles.scss";

const LinkButton = ({ route, text }) => {
    return route ? (
        <Link to={route} className="link-btn">
            <span>{text}</span>
            <BsArrowRight />
        </Link>
    ) : (
        <button className="link-btn">
            <span>{text}</span>
            <BsArrowRight />
        </button>
    );
};

export default LinkButton;
