
import React, { useState } from 'react';
import { Download, ExternalLink, BookOpen, Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Article } from "../types";
import { toast } from "sonner";

interface ArticleReferenceProps {
  article: Article;
}

const ArticleReference: React.FC<ArticleReferenceProps> = ({ article }) => {
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [summary, setSummary] = useState<string>('');

  const handleCiteCopy = () => {
    const citation = `${article.authors.join(', ')} (${article.year}). ${article.title}. EMPRAD - Encontro de Mestrados Profissionais em Administração, p. ${article.pageNumber}.`;
    navigator.clipboard.writeText(citation);
    toast.success("Citação copiada para a área de transferência!");
  };

  const handleGenerateSummary = async () => {
    setIsGeneratingSummary(true);
    
    try {
      // Simular geração de resumo com IA
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const generatedSummary = `<strong>Resumo Executivo:</strong> Este estudo aborda ${article.keywords.slice(0, 2).join(' e ')} no contexto brasileiro, oferecendo uma análise abrangente das práticas e teorias relacionadas ao tema.

<strong>Objetivo Principal:</strong> Investigar e analisar ${article.keywords[0]} com foco em suas aplicações práticas e contribuições teóricas para o campo de estudo.

<strong>Metodologia:</strong> A pesquisa utilizou uma abordagem mista (qualitativa e quantitativa), combinando análise documental, pesquisas de campo e estudos de caso para garantir uma visão abrangente do tema.

<strong>Principais Resultados:</strong>
• Identificação de padrões significativos relacionados a ${article.keywords[0]}
• Estabelecimento de correlações entre ${article.keywords.slice(0, 2).join(' e ')}
• Desenvolvimento de framework conceitual aplicável ao contexto organizacional
• Validação empírica dos constructos teóricos propostos

<strong>Contribuições Teóricas:</strong> O estudo avança o conhecimento teórico em ${article.keywords[0]}, propondo novos modelos conceituais e refinando teorias existentes na área.

<strong>Contribuições Práticas:</strong> Os achados oferecem diretrizes práticas para gestores e profissionais, incluindo ferramentas e metodologias aplicáveis em contextos organizacionais reais.

<strong>Limitações do Estudo:</strong> O escopo geográfico e temporal da pesquisa, bem como a especificidade do contexto brasileiro, podem limitar a generalização dos resultados para outros contextos.

<strong>Implicações para Pesquisas Futuras:</strong> O trabalho abre caminhos para investigações adicionais em ${article.keywords[0]}, sugerindo áreas promissoras para desenvolvimento de novos estudos.`;

      setSummary(generatedSummary);
      setShowSummary(true);
      toast.success("Resumo gerado com sucesso!");
    } catch (error) {
      toast.error("Erro ao gerar resumo. Tente novamente.");
      console.error('Erro ao gerar resumo:', error);
    } finally {
      setIsGeneratingSummary(false);
    }
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-2">
        <h5 className="font-medium text-emprad-dark-purple text-lg">{article.title}</h5>
        <p className="text-gray-700 mt-1">{article.authors.join(', ')} ({article.year})</p>
        {article.pageNumber && (
          <p className="text-sm text-gray-500">Página {article.pageNumber}</p>
        )}
      </div>
      
      {article.snippet && (
        <div className="my-3 text-sm bg-gray-50 p-3 rounded border border-gray-200 italic">
          <p className="mb-1 text-xs text-gray-500 font-normal not-italic">Trecho relevante:</p>
          "{article.snippet}"
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mt-2 mb-3">
        {article.keywords.map((keyword, index) => (
          <span 
            key={index} 
            className="bg-emprad-light-purple text-emprad-purple px-2 py-1 rounded-md text-xs"
          >
            {keyword}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className="text-emprad-purple border-emprad-purple hover:bg-emprad-light-purple hover:text-emprad-dark-purple"
          onClick={() => window.open(article.url, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-1" /> Ver artigo
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="text-emprad-purple border-emprad-purple hover:bg-emprad-light-purple hover:text-emprad-dark-purple"
          onClick={() => window.open(article.downloadUrl, '_blank')}
        >
          <Download className="h-4 w-4 mr-1" /> Download
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="text-emprad-purple border-emprad-purple hover:bg-emprad-light-purple hover:text-emprad-dark-purple"
          onClick={handleCiteCopy}
        >
          <Copy className="h-4 w-4 mr-1" /> Copiar citação
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="text-emprad-purple border-emprad-purple hover:bg-emprad-light-purple hover:text-emprad-dark-purple"
          onClick={handleGenerateSummary}
          disabled={isGeneratingSummary}
        >
          <BookOpen className="h-4 w-4 mr-1" /> 
          {isGeneratingSummary ? 'Gerando...' : 'Resumo'}
        </Button>
      </div>

      {showSummary && summary && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <h6 className="font-semibold text-emprad-dark-purple">Resumo Gerado por IA</h6>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSummary(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </Button>
          </div>
          <div 
            className="text-sm text-gray-700 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
          <div className="mt-3 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(summary.replace(/<[^>]*>/g, ''));
                toast.success("Resumo copiado para a área de transferência!");
              }}
              className="text-emprad-purple border-emprad-purple hover:bg-emprad-light-purple"
            >
              <Copy className="h-4 w-4 mr-1" /> Copiar Resumo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleReference;
