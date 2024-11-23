// DashboardLayout.js
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import AdminHomePage from "./AdminHomePage";
import CustomerHomePage from "./CustomerHomePage";

const DashboardLayout = ({ userType, message }) => {
  return (
    <div className="dashboard-container" style={{ display: "flex" }}>
      <Sidebar userType={userType} />
      <div className="main-content" style={{ flex: 1, padding: "20px" }}>
        <Header userType={userType} />
        <Routes>
          <Route path="/admin" element={<AdminHomePage message={message} />} />
          <Route path="/customer" element={<CustomerHomePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
