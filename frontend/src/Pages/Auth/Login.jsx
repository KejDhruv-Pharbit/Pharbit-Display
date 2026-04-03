import React, { useState } from "react";
import "../../Styles/Pages/Auth/Login.css";
import DarkMatterGlobe from "../../Components/Login/DarkMatter";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-container">

      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="login-box">
          <h1>Welcome Back</h1>
          <p>Access your intelligent system</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="dark-core-container">

          {/* 🌑 Dark Matter Globe Canvas */}
          <DarkMatterGlobe />

          {/* Scanline overlay for atmosphere */}
          <div className="scanline" />

          <div className="core-text">
            <h2>NeuroCore</h2>
            <p>"Intelligence is engineered. Power is automated."</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LoginPage;