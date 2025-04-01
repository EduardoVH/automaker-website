import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logo from "./assets/logo_white_letters.png";
import promoImg1 from "./assets/promo_img_1.png";
import promoImg2 from "./assets/promo_img_2.png";
import promoVideo from "./assets/company_promo_video.mp4";
import extraVideo from "./assets/product_promo_video.mp4";
import productImage from "./assets/product_image.png";
import instagramLogo from "./assets/instagram.png";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-primary">Bienvenido a AutoMaker</h1>
      <p>Automatización y monitoreo de granjas de impresión 3D</p>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={promoImg1} alt="Promo 1" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <img src={promoImg2} alt="Promo 2" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container text-center mt-5">
      <h2>Sobre Nosotros</h2>
      <p>AutoMaker es una plataforma innovadora para la gestión y automatización de impresoras 3D.</p>
      <p>Facilitamos la administración de múltiples impresoras con una solución integral de software y hardware.</p>
      <img src={productImage} alt="Producto" className="img-fluid rounded mt-3" width="500" />
    </div>
  );
}

function Pricing() {
  return (
    <div className="container text-center mt-5">
      <h2>Precios y Paquetes</h2>
      <table className="table table-striped table-hover table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th>Plan</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Básico</td><td>$9.99/mes</td></tr>
          <tr><td>Pro</td><td>$19.99/mes</td></tr>
          <tr><td>Empresarial</td><td>Contactar para cotización</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function Videos() {
  const [currentVideo, setCurrentVideo] = useState(promoVideo);
  const [title, setTitle] = useState("Empresa");

  const toggleVideo = () => {
    if (currentVideo === promoVideo) {
      setCurrentVideo(extraVideo);
      setTitle("Producto");
    } else {
      setCurrentVideo(promoVideo);
      setTitle("Empresa");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Videos Promocionales</h2>
      <h4>{title}</h4>
      <video key={currentVideo} width="600" controls className="mt-3">
        <source src={currentVideo} type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
      <button className="btn btn-primary mt-3" onClick={toggleVideo}>Cambiar Video</button>
    </div>
  );
}

function Contact() {
  return (
    <div className="container text-center mt-5">
      <h2>Contacto</h2>
      <p>Email: contacto@automaker.com</p>
      <a href="https://www.instagram.com/automaker_official/" target="_blank" rel="noopener noreferrer">
        <img src={instagramLogo} alt="Instagram" width="50" />
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="AutoMaker" width="120" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">Nosotros</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/pricing">Precios</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/videos">Videos</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;