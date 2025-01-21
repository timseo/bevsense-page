import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-red-500">404: Página no encontrada</h1>
      <p className="mt-4 text-lg">Lo sentimos, no pudimos encontrar la página que buscabas.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
