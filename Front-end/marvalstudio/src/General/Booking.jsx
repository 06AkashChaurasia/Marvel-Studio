import React, { useState } from 'react';
import Header from '../comman/Header';
import Navbar from '../comman/Navbar';
import Footer from '../comman/Footer';
import { Calendar, Clock, User, Mail, Smartphone, Camera } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });
  const [price, setPrice] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const services = [
    {
      title: 'Wedding Photography',
      poster:
       'https://static.vecteezy.com/system/resources/thumbnails/041/929/902/small/ai-generated-an-indian-bride-and-groom-in-traditional-wedding-attire-exchanging-garlands-during-a-ritual-in-their-marriage-ceremony-photo.jpg',
      price: 15000,
    },
    {
      title: 'Pre-Wedding Photography',
      poster:
        'https://akshitphotography.com/wp-content/uploads/2022/04/Lotus-vally-768x512.jpg',
      price: 7000,
    },
    {
      title: 'Kids Photography',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddqMHVbPSthvDTaQT3O5eh35WwqS8Eaghiw&s',
      price: 5000,
    },
    {
      title: 'Business Photography',
      poster:
        'data:image/jpeg;base64,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',
      price: 6000,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update price when service changes
    if (name === 'service') {
      const selected = services.find((p) => p.title === value);
      if (selected) setPrice(selected.price);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSubmitted(false);

    try {
        const response = await fetch('http://localhost:5000/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData, price }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.msg || 'Something went wrong');
        }

        await response.json(); // You can handle the response data here if needed
        setSubmitted(true);
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
        });
        setPrice(0);
        
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
  };

  const ServiceCard = ({ title, poster, price }) => (
    <div
      className={`package-card ${formData.service === title ? 'selected' : ''}`}
      onClick={() => handleChange({ target: { name: 'service', value: title } })}
    >
      <img src={poster} alt={title} className="package-img" />
      <div className="package-info">
        <h3>{title}</h3>
        <p>₹{price}</p>
      </div>
    </div>
  );

  return (
    <div>
      {/* ===== CSS Styles (unchanged) ===== */}
      <style>{`
        .hero { position: relative; text-align: center; color: white; padding: 4rem 1rem; background-image: url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?fit=crop&w=1500&q=80'); background-size: cover; background-position: center; }
        .hero::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.6); }
        .hero-content { position: relative; z-index: 10; }
        .hero h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem; }
        .hero p { font-size: 1rem; font-style: italic; }
        @media (min-width: 640px) { .hero h1 { font-size: 3.5rem; } .hero p { font-size: 1.2rem; } }
        .packages-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media(min-width: 640px) { .packages-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(min-width: 768px) { .packages-grid { grid-template-columns: repeat(4, 1fr); } }
        .package-card { border: 2px solid #d1d5db; border-radius: 1rem; overflow: hidden; cursor: pointer; transition: transform 0.3s, border-color 0.3s; background: white; }
        .package-card.selected { border-color: #f59e0b; box-shadow: 0 0 15px rgba(245,158,11,0.4); }
        .package-card:hover { transform: scale(1.05); }
        .package-img { width: 100%; height: 14rem; object-fit: cover; }
        .package-info { padding: 0.5rem; text-align: center; }
        .package-info h3 { font-weight: 600; }
        .package-info p { color: #d97706; font-weight: 500; }
        .booking-form { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media(min-width: 768px) { .booking-form { grid-template-columns: repeat(2, 1fr); } }
        .booking-input { display: flex; flex-direction: column; }
        .booking-input label { font-weight: 600; margin-bottom: 0.25rem; }
        .booking-input div { display: flex; align-items: center; border: 1px solid #d1d5db; border-radius: 0.5rem; padding: 0.5rem; }
        .booking-input input, .booking-input select { flex: 1; outline: none; border: none; background: transparent; }
        .submit-btn { display: inline-block; padding: 0.75rem 2rem; background: #f59e0b; color: white; font-weight: bold; border-radius: 9999px; transition: transform 0.3s, background 0.3s; }
        .submit-btn:hover { background: #d97706; transform: scale(1.05); }
        .price-display { text-align: center; font-size: 1.25rem; font-weight: 600; color: #f59e0b; margin-top: 1.5rem; }
        .confirmation { text-align: center; color: #16a34a; font-weight: 600; margin-top: 1rem; }
        .error { text-align: center; color: #ef4444; font-weight: 600; margin-top: 1rem; }
      `}</style>

      <Header />
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Photo Studio Booking</h1>
          <p>Capture your beautiful moments — book your professional photoshoot today!</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">
          Choose Your Photography Service
        </h2>
        <div className="packages-grid">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-6 md:p-8 border-t-4 border-amber-600">
          <h3 className="text-2xl font-bold mb-6 text-center text-amber-800">
            Book Your Photoshoot
          </h3>

          <form onSubmit={handleSubmit} className="booking-form">
            {[
              { label: 'Full Name', icon: <User className="w-5 h-5 mr-2 text-amber-700" />, type: 'text', name: 'name', placeholder: 'Enter your name' },
              { label: 'Email', icon: <Mail className="w-5 h-5 mr-2 text-amber-700" />, type: 'email', name: 'email', placeholder: 'Enter your email' },
              { label: 'Phone', icon: <Smartphone className="w-5 h-5 mr-2 text-amber-700" />, type: 'tel', name: 'phone', placeholder: 'Enter phone number' },
              { label: 'Date', icon: <Calendar className="w-5 h-5 mr-2 text-amber-700" />, type: 'date', name: 'date' },
              { label: 'Time', icon: <Clock className="w-5 h-5 mr-2 text-amber-700" />, type: 'select', name: 'time', options: ['10:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'] },
              { label: 'Service', icon: <Camera className="w-5 h-5 mr-2 text-amber-700" />, type: 'select', name: 'service', options: ['Wedding Photography', 'Pre-Wedding Photography', 'Kids Photography', 'Business Photography'] },
            ].map((field) => (
              <div className="booking-input" key={field.name}>
                <label>{field.label}</label>
                <div>
                  {field.icon}
                  {field.type === 'select' ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder || ''}
                    />
                  )}
                </div>
              </div>
            ))}
          </form>

          {price > 0 && (
            <div className="price-display">Estimated Total: ₹{price}</div>
          )}

          <div className="text-center mt-6">
            <button onClick={handleSubmit} className="submit-btn" disabled={loading}>
              {loading ? 'Booking...' : 'Confirm Booking'}
            </button>
          </div>

          {submitted && (
            <p className="confirmation">✅ Booking Confirmed! We’ll contact you soon.</p>
          )}

          {error && (
            <p className="error">❌ {error}</p>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}