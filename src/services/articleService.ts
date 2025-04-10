
import { Article } from '../types';

// This is a mock database of EMPRAD articles
// In a real implementation, this would be replaced with an actual database query
const mockArticlesDatabase: Article[] = [
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
  }
];

// Function to mock the search functionality
// In a real implementation, this would use vector search or similar technology
export const mockQueryArticles = async (query: string): Promise<Article[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const normalizedQuery = query.toLowerCase();
  
  // Simple keyword matching (a real implementation would use more sophisticated search)
  return mockArticlesDatabase.filter(article => {
    // Check title
    if (article.title.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    
    // Check keywords
    if (article.keywords.some(keyword => 
      normalizedQuery.includes(keyword) || keyword.includes(normalizedQuery)
    )) {
      return true;
    }
    
    // Check snippet
    if (article.snippet.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    
    return false;
  }).slice(0, 3); // Limit to 3 results for the mock
};
