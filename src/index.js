import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App'; 

import reportWebVitals from './reportWebVitals';

// Obtiene el elemento HTML con el id 'root' donde se montará la aplicación React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente principal <App /> dentro del modo estricto de React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Inicia el reporte de métricas web vitales (puedes eliminar esto si no lo necesitas)
reportWebVitals();