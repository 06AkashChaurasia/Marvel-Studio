// src/components/Team.jsx
import React from 'react';

// Import member images from assets folder
import pratik from './assets/pratik.jpeg';
import prince from './assets/prince.jpeg';
import mangesh from './assets/mangesh.jpeg';
import raj from './assets/raj.jpeg';
import manjeet from './assets/manjeet.jpeg';
import tabrez from './assets/tabrez.jpeg';
import anurag from './assets/anurag.jpeg';
import sachin from './assets/sachin.jpeg';
import prakash from './assets/prakash.jpeg';
import akash from './assets/akash.jpeg';

import Header from './comman/Header';
import Navbar from './comman/Navbar';
import Footer from './comman/Footer';

// Team Members
const teamMembers = [
  { name: 'Pratik Poddar', role: 'Team Leader', roll: 'MCA2423027', image: pratik, top: true },
  { name: 'Prince Ranjan', role: 'Project Manager', roll: 'MCA2423028', image: prince, top: true },
  { name: 'Mangesh Singh', role: 'Team Member', roll: 'MCA2423019', image: mangesh },
  { name: 'Raj Chaurasiya', role: 'Team Member', roll: 'MCA2423032', image: raj },
  { name: 'Manjeet Yadav', role: 'Team Member', roll: 'MCA2423020', image: manjeet },
  { name: 'Md. Tabrez Sheikh', role: 'Team Member', roll: 'MCA2423051', image: tabrez },
  { name: 'Anurag Chaturvedi', role: 'Team Member', roll: 'MCA2423007', image: anurag },
  { name: 'Sachin Gupta', role: 'Team Member', roll: 'MCA2423036', image: sachin },
  { name: 'Prakash Chaurasiya', role: 'Team Member', roll: 'MCA2423027', image: prakash },
  { name: 'Akash Chaurasiya', role: 'Team Member', roll: 'MCA2423004', image: akash },
];

export default function Team() {
  const topMembers = teamMembers.filter(member => member.top);
  const otherMembers = teamMembers.filter(member => !member.top);

  return (
    <div>
      <Header />
      <Navbar />

      <style>{`
        .team-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 50px;
          color: #ff4c60;
          letter-spacing: 1px;
        }
        .member-photo {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 15px auto;
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
          transition: transform 0.3s;
        }
        .member-photo:hover {
          transform: translateY(-5px) scale(1.05);
        }
        .member-name {
          font-size: 1.1rem;
          font-weight: 600;
        }
        .member-role {
          color: #777;
          margin-bottom: 5px;
        }
        .team-section {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 50px;
          margin-bottom: 60px;
        }
      `}</style>

      <div className="container my-5">
        <h2 className="team-title">Our Team - ERROR 404</h2>

        {/* Top Members: Leader + Manager */}
        <div className="team-section">
          {topMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="member-photo">
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h5 className="member-name">{member.name}</h5>
              <p className="member-role">{member.role}</p>
              <p><strong>Roll No:</strong> {member.roll}</p>
            </div>
          ))}
        </div>

        {/* Other Members */}
        <div className="team-section">
          {otherMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="member-photo">
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h5 className="member-name">{member.name}</h5>
              <p className="member-role">{member.role}</p>
              <p><strong>Roll No:</strong> {member.roll}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
