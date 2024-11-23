import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import AdminHomePage from "./components/AdminHomePage";
import CustomerHomePage from "./components/CustomerHomePage";

function App() {
  const [userType, setUserType] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check sessionStorage on page load
    const storedUserType = sessionStorage.getItem("userType");
    const storedUsername = sessionStorage.getItem("username");

    if (storedUserType && storedUsername) {
      setUserType(storedUserType);
      setMessage("Welcome back!");
    } else {
      setUserType(null);
    }
  }, []);

  const handleLoginSuccess = (data) => {
    setUserType(data.usertype); // Set userType based on response from backend
    setMessage(data.message); // Set login success message

    // Store in sessionStorage
    sessionStorage.setItem("userType", data.usertype);
    sessionStorage.setItem("username", data.username);
  };

  const handleLoginFailure = (message) => {
    console.error("Login failed:", message);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          userType === null ? (
            <Login
              onLoginSuccess={handleLoginSuccess}
              onLoginFailure={handleLoginFailure}
            />
          ) : userType === "admin" ? (
            <Navigate to="/admin" replace />
          ) : (
            <Navigate to="/customer" replace />
          )
        }
      />
      <Route
        path="/admin"
        element={
          userType === "admin" ? (
            <AdminHomePage message={message} setUserType={setUserType} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/customer"
        element={
          userType === "customer" ? (
            <CustomerHomePage message={message} setUserType={setUserType} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
