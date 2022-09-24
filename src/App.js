import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation.route";
import Home from "./routes/Home/Home.route";
import Profile from "./routes/Profile/Profile.route";
import Map from "./routes/Map/Map.route";
import PageNotFound from "./routes/404/PageNotFound.route";

import { useAuthContext } from "./store/AuthContext";

const App = () => {
    const { isLoggedIn } = useAuthContext();

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
                            <PageNotFound />
                        </>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
