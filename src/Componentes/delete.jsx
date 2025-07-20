import React from "react";
// Header y Footer son gestionados por LayoutDiseño, no los necesitamos aquí.

export default function Delete() {
  return (
    // Este <main> será el contenido principal dentro del LayoutDiseño.
    <main className="app-main-content px-4 py-8">
      {/* Título corregido para reflejar la operación de eliminación */}
      <h2 className="text-3xl font-bold mb-6 text-center">Eliminar Datos de la Base de Datos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/Imagenes/insert-pagos-bancos.png"
            alt="Pagos Bancos"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Eliminar Pago Banco</h3>
            <p className="text-sm text-gray-600">Formulario para eliminar pagos realizados a bancos.</p>
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
            <h3 className="font-semibold text-lg">Eliminar Pago DIAN</h3>
            <p className="text-sm text-gray-600">Formulario para eliminar pagos de impuestos a la DIAN.</p>
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
            <h3 className="font-semibold text-lg">Eliminar Usuario</h3>
            <p className="text-sm text-gray-600">Eliminar usuarios del sistema.</p>
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
            <h3 className="font-semibold text-lg">Eliminar Rol</h3>
            <p className="text-sm text-gray-600">Elimina los roles permitidos en la plataforma.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
