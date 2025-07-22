// src/Componentes/LayoutDiseño.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function LayoutDiseño({ children }) {
  return (
    <>
      <Header />
      <div className="app-container">
        <main className="app-main-content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default LayoutDiseño;
