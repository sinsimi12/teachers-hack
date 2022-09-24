import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation.route";
import Home from "./routes/Home/Home.route";
import Profile from "./routes/Profile/Profile.route";
import Map from "./routes/Map/Map.route";
import { useAuthContext } from "./store/AuthContext";

const App = () => {
    const { isLoggedIn } = useAuthContext();
    console.log(isLoggedIn);

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/profile"
                        element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
                    />
                    <Route path="/map" element={<Map />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <>
                            <Navigation />
                            <div style={{ padding: "2rem 5rem" }}>
                                <p>404 - There is nothing here. </p>
                            </div>
                        </>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
