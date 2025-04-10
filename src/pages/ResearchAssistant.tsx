
import React from 'react';
import Header from '../components/Header';
import ChatInterface from '../components/ChatInterface';
import { Book, Search, Download } from 'lucide-react';

const ResearchAssistant: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6 flex-grow flex flex-col">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-emprad-blue">Assistente de Pesquisa EMPRAD</h1>
          <p className="text-gray-600 mt-2">
            Use nossa IA para pesquisar entre os 1585 artigos científicos do EMPRAD e encontrar informações relevantes para sua pesquisa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
            <div className="rounded-full bg-emprad-light-gray p-3 mr-4">
              <Search className="h-6 w-6 text-emprad-blue" />
            </div>
            <div>
              <h3 className="font-medium">Pesquisa Inteligente</h3>
              <p className="text-sm text-gray-600">Busca contextual em todos os artigos</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
            <div className="rounded-full bg-emprad-light-gray p-3 mr-4">
              <Book className="h-6 w-6 text-emprad-blue" />
            </div>
            <div>
              <h3 className="font-medium">Citações Acadêmicas</h3>
              <p className="text-sm text-gray-600">Referências precisas e formatadas</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
            <div className="rounded-full bg-emprad-light-gray p-3 mr-4">
              <Download className="h-6 w-6 text-emprad-blue" />
            </div>
            <div>
              <h3 className="font-medium">Download Direto</h3>
              <p className="text-sm text-gray-600">Acesso aos artigos completos</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center">
            <div className="rounded-full bg-emprad-light-gray p-3 mr-4">
              <div className="font-bold text-lg text-emprad-blue">1585</div>
            </div>
            <div>
              <h3 className="font-medium">Artigos Indexados</h3>
              <p className="text-sm text-gray-600">Base de conhecimento abrangente</p>
            </div>
          </div>
        </div>
        
        <div className="flex-grow bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default ResearchAssistant;
