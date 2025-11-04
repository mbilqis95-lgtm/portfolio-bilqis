import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Tentang Saya</h2>
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p>
              Saya adalah seorang pelajar yang sangat tertarik dengan dunia  pemrograman dan teknologi. 
              Saat ini saya sedang belajar mengembangkan website dan aplikasi menggunakan React.js. 
            </p>
            <p>
              Saya senang mempelajari hal-hal baru dan ingin menjadi developer yang handal. Cita-cita 
              saya adalah bisa membuat aplikasi yang bermanfaat bagi banyak orang. 
            </p>
            <div className="about-stats">
              <div className="stat" data-aos="zoom-in" data-aos-delay="100">
                <h3>15</h3>
                <p>Proyek Selesai</p>
              </div>
              <div className="stat" data-aos="zoom-in" data-aos-delay="200">
                <h3>1</h3>
                <p>Tahun Pengalaman</p>
              </div>
              <div className="stat" data-aos="zoom-in" data-aos-delay="300">
                <h3>10</h3>
                <p>Klien Puas</p>
              </div>
            </div>
          </div>
          <div className="about-image" data-aos="fade-left">
            <div className="image-frame">
              <i className="fas fa-code"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;