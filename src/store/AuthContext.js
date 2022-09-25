import { createContext, useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const AuthContext = createContext({
    user: {},
    todaysLog: {},
    token: "",
    isLoggedIn: false,
    login: token => {},
    logout: () => {},
});

export const AuthContextProvider = props => {
    const [user, setUser] = useState({ email: "", password: "", phone: "", address: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [todaysLog, setTodaysLog] = useState({});

    const loginHandler = user => {
        // const { uid, email, password } = user;
        setUser(user);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setUser({});
        setIsLoggedIn(false);
    };

    const setTodaysLogHandler = data => {
        setTodaysLog(data);
    };

    const contextValue = {
        user,
        // token,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        todaysLog,
        setTodaysLog: setTodaysLogHandler,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
