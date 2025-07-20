// src/Componentes/LayoutDiseño.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function LayoutDiseño({ children }) {
  return (
    // Quitamos .app-container de aquí
    <> {/* Fragmento de React para envolver múltiples elementos sin un div extra */}
      <Header /> {/* El Header ahora está directamente dentro del body/html */}
      <div className="app-container"> {/* Este div ahora solo contendrá el contenido principal */}
        <main className="app-main-content">
          {children}
        </main>
      </div>
      <Footer /> {/* El Footer ahora también está directamente dentro del body/html */}
    </>
  );
}

export default LayoutDiseño;