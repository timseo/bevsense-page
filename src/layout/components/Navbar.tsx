import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/bevsense-horizontal-1.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block h-auto max-w-[180px]">
              <img
                src={Logo}
                alt="BevSense"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          {/* Botón de menú (visible solo en mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menú de navegación (desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link to="/product" className="hover:underline">
              Product
            </Link>
            <Link to="/platform" className="hover:underline">
              Platform
            </Link>
            <Link to="/customers" className="hover:underline">
              Customers
            </Link>
            <Link to="/company" className="hover:underline">
              Company
            </Link>
          </div>
        </div>
      </div>

      {/* Menú desplegable (mobile) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600"
            >
              Inicio
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600"
            >
              Servicios
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
