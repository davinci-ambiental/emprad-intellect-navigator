
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowRight, Book, Search, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-emprad-purple py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/97179c6a-6538-4ec3-8c93-b4d8f74455e3.png" 
              alt="EMPRAD Logo" 
              className="h-16 md:h-20 lg:h-24 bg-white/20 p-2 rounded"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            EMPRAD 2025
          </h1>
          <p className="text-xl text-emprad-light-purple max-w-3xl mx-auto mb-10">
            Encontro de Mestrados Profissionais em Administração
          </p>
          <div className="flex justify-center">
            <Button 
              asChild 
              className="bg-white text-emprad-purple hover:bg-emprad-light-purple px-8 py-6 text-lg"
            >
              <Link to="/research-assistant" className="flex items-center gap-2">
                Acessar Assistente de Pesquisa <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-emprad-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Book className="w-8 h-8 text-emprad-purple" />
            </div>
            <h3 className="text-xl font-bold text-emprad-purple mb-4">Biblioteca Digital</h3>
            <p className="text-gray-600 mb-4">Acesso aos 1585 artigos científicos publicados nos anais do EMPRAD.</p>
            <Link to="/articles" className="text-emprad-purple font-medium hover:underline inline-flex items-center">
              Ver artigos <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-emprad-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-emprad-purple" />
            </div>
            <h3 className="text-xl font-bold text-emprad-purple mb-4">Assistente de Pesquisa</h3>
            <p className="text-gray-600 mb-4">Explore a nossa ferramenta de IA que ajuda a encontrar informações em todos os artigos do EMPRAD.</p>
            <Link to="/research-assistant" className="text-emprad-purple font-medium hover:underline inline-flex items-center">
              Iniciar pesquisa <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-emprad-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-emprad-purple" />
            </div>
            <h3 className="text-xl font-bold text-emprad-purple mb-4">Sobre o EMPRAD</h3>
            <p className="text-gray-600 mb-4">Conheça mais sobre o Encontro de Mestrados Profissionais em Administração.</p>
            <Link to="/about" className="text-emprad-purple font-medium hover:underline inline-flex items-center">
              Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
