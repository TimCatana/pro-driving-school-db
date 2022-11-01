import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthScreen from "./client/screens/auth-screen/AuthScreen";
import HomeScreen from "./client/screens/home-screen/HomeScreen";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </div>
  );
};

export default App;
