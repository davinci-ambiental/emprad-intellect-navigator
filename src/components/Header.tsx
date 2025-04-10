
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white font-medium bg-transparent hover:bg-blue-800 hover:text-yellow-300">
                  ASSISTENTE DE PESQUISA
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-blue-950 min-w-[220px] p-2">
                  <ul className="flex flex-col">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/research-assistant" className="block py-2 px-4 text-white hover:text-yellow-300 transition-colors">
                          Assistente de Pesquisa
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/smart-search" className="block py-2 px-4 text-white hover:text-yellow-300 transition-colors">
                          Pesquisa Inteligente
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/direct-download" className="block py-2 px-4 text-white hover:text-yellow-300 transition-colors">
                          Download Direto
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/indexed-articles" className="block py-2 px-4 text-white hover:text-yellow-300 transition-colors">
                          Artigos Indexados
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
            <div className="py-2 px-4">
              <span className="text-white font-medium">ASSISTENTE DE PESQUISA</span>
              <div className="ml-4 mt-2 space-y-2">
                <Link 
                  to="/research-assistant" 
                  className="block text-white hover:text-yellow-300 transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Assistente de Pesquisa
                </Link>
                <Link 
                  to="/smart-search" 
                  className="block text-white hover:text-yellow-300 transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pesquisa Inteligente
                </Link>
                <Link 
                  to="/direct-download" 
                  className="block text-white hover:text-yellow-300 transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download Direto
                </Link>
                <Link 
                  to="/indexed-articles" 
                  className="block text-white hover:text-yellow-300 transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Artigos Indexados
                </Link>
              </div>
            </div>
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
