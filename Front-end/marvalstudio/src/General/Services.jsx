import React from 'react';
import Header from '../comman/Header';
import Navbar from '../comman/Navbar';
import Footer from '../comman/Footer';

const services = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Capture every magical moment of your special day with our expert photographers.',
    icon: '📸',
  },
  {
    id: 2,
    title: 'Pre-Wedding Photography',
    description: 'Professional studio portraits and personal photoshoots tailored to your style.',
    icon: '💑',
  },
  {
    id: 3,
    title: 'Kids Photography',
    description: 'Covering corporate events, birthdays, and parties with high-quality photos.',
    icon: '🧒',
  },
  {
    id: 4,
    title: 'Product Photography',
    description: 'Showcase your products with crisp and professional images.',
    icon: '🛍️',
  },
  {
    id: 5,
    title: 'Business Photography',
    description: 'Retouching, color correction, and artistic editing to make your photos perfect.',
    icon: '👔',
  },
];

export default function Services() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <Navbar />

      {/* Page Title */}
      <section
        style={{
          padding: '80px 20px',
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px' }}>Our Services</h1>
        <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Explore the wide range of photography services we offer to make your moments unforgettable.
        </p>
      </section>

      {/* Services Grid */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          padding: '60px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              borderRadius: '20px',
              padding: '30px 20px',
              textAlign: 'center',
              background: '#fff',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
            }}
          >
            <div
              style={{
                fontSize: '50px',
                marginBottom: '20px',
                background: '#ffda79',
                width: '80px',
                height: '80px',
                lineHeight: '80px',
                borderRadius: '50%',
                margin: '0 auto 20px auto',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              }}
            >
              {service.icon}
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px' }}>{service.title}</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>{service.description}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section
        style={{
          backgroundColor: '#ffda79',
          textAlign: 'center',
          padding: '60px 20px',
          marginTop: '40px',
          borderRadius: '20px',
        }}
      >
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>
          Ready to Capture Your Moments?
        </h2>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>
          Book a session with our professional photographers today!
        </p>
        <a
          href="/booking"
          style={{
            display: 'inline-block',
            padding: '15px 40px',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '50px',
            fontWeight: '700',
            textDecoration: 'none',
            fontSize: '16px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s, background-color 0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = '#000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#333';
          }}
        >
          Book Now
        </a>
      </section>

      <Footer />
    </div>
  );
}
