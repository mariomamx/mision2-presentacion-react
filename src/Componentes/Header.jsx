// src/Componentes/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-text-container">
        <h1 className="main-title">Accounting Project Company</h1>
        <p className="project-tagline">Backend & Database - Misión 2</p>
      </div>

      <div className="nav-buttons">
        <a
          href="https://accounting-project-companies.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="header-button btn-mision1-render"
        >
          Ver Misión 1 (Frontend)
        </a>

        <Link to="/diagrama" className="header-button">Diagrama ER</Link>
        <Link to="/insert" className="header-button">Insertar</Link>
        <Link to="/update" className="header-button">Actualizar</Link>
        <Link to="/delete" className="header-button">Eliminar</Link>
      </div>
    </header>
  );
}

export default Header;
