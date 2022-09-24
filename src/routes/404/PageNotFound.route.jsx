import React from "react";
import { Link } from "react-router-dom";

import pageNotFoundSVG from "../../assets/page_not_found.svg";

import "./PageNotFound.styles.scss";

const PageNotFound = () => {
    return (
        <section className="page-not-found">
            <img src={pageNotFoundSVG} alt="Page not found" />
            <h1>Page not found</h1>
            <Link to="/">Go Back</Link>
        </section>
    );
};

export default PageNotFound;
