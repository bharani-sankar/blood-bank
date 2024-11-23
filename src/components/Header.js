// Header.js
import React from "react";

const Header = ({ userType }) => {
  return (
    <div
      className="header"
      style={{ backgroundColor: "#333", color: "white", padding: "10px" }}
    >
      <h1>{userType === "admin" ? "Admin Dashboard" : "Customer Dashboard"}</h1>
    </div>
  );
};

export default Header;
