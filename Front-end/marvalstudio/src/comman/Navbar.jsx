import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  return (
    <div>
      <style>{`
        /* 🌟 Navbar Wrapper */
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        /* ✨ Professional Gradient Background with Glass Effect */
        .navbar-bg {
          background: rgba(0, 23, 48, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 0;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
          transition: background 0.4s ease-in-out;
        }

        .navbar-bg:hover {
          background: rgba(0, 23, 48, 0.9);
        }

        /* 💎 Nav Links Styling */
        .nav-link {
          position: relative;
          color: #ffffff !important;
          font-weight: 500;
          font-size: 17px;
          margin: 0 15px;
          letter-spacing: 0.5px;
          text-transform: capitalize;
          transition: all 0.3s ease;
        }

        /* ✨ Hover Glow Effect */
        .nav-link:hover {
          color: #00c6ff !important;
          text-shadow: 0 0 8px rgba(0, 198, 255, 0.8);
          transform: translateY(-2px);
        }

        /* 🔵 Active Page Indicator */
        .nav-link.active {
          color: #00c6ff !important;
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          width: 60%;
          height: 2px;
          left: 20%;
          bottom: -6px;
          background: linear-gradient(90deg, #00c6ff, #90e0ef);
          border-radius: 5px;
          box-shadow: 0 0 6px rgba(0, 198, 255, 0.8);
        }

        /* ✨ Smooth Animation for Items */
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .navbar-nav .nav-item {
          animation: fadeInUp 0.6s ease forwards;
        }

        .navbar-nav .nav-item:nth-child(1) { animation-delay: 0.1s; }
        .navbar-nav .nav-item:nth-child(2) { animation-delay: 0.2s; }
        .navbar-nav .nav-item:nth-child(3) { animation-delay: 0.3s; }
        .navbar-nav .nav-item:nth-child(4) { animation-delay: 0.4s; }
        .navbar-nav .nav-item:nth-child(5) { animation-delay: 0.5s; }
        .navbar-nav .nav-item:nth-child(6) { animation-delay: 0.6s; }
        .navbar-nav .nav-item:nth-child(7) { animation-delay: 0.7s; }

        /* 📱 Responsive Styles */
        @media (max-width: 992px) {
          .navbar-collapse {
            background: rgba(0, 23, 48, 0.95);
            border-radius: 15px;
            padding: 20px;
            margin-top: 10px;
          }

          .nav-link {
            display: block;
            text-align: center;
            padding: 12px;
            margin: 5px 0;
            border-radius: 8px;
          }

          .nav-link:hover {
            background: rgba(0, 198, 255, 0.1);
            transform: none;
          }

          .nav-link.active::after {
            display: none;
          }
        }
      `}</style>

      {/* 🌐 Navbar */}
      <div className="navbar-wrapper">
        <motion.nav
          className="navbar navbar-expand-lg navbar-dark navbar-bg"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container-fluid justify-content-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Services", path: "/services" },
                  { name: "Booking", path: "/booking" },
                  { name: "Contact", path: "/contact" },
                  { name: "Enquiry", path: "/enquiry" },
                ].map((item) => (
                  <li className="nav-item" key={item.path}>
                    <Link
                      to={item.path}
                      className={`nav-link ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
