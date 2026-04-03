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
      {/* Background Ambient Glow */}
      <div className="ambient-glow" />

      {/* LEFT SIDE: AUTH FORM */}
      <section className="login-left">
        <div className="login-box">
          <header className="login-header">
            <span className="system-status">SYSTEM ONLINE</span>
            <h1>Welcome Admin</h1>
            <p>Initialize your session to access Pharbit</p>
          </header>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label>Identification</label>
              <input
                type="email"
                placeholder="email@pharbit.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Security Key</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-button">
              <span className="btn-text">AUTHORIZE</span>
              <div className="btn-glow" />
            </button>
          </form>

          <footer className="login-footer">
            <p>Protected by End-to-End Neural Encryption</p>
          </footer>
        </div>
      </section>

      {/* RIGHT SIDE: VISUALS */}
      <section className="login-right">
        <div className="dark-core-container">
          <DarkMatterGlobe />
          <div className="scanline" />
          
          <div className="core-text">
            <div className="badge">VERSION 3.0.4</div>
            <h2>PHARBIT</h2>
            <div className="divider" />
            <p>"Intelligence is engineered.<br/> Power is automated."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;