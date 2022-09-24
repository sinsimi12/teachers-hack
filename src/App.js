import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation.route";
import Home from "./routes/Home/Home.route";
import Profile from "./routes/Profile/Profile.route";
import Map from "./routes/Map/Map.route";
import Resources from "./routes/Resources/Resources.route";
import PageNotFound from "./routes/404/PageNotFound.route";

import { useAuthContext } from "./store/AuthContext";

const App = () => {
    const { isLoggedIn } = useAuthContext();

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
                        path="/resources"
                        element={isLoggedIn ? <Resources /> : <Navigate to="/" />}
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
