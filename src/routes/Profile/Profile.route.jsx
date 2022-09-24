import React from "react";

import { FaUserAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";

import timelineSVG from "../../assets/timeline.svg";

import "./Profile.styles.scss";
import { useDate } from "../../hooks/useDate.hook";
import { useAuthContext } from "../../store/AuthContext";

const Profile = () => {
    const { user } = useAuthContext();
    const { date, time, wish } = useDate();

    return (
        <section className="profile">
            <aside className="left">
                <div className="left__upper">
                    <h1>
                        Lorem <span className="highlight">ipsum</span> dolor sit amet. Consectetur{" "}
                        <span className="highlight">adipisicing</span> elit. Ex, voluptate.
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe
                        pariatur cumque vero, architecto corporis?
                    </p>
                </div>

                <div className="left__user-info">
                    <div className="control">
                        <div className="control__icon user">
                            <FaUserAlt />
                        </div>
                        <div className="control__texts">
                            <p className="label">Name</p>
                            <div className="value">{user.name}</div>
                        </div>
                    </div>

                    <div className="control">
                        <div className="control__icon">
                            <MdOutlineEmail />
                        </div>
                        <div className="control__texts">
                            <p className="label">Email</p>
                            <div className="value">johndoe@school.edu</div>
                        </div>
                    </div>

                    <div className="control">
                        <div className="control__icon">
                            <MdLocationOn />
                        </div>
                        <div className="control__texts">
                            <p className="label">Address</p>
                            <div className="value">Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>

                    <div className="control">
                        <div className="control__icon">
                            <MdCall />
                        </div>
                        <div className="control__texts">
                            <p className="label">Phone no.</p>
                            <div className="value">+123 456 789</div>
                        </div>
                    </div>
                </div>

                <div className="left__actions">
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
            </aside>
            <aside className="right">
                <img src={timelineSVG} alt="" />
            </aside>
        </section>
    );
};

export default Profile;
