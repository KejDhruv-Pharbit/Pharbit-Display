import React, { useState } from "react";
import "../../Styles/Pages/Auth/Login.css";
import DarkMatterGlobe from "../../Components/Login/DarkMatter";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Accessing Vite Environment Variable
    const API_BASE_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Sending credentials in the body
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authorization Failed");
      }

      // Handle Success (e.g., save token, redirect)
      console.log("Login Successful:", data);
      // localStorage.setItem("token", data.token);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="ambient-glow" />

      <section className="login-left">
        <div className="login-box">
          <header className="login-header">
            <span className="system-status">SYSTEM ONLINE</span>
            <h1>WELCOME ADMIN</h1>
            <p>Initialize your session to access Pharbit</p>
          </header>

          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-message">{error}</div>}
            
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

            <div className="form-actions">
              <button 
                type="submit" 
                className={`login-button ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? "VERIFYING..." : "AUTHORIZE"}
              </button>
              <a href="#forgot" className="forgot-password">
                Forgot Password?
              </a>
            </div>
          </form>

          <footer className="login-footer">
            <p>Protected by End-to-End Neural Encryption</p>
          </footer>
        </div>
      </section>

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