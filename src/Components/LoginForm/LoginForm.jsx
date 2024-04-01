import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginForm.scss";
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const immutableLogin = "admin";
  const immutablePassword = "admin12345";

  const handleLogin = () => {
    if (username === immutableLogin && password === immutablePassword) {
      onLogin();
    }
  };

  return (
    <div className="div-big-1">
      <div className="big-2">
        <div className="div-1">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inp1"
          />
        </div>
        <div className="div-1">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inp1"
          />
        </div>

        <button className="btn1" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
