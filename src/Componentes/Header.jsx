import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      {/* Botón movido al principio */}
      <a
        href="https://accounting-project-companies.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-mision1-render"
      >
        Ver Misión 1 (Frontend)
      </a>

      {/* Contenedor de texto */}
      <div className="header-text-container">
        <h1>Proyecto Colaborativo Misión 2 - SQL</h1>
        <p className="project-tagline">
          Presentación de la Base de Datos y Operaciones CRUD para "Accounting Project Company"
        </p>
      </div>
    </header>
  );
}

export default Header;