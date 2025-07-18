import React from "react";
import "./App.css";

import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="app-main-content">
        <section className="section-block">
          <h2>Proyecto: Accounting Project Company - Backend & Database</h2>
          <p>
            <strong>Sector:</strong> Contabilidad y Finanzas / Gestión Empresarial
          </p>
        </section>

        <section className="section-block">
          <h2>Integrantes del Grupo</h2>
          <ul className="team-list">
            <li>
              <strong>Breyner Alexander Torrado Rodriguez:</strong> Backend Developer / SQL
              <img src="/Imagenes/Breyner.jpg" alt="Foto de Breyner Alexander Torrado Rodriguez" className="team-member-photo" />
            </li>
            <li>
              <strong>Yeison Estiben Rojas Riaño:</strong> Diseñador del modelo ER y Db en PostgreSQL
              <img src="/Imagenes/Yeison.jpg" alt="Foto de Yeison Estiben Rojas Riaño" className="team-member-photo" />
            </li>
            <li>
              <strong>Mario Angulo Moncada:</strong> Frontend Presentación
              <img src="/Imagenes/Mario.jpg" alt="Foto de Mario Angulo Moncada" className="team-member-photo" />
            </li>
          </ul>
        </section>

        <section className="section-block">
          <h2>Descripción del Proyecto</h2>
          <p>
            Este proyecto complementa la aplicación frontend "Accounting Project Company" (Misión 1), centrándose en la creación y gestión de una **base de datos relacional en PostgreSQL**. Su objetivo es almacenar de forma persistente todos los **pagos a bancos y DIAN**, permitiendo que la aplicación gestione información de manera segura y efectiva a largo plazo.
          </p>
        </section>

        <section className="section-block">
          <h2>Modelo Entidad-Relación (ER)</h2>
          <p>
            Aquí puedes ver la estructura diseñada para nuestra base de datos, mostrando las entidades clave y sus relaciones:
          </p>
          <img
            src="/Imagenes/modelo_er.png"
            alt="Modelo Entidad-Relación de la base de datos para Accounting Project Company"
            className="er-diagram"
          />
          <p className="image-caption">
            Diagrama Entidad-Relación que ilustra las entidades `Pagos_Bancos` y `Pagos_DIAN` y sus atributos.
          </p>
        </section>

        <section className="section-block">
          <h2>Operaciones de Prueba SQL (CRUD)</h2>
          <p>
            Hemos realizado pruebas funcionales de las operaciones de Inserción, Actualización y Eliminación para validar la consistencia y el manejo de los datos en PostgreSQL.
          </p>

          <div className="crud-operations">
            <h3>1. Insert (Inserción)</h3>
            <p>
              Se insertaron nuevos registros en las tablas `pagos_bancos` y `pagos_dian` para simular la creación de datos y poblar la base.
            </p>
            <img
              src="/Imagenes/captura_insert.png"
              alt="Captura de pantalla de la operación INSERT en pgAdmin"
              className="crud-screenshot"
            />
            <p className="image-caption">
              Captura de pantalla de pgAdmin mostrando la inserción de nuevos registros.
            </p>
            <p>
              <a
                href="https://gist.github.com/tu_usuario_github/id_de_tu_gist_insert"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Script SQL de Inserción (ejemplo)
              </a>
            </p>

            <h3>2. Update (Actualización)</h3>
            <p>
              Se actualizaron campos específicos de pagos existentes para verificar la modificación de datos en la base.
            </p>
            <img
              src="/Imagenes/captura_update.png"
              alt="Captura de pantalla de la operación UPDATE en pgAdmin"
              className="crud-screenshot"
            />
            <p className="image-caption">
              Captura de pantalla de pgAdmin mostrando una actualización de datos.
            </p>
            <p>
              <a
                href="https://gist.github.com/tu_usuario_github/id_de_tu_gist_update"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Script SQL de Actualización (ejemplo)
              </a>
            </p>

            <h3>3. Delete (Eliminación)</h3>
            <p>
              Se eliminaron registros de pagos que ya no eran necesarios, asegurando el correcto manejo de la eliminación de datos en la base.
            </p>
            <img
              src="/Imagenes/captura_delete.png"
              alt="Captura de pantalla de la operación DELETE en pgAdmin"
              className="crud-screenshot"
            />
            <p className="image-caption">
              Captura de pantalla de pgAdmin mostrando la eliminación de datos.
            </p>
            <p>
              <a
                href="https://gist.github.com/tu_usuario_github/id_de_tu_gist_delete"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Script SQL de Eliminación (ejemplo)
              </a>
            </p>
          </div>
        </section>

        <section className="section-block">
          <h2>Despliegue en Render</h2>
          <p>
            Nuestra base de datos PostgreSQL se encuentra desplegada en la plataforma Render, garantizando la persistencia y disponibilidad de los datos.
          </p>
          <p>
            <strong>URL del Proyecto en Render (Base de Datos):</strong>{" "}
            <a
              href="[Pega aquí el link real de tu base de datos o API backend en Render]"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://accounting-project-companies-db.onrender.com/
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;