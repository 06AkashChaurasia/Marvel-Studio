import React, { useState } from 'react';
import Header from '../comman/Header';
import Navbar from '../comman/Navbar';
import Footer from '../comman/Footer';

// Wedding Photos
import wedding1 from '../assets/wedding1.jpg';
import wedding2 from '../assets/wedding2.jpg';
import wedding3 from '../assets/wedding3.jpg';
import wedding4 from '../assets/wedding4.jpg';
import wedding5 from '../assets/wedding5.jpg';
import wedding6 from '../assets/wedding6.jpg';
import wedding7 from '../assets/wedding7.jpg';
import wedding8 from '../assets/wedding8.jpg';
import wedding9 from '../assets/wedding9.jpg';
import wedding10 from '../assets/wedding10.jpg';

// Pre-Wedding Photos
import pre1 from '../assets/pre1.jpg';
import pre2 from '../assets/pre2.jpg';
import pre3 from '../assets/pre3.jpg';
import pre4 from '../assets/pre4.jpg';
import pre5 from '../assets/pre5.jpg';
import pre6 from '../assets/pre6.jpg';
import pre7 from '../assets/pre7.jpg';
import pre8 from '../assets/pre8.jpg';
import pre9 from '../assets/pre9.jpg';
import pre10 from '../assets/pre10.jpg';

// Kids Photoshoot
import kids1 from '../assets/kids1.jpg';
import kids2 from '../assets/kids2.jpg';
import kids3 from '../assets/kids3.jpg';
import kids4 from '../assets/kids4.jpg';
import kids5 from '../assets/kids5.jpg';
import kids6 from '../assets/kids6.jpg';
import kids7 from '../assets/kids7.jpg';
import kids8 from '../assets/kids8.jpg';
import kids9 from '../assets/kids9.jpg';
import kids10 from '../assets/kids10.jpg';

// Business Photos
import business1 from '../assets/business1.jpg';
import business2 from '../assets/business2.jpg';
import business3 from '../assets/business3.jpg';
import business4 from '../assets/business4.jpg';
import business5 from '../assets/business5.jpg';
import business6 from '../assets/business6.jpg';
import business7 from '../assets/business7.jpg';
import business8 from '../assets/business8.jpg';
import business9 from '../assets/business9.jpg';
import business10 from '../assets/business10.jpg';

// Gallery Images Data
const galleryImages = [
  // Wedding
  { id: 1, src: wedding1, category: 'Wedding', title: 'Beautiful Wedding Moment' },
  { id: 2, src: wedding2, category: 'Wedding', title: 'Wedding Celebration' },
  { id: 3, src: wedding3, category: 'Wedding', title: 'Romantic Couple Shot' },
  { id: 4, src: wedding4, category: 'Wedding', title: 'Wedding Ceremony' },
  { id: 5, src: wedding5, category: 'Wedding', title: 'Bride & Groom Smile' },
  { id: 6, src: wedding6, category: 'Wedding', title: 'Ring Exchange Moment' },
  { id: 7, src: wedding7, category: 'Wedding', title: 'First Dance' },
  { id: 8, src: wedding8, category: 'Wedding', title: 'Candid Couple Photo' },
  { id: 9, src: wedding9, category: 'Wedding', title: 'Outdoor Wedding Scene' },
  { id: 10, src: wedding10, category: 'Wedding', title: 'Wedding Party Fun' },

  // Pre-wedding
  { id: 11, src: pre1, category: 'Pre-wedding', title: 'Romantic Couple Pose' },
  { id: 12, src: pre2, category: 'Pre-wedding', title: 'Nature Theme Shoot' },
  { id: 13, src: pre3, category: 'Pre-wedding', title: 'Sunset Couple' },
  { id: 14, src: pre4, category: 'Pre-wedding', title: 'Studio Couple Portrait' },
  { id: 15, src: pre5, category: 'Pre-wedding', title: 'Traditional Pre-wedding' },
  { id: 16, src: pre6, category: 'Pre-wedding', title: 'Beach Photoshoot' },
  { id: 17, src: pre7, category: 'Pre-wedding', title: 'Cityscape Couple' },
  { id: 18, src: pre8, category: 'Pre-wedding', title: 'Fun Pre-wedding Pose' },
  { id: 19, src: pre9, category: 'Pre-wedding', title: 'Luxury Theme Shoot' },
  { id: 20, src: pre10, category: 'Pre-wedding', title: 'Romantic Studio Shot' },

  // Kids Photos
  { id: 21, src: kids1, category: 'Kids Photoshoot', title: 'Cute Smile' },
  { id: 22, src: kids2, category: 'Kids Photoshoot', title: 'Playful Moment' },
  { id: 23, src: kids3, category: 'Kids Photoshoot', title: 'Birthday Celebration' },
  { id: 24, src: kids4, category: 'Kids Photoshoot', title: 'Studio Pose' },
  { id: 25, src: kids5, category: 'Kids Photoshoot', title: 'Outdoor Kids Shoot' },
  { id: 26, src: kids6, category: 'Kids Photoshoot', title: 'Candid Expression' },
  { id: 27, src: kids7, category: 'Kids Photoshoot', title: 'Family Portrait' },
  { id: 28, src: kids8, category: 'Kids Photoshoot', title: 'Baby Laugh' },
  { id: 29, src: kids9, category: 'Kids Photoshoot', title: 'Sibling Fun' },
  { id: 30, src: kids10, category: 'Kids Photoshoot', title: 'Cute Toddler Moment' },

  // Business Photos
  { id: 31, src: business1, category: 'Business Photos', title: 'Corporate Portrait' },
  { id: 32, src: business2, category: 'Business Photos', title: 'Professional Headshot' },
  { id: 33, src: business3, category: 'Business Photos', title: 'Office Team' },
  { id: 34, src: business4, category: 'Business Photos', title: 'Conference Moment' },
  { id: 35, src: business5, category: 'Business Photos', title: 'Studio Branding Shoot' },
  { id: 36, src: business6, category: 'Business Photos', title: 'Team Discussion' },
  { id: 37, src: business7, category: 'Business Photos', title: 'Creative Workspace' },
  { id: 38, src: business8, category: 'Business Photos', title: 'Modern Office Portrait' },
  { id: 39, src: business9, category: 'Business Photos', title: 'Entrepreneur Shot' },
  { id: 40, src: business10, category: 'Business Photos', title: 'Corporate Event' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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
        <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px' }}>
          Our Gallery
        </h1>
        <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Explore our photography works from weddings, pre-weddings, kids shoots, and business portraits.
        </p>
      </section>

      {/* Categories */}
      <section style={{ textAlign: 'center', margin: '40px 0' }}>
        {['All', 'Wedding', 'Pre-wedding', 'Kids Photoshoot', 'Business Photos'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              margin: '0 12px',
              padding: '12px 25px',
              borderRadius: '30px',
              border: 'none',
              fontWeight: '600',
              fontSize: '16px',
              backgroundColor: selectedCategory === cat ? '#ffda79' : '#ccc',
              color: selectedCategory === cat ? '#333' : '#555',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Gallery Grid */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          padding: '60px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {filteredImages.map((img) => (
          <div
            key={img.id}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '20px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                transition: 'transform 0.3s',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '100%',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                textAlign: 'center',
                padding: '12px',
                fontWeight: '600',
                fontSize: '16px',
              }}
            >
              {img.title}
            </div>
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
          Like What You See?
        </h2>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>
          Book a session with us to capture your unforgettable moments!
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