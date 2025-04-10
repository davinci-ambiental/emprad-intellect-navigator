
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-emprad-purple shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <span className="text-white font-bold text-xl">EMPRAD 2025</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-emprad-light-purple transition-colors">
            Início
          </Link>
          <Link to="/articles" className="text-white hover:text-emprad-light-purple transition-colors">
            Artigos
          </Link>
          <Link to="/about" className="text-white hover:text-emprad-light-purple transition-colors">
            Sobre
          </Link>
          <Link to="/research-assistant" className="text-white hover:text-emprad-light-purple transition-colors">
            Assistente de Pesquisa
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
