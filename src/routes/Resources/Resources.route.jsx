import React from "react";

import { AiOutlineFieldTime } from "react-icons/ai";

import { useDate } from "../../hooks/useDate.hook";

import { useAuthContext } from "../../store/AuthContext";

import "./Resources.styles.scss";

const Resources = () => {
    const { user } = useAuthContext();

    const { date, time, wish } = useDate();

    return (
        <section className="resources">
            <div className="upper">
                <div className="heading">
                    <p className="wish">
                        {wish} <span className="highlight">{user.name}.</span>
                    </p>
                    <div className="date">
                        <p>
                            <AiOutlineFieldTime /> {time}
                        </p>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button className="filled"> In</button>
                    <button> Out</button>
                </div>
            </div>

            <div className="table"></div>
        </section>
    );
};

export default Resources;
