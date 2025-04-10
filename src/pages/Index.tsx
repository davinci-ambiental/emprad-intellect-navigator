
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BookOpen, Search, Database } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-emprad-purple shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">EMPRAD 2025</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-emprad-light-purple transition-colors">
              Início
            </Link>
            <Link to="/research-assistant" className="text-white hover:text-emprad-light-purple transition-colors">
              Assistente de Pesquisa
            </Link>
          </nav>
          <div>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-emprad-purple">
              Login
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 md:py-24 bg-gradient-to-b from-emprad-light-purple to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-emprad-dark-purple mb-6">
              EMPRAD 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Encontro de Mestrado Profissional em Administração
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-emprad-purple hover:bg-emprad-dark-purple text-white px-6 py-3 rounded-md text-lg">
                Inscreva-se
              </Button>
              <Link to="/research-assistant">
                <Button variant="outline" className="border-emprad-purple text-emprad-purple hover:bg-emprad-purple hover:text-white px-6 py-3 rounded-md text-lg">
                  Assistente de Pesquisa
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-emprad-dark-purple mb-12">
              Recursos do Assistente de Pesquisa
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="mx-auto w-16 h-16 bg-emprad-light-purple rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-emprad-dark-purple" />
                </div>
                <h3 className="text-xl font-semibold text-emprad-dark-purple mb-2">Busca Inteligente</h3>
                <p className="text-gray-600">
                  Pesquise entre os 1585 artigos científicos do EMPRAD usando linguagem natural.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="mx-auto w-16 h-16 bg-emprad-light-purple rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-emprad-dark-purple" />
                </div>
                <h3 className="text-xl font-semibold text-emprad-dark-purple mb-2">Referências Precisas</h3>
                <p className="text-gray-600">
                  Obtenha citações acadêmicas completas com autores, ano e número de página.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="mx-auto w-16 h-16 bg-emprad-light-purple rounded-full flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-emprad-dark-purple" />
                </div>
                <h3 className="text-xl font-semibold text-emprad-dark-purple mb-2">Acesso Completo</h3>
                <p className="text-gray-600">
                  Baixe os artigos completos diretamente da interface do assistente.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/research-assistant">
                <Button className="bg-emprad-purple hover:bg-emprad-dark-purple text-white px-6 py-3 rounded-md">
                  Experimentar o Assistente de Pesquisa
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emprad-charcoal text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-4">© 2025 EMPRAD - Encontro de Mestrado Profissional em Administração</p>
            <p className="text-sm text-gray-400">
              Uma iniciativa para promover a pesquisa científica em administração.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
