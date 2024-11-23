// src/components/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ user }) => {
  const navigate = useNavigate();

  // Navigate to a different page if needed (e.g., logout)
  const handleLogout = () => {
    navigate("/"); // Navigate to the login page
  };

  return (
    <div>
      <h2>Welcome, {user.usertype}!</h2>
      <p>{user.message}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
