import React from 'react';
import Header from '../comman/Header';
import Navbar from '../comman/Navbar';
import Footer from '../comman/Footer';
import studioPhoto from '../assets/studioPhoto1.png'; // Example image path

// Import the team member photos
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpeg';

export default function AboutUs() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          padding: '80px 20px',
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px' }}>
          About Our Photo Studio
        </h1>
        <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
          Welcome to <strong>Marvel Studio</strong>, where we capture your most cherished moments in timeless photos.
          From weddings to corporate events, our professional photographers ensure every detail shines.
        </p>
        <img
          src={studioPhoto}
          alt="Photo Studio"
          style={{
            width: '70%',
            maxWidth: '800px',
            marginTop: '30px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px' }}>Our Services</h2>
        <ul style={{ listStyleType: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
          {['Wedding Photography 📸', 'Pre-Wedding Photography💑', 'Business Photography 🏢', 'Kids Photography 🧒'].map(
            (service, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: '18px',
                  marginBottom: '15px',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                }}
              >
                {service}
              </li>
            )
          )}
        </ul>
      </section>

      {/* Team Section */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#f0f0f0',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>Meet Our Team</h2>
        <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
          Our talented team of photographers and editors are dedicated to bringing your vision to life.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '40px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <img
              src={team1} // Corrected: Use the imported variable
              alt="Photographer 1"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <p style={{ marginTop: '10px', fontWeight: '600', fontSize: '18px' }}>Pratik - Lead Photographer</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src={team2} // Corrected: Use the imported variable
              alt="Photographer 2"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <p style={{ marginTop: '10px', fontWeight: '600', fontSize: '18px' }}>Mangesh -Photographer</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src={team3} // Corrected: Use the imported variable
              alt="Photoeditor "
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <p style={{ marginTop: '10px', fontWeight: '600', fontSize: '18px' }}>Prince - Photo Editor</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        style={{
          padding: '80px 20px',
          textAlign: 'center',
          backgroundColor: '#fff',
        }}
      >
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>Contact Us</h2>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>
          Email: <strong>contact@marvel.com</strong> | Phone: <strong>+91 9341020167</strong>
        </p>
        <p style={{ fontSize: '18px' }}>
          Address: <strong>123 SMS College, Varanasi, India</strong>
        </p>
      </section>

      <Footer />
    </div>
  );
}