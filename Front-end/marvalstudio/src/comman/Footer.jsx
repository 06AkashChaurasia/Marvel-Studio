import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
    // Adding fade-in animation for footer on page load
    const footer = document.querySelector('footer');
    footer.classList.add('fade-in');
  }, []);

  return (
    <>
      <style>{`
        /* General Footer Styling */
        footer {
          background-color: #343a40; /* Dark background */
          color: #f8f9fa; /* Light text color */
          opacity: 0; /* Initially hidden for fade-in animation */
          transition: opacity 1s ease-out, background-color 0.5s ease-in-out; /* Fade-in and background transition */
        }

        footer.fade-in {
          opacity: 1;
        }

        footer h5 {
          color: #ff4081; /* Accent color for headings */
          transform: translateY(20px);
          animation: fadeInUp 1s ease-out forwards;
        }

        footer a {
          text-decoration: none;
          color: inherit;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        footer a:hover {
          color: #ff4081; /* Accent color on hover */
          transform: scale(1.1); /* Slight zoom effect on hover */
        }

        footer .social-icons a {
          transition: color 0.3s ease, transform 0.3s ease;
          opacity: 0;
          transform: translateY(50px);
          animation: slideIn 1s ease-out forwards 0.5s; /* Delayed slide-in effect for social icons */
        }

        footer .social-icons a:hover {
          color: #ff4081;
          transform: translateY(-5px); /* Slight upward movement */
        }

        footer .col-md-4 {
          margin-bottom: 20px;
          animation: fadeInUp 1s ease-out forwards;
        }

        footer .d-flex {
          gap: 1rem;
        }

        footer .text-uppercase {
          font-weight: bold;
        }

        footer p {
          font-size: 14px;
        }

        /* Hover Effects */
        footer .nav-link:hover {
          color: #ff4081 !important; /* Hover color */
          text-decoration: underline;
          transform: scale(1.05);
        }

        footer .social-icons a {
          font-size: 1.8rem;
        }

        /* Social Icon Hover */
        footer .social-icons a:hover {
          transform: translateY(-10px) scale(1.1); /* Slight bounce effect */
        }

        footer .social-icons a:focus {
          outline: none;
        }

        /* Small screen sizes - Make footer content stack */
        @media (max-width: 767px) {
          footer .col-md-4 {
            text-align: center;
            animation: fadeInUp 1s ease-out forwards;
          }

          footer .d-flex {
            justify-content: center;
          }

          footer .text-center {
            text-align: center !important;
          }

          footer .container-fluid {
            padding-left: 15px;
            padding-right: 15px;
          }

          footer .row {
            padding-bottom: 20px;
          }

          footer .col-sm-6 {
            text-align: center;
          }
        }

        /* Larger Screen Sizes - Responsive adjustments for larger viewports */
        @media (min-width: 768px) {
          footer .col-md-4 {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          footer .row {
            padding-top: 30px;
          }
        }

        /* Bottom Line Section */
        footer .border-secondary {
          border-color: #6c757d !important; /* Light secondary border */
        }

        footer .fs-4 {
          font-size: 1.5rem;
        }

        /* Contact Section */
        footer .mb-1 {
          font-size: 14px;
          display: flex;
          align-items: center;
        }

        footer .me-2 {
          margin-right: 10px;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes backgroundPulse {
          0% {
            background-color: #343a40;
          }
          50% {
            background-color: #2d3436; /* Slightly darker background */
          }
          100% {
            background-color: #343a40;
          }
        }

        /* Optional: Adding Background Animation */
        footer {
          animation: backgroundPulse 10s infinite alternate;
        }
      `}</style>

      <footer className="bg-dark text-light pt-4 pb-3 mt-5">
        <div className="container-fluid">
          <div className="row text-center text-md-start">
            {/* Left Section */}
            <div className="col-md-4 mb-3">
              <h5 className="text-uppercase mb-3">Marvel Studio</h5>
              <p>
                Bringing stories of heroes, villains, and legends to life.
                Watch, imagine, and be inspired.
              </p>
            </div>

            {/* Contact Section */}
            <div className="col-md-4 mb-3">
              <h5 className="text-uppercase mb-3">Contact Us</h5>
              <p className="mb-1">
                <FaEnvelope className="me-2" />
                info@marvelstudio.com
              </p>
              <p className="mb-1">
                <FaPhoneAlt className="me-2" />
                +91 9341020167, 7398823446
              </p>
            </div>

            {/* Social Media Section */}
            <div className="col-md-4 mb-3 text-center text-md-start">
              <h5 className="text-uppercase mb-3">Follow Us</h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-3 social-icons">
                <a href="https://facebook.com" className="text-light fs-4" target="_blank" rel="noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" className="text-light fs-4" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" className="text-light fs-4" target="_blank" rel="noreferrer">
                  <FaYoutube />
                </a>
                <a href="https://twitter.com" className="text-light fs-4" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <hr className="border-secondary" />

          {/* Bottom Line */}
          <div className="row text-center">
            <div className="col-sm-6">
              <p className="mb-0">
                Copyright © {new Date().getFullYear()} Team ERROR 404 (KSS Chitrakut)
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                Developed By: <Link to="/team"><strong>ERROR 404</strong></Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
