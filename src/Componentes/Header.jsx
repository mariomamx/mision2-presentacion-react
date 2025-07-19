import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="app-header flex flex-col md:flex-row items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg rounded-lg">
      
      {/* Botón externo */}
      <a
        href="https://accounting-project-companies.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-mision1-render bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-4 md:mb-0 md:mr-4"
      >
        Ver Misión 1 (Frontend)
      </a>

      {/* Botones de navegación */}
      <div className="flex flex-wrap justify-center gap-3 mb-4 md:mb-0">
        <Link
          to="/diagrama"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Diagrama ER
        </Link>
        <Link
          to="/insert"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Insert
        </Link>
        <Link
          to="/update"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Update
        </Link>
        <Link
          to="/delete"
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Delete
        </Link>
      </div>

      {/* Texto del encabezado */}
      <div className="header-text-container text-center md:text-right flex-grow">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Proyecto Colaborativo Misión 2 - SQL
        </h1>
        <p className="project-tagline text-lg md:text-xl font-light opacity-90">
          Presentación de la Base de Datos y Operaciones CRUD para "Accounting Project Company"
        </p>
      </div>
    </header>
  );
}

export default Header;
