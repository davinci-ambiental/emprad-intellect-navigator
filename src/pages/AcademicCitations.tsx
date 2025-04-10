
import React, { useState } from 'react';
import Header from '../components/Header';
import { Copy, Check, BookOpen, FileText } from 'lucide-react';
import { mockArticlesDatabase } from '../services/articleService';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const AcademicCitations: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState(mockArticlesDatabase[0]);
  const [activeTab, setActiveTab] = useState('abnt');
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();
  
  const citationFormats = {
    abnt: `${selectedArticle.authors.join('; ')}. ${selectedArticle.title}. EMPRAD - Encontro de Mestrados Profissionais em Administração, ${selectedArticle.year}, p. ${selectedArticle.pageNumber}.`,
    apa: `${selectedArticle.authors.join(', ')}. (${selectedArticle.year}). ${selectedArticle.title}. EMPRAD - Encontro de Mestrados Profissionais em Administração, ${selectedArticle.pageNumber}.`,
    vancouver: `${selectedArticle.authors[0].split(',')[0]} ${selectedArticle.authors[0].split(',')[1]?.[0] || ''}, et al. ${selectedArticle.title}. EMPRAD. ${selectedArticle.year};${selectedArticle.pageNumber}.`,
    mla: `${selectedArticle.authors[0].split(',')[1] || ''} ${selectedArticle.authors[0].split(',')[0]}${selectedArticle.authors.length > 1 ? ', et al.' : ''}. "${selectedArticle.title}." EMPRAD - Encontro de Mestrados Profissionais em Administração, ${selectedArticle.year}, p. ${selectedArticle.pageNumber}.`,
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(citationFormats[activeTab as keyof typeof citationFormats]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-emprad-dark-purple">Citações Acadêmicas</h1>
          <p className="text-gray-600 mt-1">
            Gere citações em diversos formatos para os artigos do EMPRAD
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
              <h2 className="text-lg font-semibold mb-4 text-emprad-dark-purple flex items-center">
                <BookOpen className="mr-2 h-5 w-5" /> 
                Artigos Disponíveis
              </h2>
              
              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                {mockArticlesDatabase.map(article => (
                  <div 
                    key={article.id}
                    className={`p-3 rounded-md cursor-pointer transition-colors ${
                      selectedArticle.id === article.id ? 'bg-emprad-light-purple' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedArticle(article)}
                  >
                    <h3 className="font-medium text-emprad-dark-purple">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.authors.join(', ')}</p>
                    <p className="text-xs text-gray-500">{article.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-emprad-dark-purple mb-1">{selectedArticle.title}</h2>
                <p className="text-gray-600">{selectedArticle.authors.join(', ')} ({selectedArticle.year})</p>
              </div>
              
              <div className="p-4">
                <div className="mb-4 flex border-b">
                  {['ABNT', 'APA', 'Vancouver', 'MLA'].map(format => (
                    <button
                      key={format}
                      className={`px-4 py-2 ${
                        activeTab.toLowerCase() === format.toLowerCase() 
                          ? 'border-b-2 border-emprad-purple text-emprad-purple font-medium' 
                          : 'text-gray-600 hover:text-emprad-purple'
                      }`}
                      onClick={() => setActiveTab(format.toLowerCase())}
                    >
                      {format}
                    </button>
                  ))}
                </div>
                
                <div className="p-4 bg-gray-50 rounded-md font-mono text-sm mb-4">
                  {citationFormats[activeTab as keyof typeof citationFormats]}
                </div>
                
                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline"
                    className="flex items-center"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copiar Citação
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="flex items-center text-emprad-purple border-emprad-purple"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Visualizar Artigo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCitations;
