import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Login/Register";

export default function App() {
  return (
    <div className="App">
      {/* Listing of all routes that will be used */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
