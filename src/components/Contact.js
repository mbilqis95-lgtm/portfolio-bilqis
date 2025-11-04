import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Pesan terkirim! Terima kasih telah menghubungi.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Hubungi Saya</h2>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Yuk Ngobrol!</h3>
            <p>
              Ada projek menarik yang ingin dikerjakan bersama? Atau mau tanya- 
              tanya tentang web development? Silahkan hubungi saya lewat form 
              atau kontak di bawah!
            </p>
            <div className="contact-items">
  <div className="contact-item">
    <i className="fas fa-envelope"></i>
    <div className="contact-item-content">
      <h4>Email</h4>
      <p>malikalbilqis0512@email.com</p>
    </div>
  </div>
  
  <div className="contact-item">
    <i className="fas fa-phone"></i>
    <div className="contact-item-content">
      <h4>Telepon</h4>
      <p>+62 822-2944-1004</p>
    </div>
  </div>
  
  <div className="contact-item">
    <i className="fas fa-map-marker-alt"></i>
    <div className="contact-item-content">
      <h4>Lokasi</h4>
      <p>Probolinggo, Indonesia</p>
    </div>
  </div>
</div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <div className="form-group" data-aos="fade-up" data-aos-delay="100">
              <input
                type="text"
                name="name"
                placeholder="Nama Lengkap"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-delay="200">
              <input
                type="email"
                name="email"
                placeholder="Alamat Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-delay="300">
              <textarea
                name="message"
                placeholder="Pesan Anda"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" data-aos="zoom-in" data-aos-delay="400">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;