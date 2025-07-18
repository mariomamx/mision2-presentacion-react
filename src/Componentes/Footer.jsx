import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <p>
        &copy; {new Date().getFullYear()} Proyecto Colaborativo Misión 2 - Accounting Project Company. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;