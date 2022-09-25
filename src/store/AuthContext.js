import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

const DUMMY_USERS = [
    {
        id: uuidv4(),
        name: "Christian Mina",
        email: "mina.christian@xavier.edu",
        role: "teacher",
        address: "123 Lourdes St. Aba Homes, 1870",
        phone: "+(033) 337-2172",
        password: "123456",
    },
    {
        id: uuidv4(),
        name: "Jane Doe",
        email: "janedoe@test.edu",
        role: "student",
        address: "123 Phoenix Building Recoleto Street1000",
        phone: "+(052) 347-2322",
        password: "123456",
    },
];

const AuthContext = createContext({
    users: [DUMMY_USERS],
    user: {},
    todaysLog: {},
    token: "",
    isLoggedIn: false,
    login: token => {},
    logout: () => {},
    loginStatus: {},
});

export const AuthContextProvider = props => {
    const [users, setUsers] = useState(DUMMY_USERS);
    const [user, setUser] = useState({ email: "", password: "", phone: "", address: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [todaysLog, setTodaysLog] = useState({});
    const [loginStatus, setLoginStatus] = useState({});

    const navigate = useNavigate();

    const loginHandler = user => {
        const { email, password } = user;

        // check if email exists
        const currentUser = users.find(user => user.email === email.trim()) || {};
        // if (!currentUser) {
        //     setLoginStatus({ type: "error", content: "Email doesn't exist." });
        //     return;
        // }

        if (currentUser.email !== email && currentUser.password !== password.trim()) {
            setLoginStatus({ type: "error", content: "Incorrect email or password." });
            return;
        }

        setLoginStatus({ type: "success", content: "Success." });
        setUser(currentUser);
        setIsLoggedIn(true);
        navigate("/resources");
    };

    const logoutHandler = () => {
        setUser({});
        setIsLoggedIn(false);
    };

    const setTodaysLogHandler = data => {
        setTodaysLog(data);
    };

    const contextValue = {
        users,
        user,
        // token,
        loginStatus,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        todaysLog,
        setTodaysLog: setTodaysLogHandler,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
