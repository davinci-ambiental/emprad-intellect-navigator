
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-emprad-purple shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/fe91b522-b4aa-44bd-925d-93367ac78a50.png" 
              alt="EMPRAD 2025 Logo" 
              className="h-8 md:h-10"
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Desktop Navigation */}
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
        
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-white">Bem-vindo, Pesquisador</span>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-emprad-dark-purple">
          <div className="flex flex-col p-4 space-y-3">
            <Link 
              to="/" 
              className="text-white hover:text-emprad-light-purple transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/articles" 
              className="text-white hover:text-emprad-light-purple transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Artigos
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-emprad-light-purple transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/research-assistant" 
              className="text-white hover:text-emprad-light-purple transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Assistente de Pesquisa
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
