// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ userType }) => {
  return (
    <div
      className="sidebar"
      style={{ width: "250px", backgroundColor: "#f4f4f4", padding: "20px" }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        {userType === "admin" ? (
          <>
            <li>
              <Link to="/admin">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/manage-users">Manage Users</Link>
            </li>
            <li>
              <Link to="/admin/settings">Settings</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/customer">Customer Dashboard</Link>
            </li>
            <li>
              <Link to="/customer/orders">My Orders</Link>
            </li>
            <li>
              <Link to="/customer/settings">Account Settings</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
