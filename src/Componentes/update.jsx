// src/Componentes/update.jsx
import React from "react";
// Eliminamos las importaciones de Header y Footer, ya que LayoutDiseño los maneja
// import Header from "../Componentes/Header";
// import Footer from "../Componentes/Footer";

export default function Update() {
  return (
    // Eliminamos el div "app-container" y el Header/Footer.
    // El contenido de este componente será el 'children' del LayoutDiseño.
    <main className="app-main-content px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Actualizar Datos en la Base de Datos</h2> {/* ¡Título Corregido! */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/insert-pagos-bancos.png" // Las rutas de imágenes están bien
            alt="Pagos Bancos"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Actualizar Pago Banco</h3>
            <p className="text-sm text-gray-600">Formulario para actualizar pagos realizados a bancos.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/insert-pagos-dian.png"
            alt="Pagos DIAN"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Actualizar Pago DIAN</h3>
            <p className="text-sm text-gray-600">Formulario para actualizar pagos de impuestos a la DIAN.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/insert-usuarios.png"
            alt="Usuarios"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Actualizar Usuario</h3>
            <p className="text-sm text-gray-600">Modificar usuarios del sistema y su rol correspondiente.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/insert-roles.png"
            alt="Roles"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Actualizar Rol</h3>
            <p className="text-sm text-gray-600">Gestiona los roles permitidos en la plataforma.</p>
          </div>
        </div>
      </div>
    </main>
  );
}