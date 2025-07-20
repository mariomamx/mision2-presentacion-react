// src/Componentes/insert.jsx
import React from "react";
// Ya no necesitamos importar Header ni Footer aquí, LayoutDiseño los gestiona.
// import Header from "../Componentes/Header";
// import Footer from "../Componentes/Footer";

export default function Insert() {
  return (
    // <main> será el contenido principal que se insertará dentro del LayoutDiseño
    // que ya proporciona el .app-container y su propia etiqueta <main>.
    // No duplicamos el Header/Footer ni el .app-container aquí.
    <main className="app-main-content px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/imagen1.jpg" // Ruta corregida a /Imagenes/
            alt="Insertar Pago Banco"
            className="w-full h-40 object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/imagen2.jpg" // Ruta corregida a /Imagenes/
            alt="Insertar Pago DIAN"
            className="w-full h-40 object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/imagen3.jpg" // Ruta corregida a /Imagenes/
            alt="Insertar Usuario"
            className="w-full h-40 object-cover"
          />
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/imagen4.jpg" // Ruta corregida a /Imagenes/
            alt="Insertar Rol"
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/imagen5.jpg" // Ruta corregida a /Imagenes/
            alt="Insertar Rol"
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/imagen6.jpg" // Ruta corregida a /Imagenes/
            alt="Insertar Rol"
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/imagen7.jpg" // Ruta corregida a /Imagenes/
            alt="Insertar Rol"
            className="w-full h-40 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/imagen8.jpg" // Ruta corregida a /Imagenes/
            alt="Insertar Rol"
            className="w-full h-40 object-cover"
          />
        </div>
      </div>
    </main>
  );
}