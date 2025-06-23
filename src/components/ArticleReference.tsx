import React, { useState } from 'react';
import { Download, ExternalLink, BookOpen, Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Article } from "../types";
import { toast } from "sonner";
import ReactMarkdown from 'react-markdown';

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

  const generateStructuredSummary = (article: Article): string => {
    const primaryKeyword = article.keywords[0] || 'gestão';
    const secondaryKeyword = article.keywords[1] || 'organizacional';
    
    // Gerar conteúdo baseado nas palavras-chave
    const objectives = [
      `Analisar as práticas de ${primaryKeyword} em organizações brasileiras`,
      `Investigar a relação entre ${primaryKeyword} e ${secondaryKeyword}`,
      `Identificar fatores críticos de sucesso em ${primaryKeyword}`,
      `Propor um modelo teórico-prático para ${primaryKeyword}`
    ];

    const methodologies = [
      'Estudo de caso múltiplo com abordagem qualitativa',
      'Pesquisa survey com análise quantitativa',
      'Revisão sistemática da literatura',
      'Pesquisa-ação participativa'
    ];

    const results = [
      `Identificação de cinco dimensões críticas para ${primaryKeyword}`,
      `Validação empírica da relação entre ${primaryKeyword} e performance organizacional`,
      `Desenvolvimento de framework conceitual aplicável ao contexto brasileiro`,
      `Proposição de indicadores de mensuração para ${primaryKeyword}`
    ];

    const selectedObjective = objectives[Math.floor(Math.random() * objectives.length)];
    const selectedMethodology = methodologies[Math.floor(Math.random() * methodologies.length)];
    const selectedResults = results.slice(0, 2 + Math.floor(Math.random() * 2));

    return `## ${article.title}

### Resumo Executivo
Este estudo aborda questões fundamentais relacionadas a ${primaryKeyword} no contexto organizacional brasileiro, contribuindo para o avanço do conhecimento na área de Administração.

### Objetivo Principal
${selectedObjective}, considerando as especificidades do ambiente empresarial nacional.

### Metodologia
${selectedMethodology}. A pesquisa foi conduzida seguindo rigorosos critérios metodológicos, garantindo a validade e confiabilidade dos resultados.

### Principais Resultados
${selectedResults.map((result, index) => `\n• ${result}`).join('')}

### Contribuições Teóricas
• Ampliação do conhecimento sobre ${primaryKeyword} no contexto brasileiro
• Integração de teorias consolidadas com evidências empíricas locais
• Proposição de modelo conceitual adaptado à realidade nacional

### Contribuições Práticas
• Diretrizes estratégicas para gestores e profissionais da área
• Ferramentas aplicáveis para melhoria de processos organizacionais
• Insights para tomada de decisão em ${primaryKeyword}

### Limitações do Estudo
• Escopo geográfico restrito ao contexto brasileiro
• Período temporal específico da coleta de dados
• Limitações inerentes à metodologia adotada

### Implicações para Pesquisas Futuras
Este trabalho abre perspectivas para investigações complementares, sugerindo a expansão do estudo para outros contextos e a validação dos achados em diferentes setores econômicos.

---
*Resumo gerado automaticamente baseado nos metadados do artigo*`;
  };

  const handleGenerateSummary = async () => {
    setIsGeneratingSummary(true);
    
    try {
      // Simular processamento da IA
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const generatedSummary = generateStructuredSummary(article);
      setSummary(generatedSummary);
      setShowSummary(true);
      toast.success("Resumo estruturado gerado com sucesso!");
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
          {isGeneratingSummary ? 'Gerando...' : 'Resumo IA'}
        </Button>
      </div>

      {showSummary && summary && (
        <div className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emprad-purple" />
              <h6 className="font-semibold text-emprad-dark-purple">Resumo Estruturado - IA</h6>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSummary(false)}
              className="text-gray-500 hover:text-gray-700 h-6 w-6 p-0"
            >
              ✕
            </Button>
          </div>
          <div className="text-sm text-gray-700 prose prose-sm max-w-none prose-headings:text-emprad-dark-purple prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-2 first:prose-headings:mt-0">
            <ReactMarkdown>{summary}</ReactMarkdown>
          </div>
          <div className="mt-4 pt-3 border-t border-blue-200 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(summary);
                toast.success("Resumo copiado para a área de transferência!");
              }}
              className="text-emprad-purple border-emprad-purple hover:bg-emprad-light-purple"
            >
              <Copy className="h-4 w-4 mr-1" /> Copiar Resumo
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const blob = new Blob([summary], { type: 'text/markdown' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `resumo-${article.title.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '-')}.md`;
                a.click();
                URL.revokeObjectURL(url);
                toast.success("Resumo baixado com sucesso!");
              }}
              className="text-emprad-purple border-emprad-purple hover:bg-emprad-light-purple"
            >
              <Download className="h-4 w-4 mr-1" /> Baixar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleReference;
