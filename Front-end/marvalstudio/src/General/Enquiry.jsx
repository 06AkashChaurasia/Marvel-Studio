import React, { useState } from 'react';
import Header from '../comman/Header';
import Navbar from '../comman/Navbar';
import Footer from '../comman/Footer';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const response = await fetch('http://localhost:5000/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong on the server.');
      }

      await response.json(); // Data saved successfully
      setSuccessMsg(`Thank you, ${formData.name}! Your enquiry has been submitted.`);
      // Clear the form
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMsg('Failed to submit enquiry. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <Navbar />

      {/* Page Title Section */}
      <section
        style={{
          padding: '80px 20px',
          textAlign: 'center',
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold' }}>Enquiry</h1>
        <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
          Have a question or want to book a session? Fill out the form below and we will get back to you.
        </p>
      </section>

      {/* Enquiry Form Section */}
      <section style={{ display: 'flex', justifyContent: 'center', padding: '60px 20px' }}>
        <div
          style={{
            maxWidth: '600px',
            width: '100%',
            backgroundColor: '#fff',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
          }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
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
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
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
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
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
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
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
            <textarea
              name="message"
              placeholder="Your Message"
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
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </form>

          {/* Success Message */}
          {successMsg && (
            <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold', textAlign: 'center' }}>
              {successMsg}
            </p>
          )}

          {/* Error Message */}
          {errorMsg && (
            <p style={{ marginTop: '20px', color: 'red', fontWeight: 'bold', textAlign: 'center' }}>
              {errorMsg}
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}