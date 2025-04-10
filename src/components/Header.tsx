
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/97179c6a-6538-4ec3-8c93-b4d8f74455e3.png" 
              alt="EMPRAD Logo" 
              className="h-10 md:h-12 bg-white p-1 rounded"
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 ml-2"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-yellow-300 font-medium hover:text-white transition-colors">
            HOME
          </Link>
          <Link to="/articles" className="text-white font-medium hover:text-yellow-300 transition-colors">
            EDIÇÕES ANTERIORES
          </Link>
          <Link to="/articles" className="text-white font-medium hover:text-yellow-300 transition-colors">
            TRABALHOS
          </Link>
          <Link to="/about" className="text-white font-medium hover:text-yellow-300 transition-colors">
            ÁREAS
          </Link>
          <Link to="/about" className="text-white font-medium hover:text-yellow-300 transition-colors">
            CONTATO
          </Link>
          <button className="text-white" aria-label="Search">
            <Search size={20} />
          </button>
        </nav>
        
        <div className="hidden md:flex">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
            LOGIN
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-950">
          <div className="flex flex-col p-4 space-y-3">
            <Link 
              to="/" 
              className="text-yellow-300 font-medium hover:text-white transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/articles" 
              className="text-white font-medium hover:text-yellow-300 transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              EDIÇÕES ANTERIORES
            </Link>
            <Link 
              to="/articles" 
              className="text-white font-medium hover:text-yellow-300 transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              TRABALHOS
            </Link>
            <Link 
              to="/about" 
              className="text-white font-medium hover:text-yellow-300 transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              ÁREAS
            </Link>
            <Link 
              to="/about" 
              className="text-white font-medium hover:text-yellow-300 transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTATO
            </Link>
            <div className="py-2 px-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold w-full">
                LOGIN
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
