
import { Article } from '../types';

// This is a mock database of EMPRAD articles
// In a real implementation, this would be replaced with an actual database query
export const mockArticlesDatabase: Article[] = [
  {
    id: '1',
    title: 'Inovação em Práticas de Gestão: Um Estudo de Caso em Empresas Brasileiras',
    authors: ['Silva, M.A.', 'Oliveira, J.C.'],
    year: 2022,
    pageNumber: 45,
    url: 'https://emprad.org.br/articles/1',
    downloadUrl: 'https://emprad.org.br/download/1',
    snippet: 'Os resultados indicam que as práticas de inovação em gestão estão fortemente correlacionadas com o desempenho organizacional, especialmente em ambientes de alta competitividade.',
    keywords: ['inovação', 'gestão', 'empresas brasileiras']
  },
  {
    id: '2',
    title: 'Metodologias Ágeis na Administração Pública: Desafios e Oportunidades',
    authors: ['Santos, F.R.', 'Pereira, L.M.', 'Costa, D.S.'],
    year: 2023,
    pageNumber: 127,
    url: 'https://emprad.org.br/articles/2',
    downloadUrl: 'https://emprad.org.br/download/2',
    snippet: 'A implementação de metodologias ágeis na administração pública brasileira apresenta barreiras culturais significativas, mas demonstra potencial para melhorias na eficiência dos serviços públicos.',
    keywords: ['metodologias ágeis', 'administração pública', 'gestão pública']
  },
  {
    id: '3',
    title: 'Sustentabilidade Empresarial como Vantagem Competitiva no Mercado Brasileiro',
    authors: ['Lima, C.A.', 'Almeida, R.T.'],
    year: 2021,
    pageNumber: 78,
    url: 'https://emprad.org.br/articles/3',
    downloadUrl: 'https://emprad.org.br/download/3',
    snippet: 'Empresas com forte compromisso com práticas sustentáveis apresentaram melhores índices de valorização de mercado e maior fidelização de clientes no período analisado.',
    keywords: ['sustentabilidade', 'vantagem competitiva', 'ESG']
  },
  {
    id: '4',
    title: 'Transformação Digital em Pequenas e Médias Empresas: Um Estudo Longitudinal',
    authors: ['Ferreira, M.S.', 'Rodrigues, C.L.'],
    year: 2023,
    pageNumber: 215,
    url: 'https://emprad.org.br/articles/4',
    downloadUrl: 'https://emprad.org.br/download/4',
    snippet: 'As PMEs que adotaram estratégias estruturadas de transformação digital apresentaram crescimento médio de receita 37% superior às que implementaram mudanças tecnológicas de forma pontual e não integrada.',
    keywords: ['transformação digital', 'PMEs', 'tecnologia']
  },
  {
    id: '5',
    title: 'O Impacto do Trabalho Remoto na Produtividade e Bem-estar dos Colaboradores',
    authors: ['Mendes, A.P.', 'Carvalho, S.T.', 'Martins, J.R.'],
    year: 2022,
    pageNumber: 103,
    url: 'https://emprad.org.br/articles/5',
    downloadUrl: 'https://emprad.org.br/download/5',
    snippet: 'O estudo revelou que 78% dos profissionais em regime de teletrabalho reportaram aumento de produtividade, embora 42% tenham indicado dificuldades relacionadas ao equilíbrio entre vida pessoal e profissional.',
    keywords: ['trabalho remoto', 'produtividade', 'bem-estar', 'recursos humanos']
  },
  {
    id: '6',
    title: 'Empreendedorismo Social no Brasil: Desafios e Perspectivas',
    authors: ['Costa, R.M.', 'Souza, T.L.'],
    year: 2023,
    pageNumber: 142,
    url: 'https://emprad.org.br/articles/6',
    downloadUrl: 'https://emprad.org.br/download/6',
    snippet: 'Os negócios de impacto social cresceram 35% nos últimos três anos no Brasil, com destaque para iniciativas voltadas à educação, saúde e tecnologias ambientais.',
    keywords: ['empreendedorismo social', 'impacto social', 'inovação social']
  },
  {
    id: '7',
    title: 'Estratégias de Internacionalização para Startups Brasileiras',
    authors: ['Ribeiro, A.C.', 'Pinto, F.S.', 'Gomes, L.T.'],
    year: 2022,
    pageNumber: 91,
    url: 'https://emprad.org.br/articles/7',
    downloadUrl: 'https://emprad.org.br/download/7',
    snippet: 'A pesquisa identificou que a estratégia de internacionalização mais eficaz para startups brasileiras envolve parcerias estratégicas com players locais nos mercados-alvo.',
    keywords: ['internacionalização', 'startups', 'estratégia empresarial']
  },
  {
    id: '8',
    title: 'Ecossistemas de Inovação: O Papel das Universidades no Desenvolvimento de Novos Negócios',
    authors: ['Martins, P.R.', 'Torres, C.V.'],
    year: 2021,
    pageNumber: 156,
    url: 'https://emprad.org.br/articles/8',
    downloadUrl: 'https://emprad.org.br/download/8',
    snippet: 'As parcerias entre universidades e setor privado resultaram na criação de 270 novas empresas nos últimos cinco anos, com taxa de sobrevivência 22% superior à média nacional.',
    keywords: ['ecossistemas de inovação', 'universidades', 'empreendedorismo']
  }
];

// More sophisticated AI response generation with topic analysis and recommendation logic
export const mockQueryArticles = async (query: string): Promise<Article[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const normalizedQuery = query.toLowerCase();

  // Enhanced query matching logic
  let matchedArticles = mockArticlesDatabase.filter(article => {
    // Check title with higher weighting
    if (article.title.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    
    // Check keywords with medium weighting
    if (article.keywords.some(keyword => 
      normalizedQuery.includes(keyword) || keyword.includes(normalizedQuery)
    )) {
      return true;
    }
    
    // Check snippet with lower weighting
    if (article.snippet.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    
    return false;
  });

  // If no direct matches, try to find related topics
  if (matchedArticles.length === 0) {
    const topics = {
      empreendedorismo: ['startup', 'negócio', 'empresário', 'empreender'],
      inovação: ['novo', 'criativo', 'disruptivo', 'tecnologia'],
      sustentabilidade: ['ambiental', 'verde', 'ecológico', 'sustentável'],
      gestão: ['administração', 'gerenciamento', 'liderança', 'estratégia']
    };
    
    const queryWords = normalizedQuery.split(' ');
    
    for (const [topic, relatedWords] of Object.entries(topics)) {
      if (queryWords.some(word => word === topic || relatedWords.includes(word))) {
        matchedArticles = mockArticlesDatabase.filter(article => 
          article.keywords.includes(topic) || 
          article.title.toLowerCase().includes(topic) ||
          relatedWords.some(related => article.title.toLowerCase().includes(related))
        );
        
        if (matchedArticles.length > 0) break;
      }
    }
  }

  // Limit to most relevant results, or return a subset if too many matches
  return matchedArticles.slice(0, Math.min(5, matchedArticles.length));
};

// Generate more sophisticated AI responses with contextual analysis
export const generateEnhancedAIResponse = (query: string, articles: Article[]): string => {
  if (articles.length === 0) {
    return `Não encontrei artigos específicos relacionados à sua consulta sobre "${query}" nos anais do EMPRAD. Você poderia reformular sua pergunta ou fornecer mais detalhes sobre o tópico de empreendedorismo que está pesquisando?`;
  }

  // Extract years for time-based analysis
  const years = articles.map(a => a.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  const yearRange = minYear === maxYear ? `${minYear}` : `${minYear} a ${maxYear}`;

  // Extract keywords for topic analysis
  const allKeywords = articles.flatMap(a => a.keywords);
  const keywordFrequency = allKeywords.reduce((acc, keyword) => {
    acc[keyword] = (acc[keyword] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Sort keywords by frequency
  const topKeywords = Object.entries(keywordFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([keyword]) => keyword);

  // Generate introduction
  let response = `Com base na sua consulta sobre "${query}", analisei os anais do EMPRAD e encontrei ${articles.length} artigos relevantes publicados entre ${yearRange}.\n\n`;

  // Generate synthesis of findings
  response += `**Síntese das descobertas:**\n`;
  
  if (query.includes('empreendedorismo')) {
    response += `Os estudos sobre empreendedorismo no contexto brasileiro destacam a importância da inovação, sustentabilidade e adaptação às condições econômicas locais. Verifica-se que empreendimentos com forte componente tecnológico e/ou impacto social positivo tendem a apresentar maior resiliência e crescimento sustentado.\n\n`;
  } else if (query.includes('inovação')) {
    response += `A literatura do EMPRAD sobre inovação enfatiza a necessidade de ecossistemas integrados, onde universidades, empresas e governo colaboram efetivamente. Os dados indicam que empresas com práticas de inovação estruturadas apresentam resultados financeiros e operacionais significativamente superiores aos concorrentes tradicionais.\n\n`;
  } else if (query.includes('gestão')) {
    response += `As pesquisas em gestão organizacional apontam para uma crescente adoção de metodologias ágeis e práticas centradas no ser humano. A transformação digital aparece como um tema recorrente, com ênfase na necessidade de adaptação dos modelos de gestão às novas tecnologias e demandas do mercado.\n\n`;
  } else {
    response += `A análise dos artigos revela tendências convergentes sobre ${topKeywords.join(', ')} no contexto empresarial brasileiro. Os estudos demonstram a interconexão desses temas e sua relevância para o desenvolvimento de negócios mais competitivos e sustentáveis.\n\n`;
  }

  // Generate methodology insights
  response += `**Abordagens metodológicas:**\n`;
  response += `Os estudos utilizaram predominantemente métodos qualitativos (estudos de caso e entrevistas em profundidade) combinados com análise quantitativa de dados setoriais. Esta abordagem mista permite compreender tanto as particularidades dos casos estudados quanto estabelecer correlações estatisticamente significativas entre variáveis de interesse.\n\n`;

  // Generate conclusion and next steps
  response += `**Implicações práticas:**\n`;
  response += `Os resultados sugerem que gestores e empreendedores devem considerar ${topKeywords.join(', ')} como fatores estratégicos em seus processos decisórios. A literatura recomenda a adoção de práticas colaborativas e o monitoramento contínuo do ambiente competitivo para identificar oportunidades de inovação e crescimento.\n\n`;

  response += `Você pode encontrar mais detalhes nas referências abaixo, incluindo links para o texto completo de cada artigo.`;

  return response;
};
