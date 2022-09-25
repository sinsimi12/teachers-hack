import React from "react";

import { FaUserAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

import timelineSVG from "../../assets/timeline.svg";

import "./Profile.styles.scss";
import { useAuthContext } from "../../store/AuthContext";

const Profile = () => {
    const { user } = useAuthContext();
    const { name, role, email, address, phone } = user;

    return (
        <section className="profile">
            <aside className="left">
                <div className="left__upper">
                    <h1 className="heading-primary">
                        Hi <span className="highlight">{name?.split(" ")[0]}</span>!
                        <br />
                        Welcome to Xavier University.
                        {/* <span className="highlight"> Check </span> our website university. */}
                    </h1>
                    <p>If you have any questions, kindly send us a feedback.</p>
                </div>

                <div className="left__user-info">
                    {/* <div className="control">
                        <div className="control__icon user">
                            <FaUserAlt />
                        </div>
                        <div className="control__texts">
                            <p className="label">Role</p>
                            <div className="value role">{role || "N/A"}</div>
                        </div>
                    </div> */}

                    <div className="control">
                        <div className="control__icon">
                            <MdOutlineEmail />
                        </div>
                        <div className="control__texts">
                            <p className="label">Email</p>
                            <div className="value">{email || "N/A"}</div>
                        </div>
                    </div>

                    <div className="control">
                        <div className="control__icon">
                            <MdLocationOn />
                        </div>
                        <div className="control__texts">
                            <p className="label">Address</p>
                            <div className="value">{address || "N/A"}</div>
                        </div>
                    </div>

                    <div className="control">
                        <div className="control__icon">
                            <MdCall />
                        </div>
                        <div className="control__texts">
                            <p className="label">Phone no.</p>
                            <div className="value">{phone || "N/A"}</div>
                        </div>
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
