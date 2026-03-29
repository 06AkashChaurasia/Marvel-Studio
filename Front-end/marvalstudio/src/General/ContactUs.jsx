import React, { useState } from 'react';
import Header from '../comman/Header';
import Navbar from '../comman/Navbar';
import Footer from '../comman/Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <Navbar />

      {/* Page Title */}
      <section
        style={{
          padding: '80px 20px',
          textAlign: 'center',
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          color: '#fff',
        }}
      >
        <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold' }}>Contact Us</h1>
        <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
          We’d love to hear from you! Fill out the form below or reach out to us directly.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '50px',
          padding: '60px 20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {/* Contact Info */}
        <div
          style={{
            maxWidth: '400px',
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
          }}
        >
          <h2 style={{ marginBottom: '20px' }}>Our Contact Info</h2>
          <p><strong>Address:</strong> 123 Photography Lane, Varanasi, India</p>
          <p><strong>Email:</strong> info@marvelstudio.com</p>
          <p><strong>Phone:</strong> +91 9341020167</p>
          <p><strong>Working Hours:</strong> Mon-Sat, 10:00 AM - 7:00 PM</p>
        </div>

        {/* Contact Form */}
        <div
          style={{
            maxWidth: '500px',
            width: '100%',
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ marginBottom: '20px' }}>Send Us a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={handleSubmit}>
            {['name', 'email', 'subject'].map((field) => (
              <input
                key={field}
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                required
                style={{
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                  transition: 'border 0.3s',
                }}
                onFocus={(e) => (e.currentTarget.style.border = '2px solid #ff7e5f')}
                onBlur={(e) => (e.currentTarget.style.border = '1px solid #ccc')}
              />
            ))}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '16px',
                resize: 'none',
                transition: 'border 0.3s',
              }}
              onFocus={(e) => (e.currentTarget.style.border = '2px solid #ff7e5f')}
              onBlur={(e) => (e.currentTarget.style.border = '1px solid #ccc')}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: '15px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Send Message
            </button>
          </form>
          {successMsg && (
            <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold', textAlign: 'center' }}>
              {successMsg}
            </p>
          )}
        </div>
      </section>

      {/* Google Map */}
      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Find Us Here</h2>
        <iframe
          title="Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456!2d82.9739!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1xxxxxxxxxxxx%3A0xxxxxxxxxxxxxxxx!2sPixelPerfect%20Studio!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}
