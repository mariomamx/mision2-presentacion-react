// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import '../App.css';


import LayoutDiseño from './LayoutDiseño';
import Diagrama from './diagrama';
import Insert from './insert';
import Update from './update';
import Delete from './delete';

function Home() {
  return (
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
            <img
              src="/Imagenes/Breyner.jpg"
              alt="Foto de Breyner Alexander Torrado Rodriguez"
              className="team-member-photo"
            />
          </li>
          <li>
            <strong>Yeison Estiben Rojas Riaño:</strong> Diseñador del modelo ER y Db en PostgreSQL
            <img
              src="/Imagenes/Yeison.jpg"
              alt="Foto de Yeison Estiben Rojas Riaño"
              className="team-member-photo"
            />
          </li>
          <li>
            <strong>Mario Angulo Moncada:</strong> Frontend Presentación
            <img
              src="/Imagenes/Mario.jpg"
              alt="Foto de Mario Angulo Moncada"
              className="team-member-photo"
            />
          </li>
        </ul>
      </section>

      <section className="section-block">
        <h2>Descripción del Proyecto</h2>
        <p>
          Este proyecto complementa la aplicación frontend "Accounting Project Company" (Misión 1),
          centrándose en la creación y gestión de una <strong>base de datos relacional en PostgreSQL</strong>.
          Su objetivo es almacenar de forma persistente todos los <strong>pagos a bancos y DIAN</strong>,
          permitiendo que la aplicación gestione información de manera segura y efectiva a largo plazo.
        </p>
      </section>

      <section className="section-block">
        <h2>Despliegue en Render</h2>
        <p>
          Nuestra base de datos PostgreSQL se encuentra desplegada en la plataforma Render,
          garantizando la persistencia y disponibilidad de los datos.
        </p>
        <p>
          <strong>URL del Proyecto en Render (Base de Datos):</strong>{" "}
          <a
            href="https://mision2-presentacion-react.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mision2-presentacion-react-d47f.onrender.com/
          </a>
        </p>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDiseño><Home /></LayoutDiseño>} />
      <Route path="/diagrama" element={<LayoutDiseño><Diagrama /></LayoutDiseño>} />
      <Route path="/insert" element={<LayoutDiseño><Insert /></LayoutDiseño>} />
      <Route path="/update" element={<LayoutDiseño><Update /></LayoutDiseño>} />
      <Route path="/delete" element={<LayoutDiseño><Delete /></LayoutDiseño>} />
    </Routes>
  );
}

export default App;
