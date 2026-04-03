import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { useRef } from "react";
import "../../Styles/Pages/Auth/Login.css";

// 🔥 Robot Component
function RobotModel() {
  const { scene } = useGLTF("/public/robot.glb"); // 👈 your file
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
      ref.current.position.y =
        Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return <primitive ref={ref} object={scene} scale={2} />;
}

function RobotCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} />
      <Environment preset="city" />
      <RobotModel />
    </Canvas>
  );
}

// 🔥 Main Component
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
        <div className="robot-card">
          
          <div className="glow"></div>

          <div className="robot-wrapper">
            <RobotCanvas />
          </div>

          <div className="robot-text">
            <h2>NeuroCore</h2>
            <p>“Intelligence is engineered. Power is automated.”</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;