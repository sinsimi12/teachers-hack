import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation.route";
import Home from "./routes/Home/Home.route";
import Profile from "./routes/Profile/Profile.route";
import Map from "./routes/Map/Map.route";
import Schedule from "./routes/Schedule/Schedule.route";
import PageNotFound from "./routes/404/PageNotFound.route";
import Admin from "./routes/Admin/Admin.route";

import { useAuthContext } from "./store/AuthContext";

const App = () => {
    const { isLoggedIn, user } = useAuthContext();

    return (
        <main>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/profile"
                        element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
                    />
                    <Route path="/map" element={<Map />} />
                    <Route
                        path="/schedule"
                        element={isLoggedIn ? <Schedule /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/admin"
                        element={
                            isLoggedIn && user.role === "admin" ? <Admin /> : <Navigate to="/" />
                        }
                    />
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
        </main>
    );
};

export default App;
