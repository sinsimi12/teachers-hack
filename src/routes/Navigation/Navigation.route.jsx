import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, Navigate } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

import "./Navigation.styles.scss";
import { useAuthContext } from "../../store/AuthContext";

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
                    <Link to="/">logo</Link>
                </div>

                <ul>
                    <li>
                        <Link to="resources" className="nav__link">
                            Resources
                        </Link>
                    </li>

                    <li>
                        <Link to="" className="nav__link">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to="map" className="nav__link">
                            Map
                        </Link>
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
