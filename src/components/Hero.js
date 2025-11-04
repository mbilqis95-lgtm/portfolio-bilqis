import React from 'react';
import './Hero.css';
import fotoBilqis from '../assets/foto-bilqis.jpg'; // IMPORT FOTO KAMU

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Halo, Saya <span className="highlight">Bilqis</span></h1>
            <h2>Full Stack Developer</h2>
            <p>
              Saya suka bikin website yang keren dan mudah dipakai!
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">Lihat Proyek Saya</a>
              <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
            </div>
          </div>
          
          {/* BAGIAN FOTO */}
          <div className="hero-image">
            <img 
              src={fotoBilqis}  // PAKAI FOTO IMPORT
              alt="Foto Bilqis" 
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;