import React, { useState, useRef } from "react";

// Login Component
const Login = ({ onLoginSuccess, onLoginFailure }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Create refs for the username and password input fields
  const passwordRef = useRef(null);

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      onLoginSuccess(data);
    } else {
      onLoginFailure(data.message);
      setError(data.message);
    }
  };

  // Handle "Enter" key press to move focus to the next input field
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // If the current field is the username, focus on the password field
      if (e.target.id === "username") {
        passwordRef.current.focus();
      } else {
        // If the current field is the password, submit the form
        handleLogin(e);
      }
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card shadow-lg" style={{ width: "400px" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyPress} // Handle "Enter" key press
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyPress}
                ref={passwordRef}
              />
            </div>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
