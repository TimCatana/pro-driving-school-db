import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthScreen from "./screens/main-screens/auth-screen/AuthScreen";
import HomeScreen from "./screens/main-screens/home-screen/HomeScreen";
import NewCourseScreen from "./screens/new-entry-screens/new-course-screen/NewCourseScreen";
import NewInCarInstScreen from "./screens/new-entry-screens/new-in-car-inst-screen/NewInCarInstScreen";
import NewInClassInstScreen from "./screens/new-entry-screens/new-in-class-inst-screen/NewInClassInstScreen";
import NewProductScreen from "./screens/new-entry-screens/new-product-screen/NewProductScreen";
import NewStudentScreen from "./screens/new-entry-screens/new-student-screen/NewStudentScreen";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/course/:primary_key" element={<NewCourseScreen />} />
        <Route path="/product/:primary_key" element={<NewProductScreen />} />
        <Route path="/student/:primary_key" element={<NewStudentScreen />} />
        <Route
          path="/in-class-inst/:primary_key"
          element={<NewInClassInstScreen />}
        />
        <Route
          path="/in-car-inst/:primary_key"
          element={<NewInCarInstScreen />}
        />
      </Routes>
    </div>
  );
};

export default App;
