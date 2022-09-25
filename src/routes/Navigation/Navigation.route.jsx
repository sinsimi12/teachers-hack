import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, Outlet, Navigate } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

import { useAuthContext } from "../../store/AuthContext";

import tcLogoNew from "../../assets/tc_logo_new.png";

import "./Navigation.styles.scss";

const Navigation = () => {
    const { user, isLoggedIn } = useAuthContext();
    const { name, email, address, phone } = user;

    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdownHandler = e => {
        setShowDropdown(prevState => !prevState);
    };

    const logoutHandler = () => {
        Navigate("/");
    };

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu, then close the menu

            if (showDropdown && dropdownRef.current && e.target !== buttonRef.current) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("click", checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [showDropdown]);

    return (
        <>
            <nav className="nav">
                <div className="nav__logo">
                    <Link to="/">
                        <img src={tcLogoNew} alt="" />
                    </Link>
                </div>

                <ul>
                    {isLoggedIn && (
                        <li>
                            <NavLink to="admin" className="nav__link">
                                {({ isActive }) => (
                                    <span className={isActive ? "active" : ""}>Dashboard</span>
                                )}
                            </NavLink>
                        </li>
                    )}

                    {isLoggedIn && (
                        <li>
                            <NavLink to="/resources" className="nav__link">
                                {({ isActive }) => (
                                    <span className={isActive ? "active" : ""}>Resources</span>
                                )}
                            </NavLink>
                        </li>
                    )}

                    {/* <li>
                        <NavLink to="" className="nav__link">
                            {({ isActive }) => (
                                <span className={isActive ? "active" : ""}>About</span>
                            )}
                        </NavLink>
                    </li> */}

                    <li>
                        <NavLink to="map" className="nav__link">
                            {({ isActive }) => (
                                <span className={isActive ? "active" : ""}>Map</span>
                            )}
                        </NavLink>
                    </li>

                    {isLoggedIn && (
                        <li className="user">
                            <FaUserCircle className="user__profile-icon" />
                            <button
                                className="user__drowndown-btn"
                                ref={buttonRef}
                                onClick={toggleDropdownHandler}
                            >
                                {name || "N/A"}
                                <BiChevronDown className="user__dropdown-icon" />
                            </button>

                            <div
                                ref={dropdownRef}
                                className={`dropdown ${showDropdown ? "show" : ""}`}
                            >
                                <Link to="/profile">Profile</Link>
                                <Link to="">Settings</Link>
                                <Link to="">Help</Link>
                                <Link className="logout" to="" onClick={logoutHandler}>
                                    Log out
                                </Link>
                            </div>

                            {/* <Link to="profile" className="nav__link ">
                            <FaUserCircle className="profile-icon" />
                        </Link> */}
                        </li>
                    )}
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;
