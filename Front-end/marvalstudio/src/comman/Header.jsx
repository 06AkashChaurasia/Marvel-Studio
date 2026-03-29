// src/components/Header.jsx
import React from "react";
import { motion } from "framer-motion";
import marvelLogo from "../assets/logo1.png"; // Transparent PNG recommended

export default function Header() {
  return (
    <div>
      <style>
        {`
          /* 🌟 Header Main Container */
          .header {
            background: linear-gradient(135deg, #0d1b2a, #1b263b, #415a77, #778da9);
            background-size: 400% 400%;
            animation: gradientMove 12s ease infinite;
            color: white;
            padding: 25px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            border-bottom: 4px solid rgba(255, 255, 255, 0.15);
            overflow: hidden;
          }

          /* Background Gradient Animation */
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* 🌐 Floating Particles Effect */
          .header::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.05) 2%, transparent 60%);
            animation: floatParticles 30s linear infinite;
          }

          @keyframes floatParticles {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          /* 🦸‍♂️ Logo Styling */
          .logo {
            width: 130px;
            height: auto;
            border-radius: 12px;
            background-color: transparent; /* Transparent logo */
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }

          .logo:hover {
            transform: scale(1.15) rotateY(10deg);
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.7);
          }

          /* 💎 Center Text Content */
          .center-content {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            perspective: 1000px;
          }

          .website-name {
            font-size: 50px;
            font-weight: 800;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #ffffff;
            text-shadow: 
              0 0 10px #00b4d8,
              0 0 20px #48cae4,
              0 0 40px #90e0ef;
            margin-bottom: 5px;
            animation: fadeInDown 1.2s ease;
          }

          .tagline {
            font-size: 20px;
            color: #ffd166;
            font-weight: 600;
            letter-spacing: 1px;
            animation: fadeInUp 1.2s ease;
          }

          /* ✨ Text Animations */
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* 📱 Responsive */
          @media (max-width: 768px) {
            .header {
              flex-direction: column;
              padding: 20px;
              text-align: center;
            }

            .center-content {
              position: static;
              transform: none;
              margin-top: 10px;
            }

            .logo {
              width: 100px;
            }

            .website-name {
              font-size: 32px;
            }

            .tagline {
              font-size: 16px;
            }
          }
        `}
      </style>

      <motion.div
        className="header"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 🪩 Logo with 3D Motion */}
        <motion.img
          src={marvelLogo}
          alt="Marvel Studio Logo"
          className="logo"
          whileHover={{ scale: 1.15, rotateY: 15 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* 🌠 Center Animated Title */}
        <motion.div
          className="center-content"
          whileHover={{ rotateX: 10, rotateY: -10 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="website-name">Marvel Studio</h1>
          <p className="tagline">Your Ultimate Marvel Experience Awaits</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
