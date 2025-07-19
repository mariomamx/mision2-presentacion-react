import React from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";

export default function Insert() {
  return (
    <div className="app-container">
  <Header />

  <main className="app-main-content px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="imagenes/imagen1.jpg"
          alt="Insertar Pago Banco"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="imagenes/imagen2.jpg"
          alt="Insertar Pago DIAN"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="imagenes/imagen3.jpg"
          alt="Insertar Usuario"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="imagenes/imagen4.jpg"
          alt="Insertar Rol"
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="imagenes/imagen5.jpg"
          alt="Insertar Rol"
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="imagenes/imagen6.jpg"
          alt="Insertar Rol"
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="imagenes/imagen7.jpg"
          alt="Insertar Rol"
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
        <img
          src="imagenes/imagen8.jpg"
          alt="Insertar Rol"
          className="w-full h-40 object-cover"
        />
      </div>
      

    </div>
  </main>

  <Footer />
</div>

  );
}
