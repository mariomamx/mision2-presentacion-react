import React from 'react';
import Header from './Header';

const Diagrama = () => {
  return (
    <div className="app-container">
      <Header />
      <center>
      <div style={{ width: '100%', height: '700px', border: '1px solid #ccc', marginTop: '120px', }}>
      <iframe
        src="https://dbdiagram.io/d/687adc5df413ba3508a02c38" // <- pon aquí tu URL
        title="Diagrama SQL"
        width="70%"
        height="70%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
    </center>
    </div>
    
    
  );
};

export default Diagrama;
