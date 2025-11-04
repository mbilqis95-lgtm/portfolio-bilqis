import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// IMPORT AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// INISIALISASI AOS
AOS.init({
  duration: 1000,        // durasi animasi
  once: true,           // animasi hanya sekali
  offset: 100           // kapan animasi mulai
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);