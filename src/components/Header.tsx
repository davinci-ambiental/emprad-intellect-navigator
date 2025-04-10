
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-emprad-blue shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/66f42e01-3de9-477f-9951-307a3be5eede.png" 
              alt="EMPRAD Logo" 
              className="h-10 mr-2" 
            />
            <span className="text-white font-bold text-xl">EMPRAD 2025</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-blue-200 transition-colors">
            Início
          </Link>
          <Link to="/articles" className="text-white hover:text-blue-200 transition-colors">
            Artigos
          </Link>
          <Link to="/about" className="text-white hover:text-blue-200 transition-colors">
            Sobre
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <span className="text-white">Bem-vindo, Pesquisador</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
