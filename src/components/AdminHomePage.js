import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHomePage = ({ message, setUserType }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserType(null); // Reset userType to null to go back to login page

    // Clear sessionStorage on logout
    sessionStorage.removeItem("userType");
    sessionStorage.removeItem("username");

    navigate("/"); // Redirect to the login page
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card shadow-lg" style={{ width: "600px" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Admin Dashboard</h2>
          {message && (
            <div className="alert alert-info" role="alert">
              {message}
            </div>
          )}
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-primary"
              onClick={handleLogout}
              style={{ width: "48%" }}
            >
              Logout
            </button>
            <button className="btn btn-secondary" style={{ width: "48%" }}>
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
