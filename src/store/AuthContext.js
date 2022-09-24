import { createContext, useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const AuthContext = createContext({
    user: {},
    token: "",
    isLoggedIn: false,
    login: token => {},
    logout: () => {},
});

// const DUMMY_USERS = [
//     {
//         id: uuidv4(),
//         email: "johndoe@school.edu",
//         password: "qwerty",
//         address: "311 Kirkland Ave. Oconomowoc, WI 53066",
//         phone: "123 456 789",
//     },
// ];

export const AuthContextProvider = props => {
    const [user, setUser] = useState({ email: "", password: "", phone: "", address: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = user => {
        // const { uid, email, password } = user;
        setUser(user);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setUser({});
        setIsLoggedIn(false);
    };

    const contextValue = {
        user,
        // token,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
