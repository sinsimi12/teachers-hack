import React from "react";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

import "./LinkButton.styles.scss";

const LinkButton = ({ route }) => {
    return (
        <Link to={route} className="link-btn">
            <span>Learn More</span>
            <BsArrowRight />
        </Link>
    );
};

export default LinkButton;
