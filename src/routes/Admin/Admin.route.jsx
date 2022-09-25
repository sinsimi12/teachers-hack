import React, { useState } from "react";

import { useAuthContext } from "../../store/AuthContext";

import SecretPhrase from "./SecretPhrase/SecretPhrase.component";

import "./Admin.styles.scss";

const Admin = () => {
    const { user } = useAuthContext();
    const { name } = user;

    const [selectedCategory, setSelectedCategory] = useState("phrase");

    const clickCategoryHandler = category => {
        setSelectedCategory(category);
    };

    let contentToShow;

    if (selectedCategory === "phrase") {
        contentToShow = <SecretPhrase />;
    }

    return (
        <section className="admin-dashboard">
            <h1 className="heading-primary">👋 Hi, {name ? name.split(" ")[0] : "N/A"}!</h1>

            <nav>
                <ul>
                    <li
                        className={selectedCategory === "students" ? "active" : ""}
                        onClick={() => clickCategoryHandler("students")}
                    >
                        Students
                    </li>
                    <li
                        className={selectedCategory === "teachers" ? "active" : ""}
                        onClick={() => clickCategoryHandler("teachers")}
                    >
                        Teachers
                    </li>
                    <li
                        className={selectedCategory === "phrase" ? "active" : ""}
                        onClick={() => clickCategoryHandler("phrase")}
                    >
                        Secret Phrase
                    </li>
                </ul>
            </nav>

            <div className="content">{contentToShow}</div>
        </section>
    );
};

export default Admin;
