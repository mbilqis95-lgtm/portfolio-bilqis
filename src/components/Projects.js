import React, { useState } from 'react';
import './Projects.css';
import lightCardImage from '../assets/light-card-project.jpg';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Lampu Card Otomatis',
      description: 'adalah sistem penghematan energi cerdas yang berbasis kartu akses. Sistem ini secara otomatis menyalakan dan memutus semua daya listrik ruangan (lampu, AC, dll.) hanya berdasarkan keberadaan kartu di card reader-nya. Dengan kemampuan IoT, sistem ini memfasilitasi pengawasan penggunaan energi real-time untuk efisiensi dan manajemen properti modern. ',
      image: lightCardImage,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/bilqis/light-cards',
      demo: '#',
      features: ['Kontrol Lewat HP', 'Hanya Kartu Resmi yang Boleh Masuk', 'Pengaturan Jadwal Daya']
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyek Terbaru</h2>
        <div className="projects-single">
          {projects.map((project) => (
            <div key={project.id} className="project-single-card">
              <div 
                className="project-single-image clickable-image"
                onClick={() => openModal(project.image)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-single-real-image"
                />
                <div className="click-overlay">
                  <span>🔍 Lihat</span>
                </div>
              </div>
              <div className="project-single-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>✅ Fitur Utama :</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies-single">
                  <h4>🛠️ Teknologi yang Digunakan:</h4>
                  <div className="tech-tags-single">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag-single">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links-single">
                  <a href={project.github} className="btn btn-outline">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL UNTUK GAMBAR BESAR */}
        {selectedImage && (
          <div className="image-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>×</button>
              <img 
                src={selectedImage} 
                alt="Preview" 
                className="modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;