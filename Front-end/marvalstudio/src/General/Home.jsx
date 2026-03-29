import React from 'react';
import Header from '../comman/Header';
import Navbar from '../comman/Navbar';
import Footer from '../comman/Footer';
import Slider from '../Slider';

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />

      {/* --- Section 1: "Photos speak volumes..." --- */}
      <section style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ marginBottom: '20px' }}>
          <span style={{ fontSize: '40px', color: '#D4AF37' }}>📸</span>
        </div>
        <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '40px' }}>
          Photos speak volumes about not just that captured moment <br /> but about that entire occasion
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', maxWidth: '900px', margin: '0 auto', flexWrap: 'wrap' }}>
          <p style={{ flex: '1', lineHeight: '1.6', color: '#666', textAlign: 'left' }}>
            The people who came together and the joy that was shared. Photography is a divine invention to mankind and the Marvel Studio team takes their craft seriously. Touted as one of the best photographers in Varanasi, Marvel Studio offers
          </p>
          <p style={{ flex: '1', lineHeight: '1.6', color: '#666', textAlign: 'left' }}>
            a variety of services like candid wedding photography, pre-wedding photography, classical dance photoshoots, family portrait photography, business photoshoots, kids photoshoots and alliance photography.
          </p>
        </div>
      </section>

      {/* --- Section 2: "Why Choose Us?" --- */}
      <section style={{ padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333', marginBottom: '50px' }}>
          Why Choose Us?
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>

          {/* Creative Team Card */}
          <div style={{
            flex: '1',
            border: '1px solid #ddd',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '300px',
            transition: 'all 0.3s ease-in-out',
            position: 'relative',
            overflow: 'hidden',
          }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <span style={{ fontSize: '40px', color: '#D4AF37', marginBottom: '15px', display: 'block' }}>✨</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Creative Team</h3>
            <p style={{ color: '#666' }}>
              Every member has a keen eye and carries the Marvel Studio aesthetic, and hence no moment goes amiss.
            </p>
          </div>

          {/* Professional Approach Card */}
          <div style={{
            flex: '1',
            border: '1px solid #ddd',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '300px',
            transition: 'all 0.3s ease-in-out',
            position: 'relative',
            overflow: 'hidden',
          }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <span style={{ fontSize: '40px', color: '#D4AF37', marginBottom: '15px', display: 'block' }}>📄</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Professional Approach</h3>
            <p style={{ color: '#666' }}>
              In this happiness industry, we bring a structure to our work and take the pains of planning away from our customers.
            </p>
          </div>

          {/* Hand Holding Card */}
          <div style={{
            flex: '1',
            border: '1px solid #ddd',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '300px',
            transition: 'all 0.3s ease-in-out',
            position: 'relative',
            overflow: 'hidden',
          }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <span style={{ fontSize: '40px', color: '#D4AF37', marginBottom: '15px', display: 'block' }}>🌿</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Hand Holding</h3>
            <p style={{ color: '#666' }}>
              It matters a bit more if what you think is exactly what we plan to provide, the feeling is sweet right? Come, experience this with us.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
