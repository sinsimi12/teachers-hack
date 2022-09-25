import React, { useState } from "react";

import { useAuthContext } from "../../store/AuthContext";

import SecretPhrase from "./SecretPhrase/SecretPhrase.component";

import "./Admin.styles.scss";
import Teachers from "./Teachers/Teachers.component";
import Students from "./Students/Students.component";

const Admin = () => {
    const { user } = useAuthContext();
    const { name } = user;

    const [selectedCategory, setSelectedCategory] = useState("teachers");

    const clickCategoryHandler = category => {
        setSelectedCategory(category);
    };

    let contentToShow;

    if (selectedCategory === "phrase") {
        contentToShow = <SecretPhrase />;
    } else if (selectedCategory === "teachers") {
        contentToShow = <Teachers />;
    }

    return (
        <section className="admin-dashboard">
            <h1 className="heading-primary">Admin Dashboard</h1>

            <nav>
                <ul>
                    {/* <li
                        className={selectedCategory === "students" ? "active" : ""}
                        onClick={() => clickCategoryHandler("students")}
                    >
                        Students
                    </li> */}
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
