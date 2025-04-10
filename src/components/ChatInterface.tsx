
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { mockQueryArticles } from '../services/articleService';
import { Message, Article } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      content: 'Olá! Sou o assistente de pesquisa EMPRAD. Como posso ajudar com sua pesquisa nos artigos científicos do EMPRAD?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // In a real implementation, this would call an actual LLM API
      // that processes the query against the EMPRAD articles database
      console.log('Querying:', content);
      const articles = await mockQueryArticles(content);
      
      // Simulate AI response delay
      setTimeout(() => {
        const aiResponse = generateAIResponse(content, articles);
        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error processing message:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: 'Desculpe, ocorreu um erro ao processar sua consulta. Por favor, tente novamente mais tarde.',
          isUser: false,
          timestamp: new Date(),
        },
      ]);
      setIsLoading(false);
    }
  };

  const generateAIResponse = (query: string, articles: Article[]): Message => {
    let responseContent = '';
    
    if (articles.length === 0) {
      responseContent = `Não encontrei artigos específicos relacionados à sua consulta sobre "${query}". Você poderia reformular sua pergunta ou fornecer mais detalhes?`;
    } else {
      responseContent = `Com base na sua consulta sobre "${query}", encontrei ${articles.length} artigos relevantes nos anais do EMPRAD:\n\n`;
      
      // Add a short summary based on the articles
      responseContent += `Os artigos encontrados abordam principalmente ${getTopics(articles)} e foram publicados entre ${getYearRange(articles)}. ${getAuthorSummary(articles)}\n\n`;
      
      responseContent += `Você pode encontrar mais detalhes nas referências abaixo, incluindo links para o texto completo de cada artigo.`;
    }

    return {
      id: Date.now().toString(),
      content: responseContent,
      isUser: false,
      references: articles,
      timestamp: new Date(),
    };
  };

  // Helper functions to generate summary text
  const getTopics = (articles: Article[]): string => {
    // In a real implementation, this would extract actual topics
    return 'gestão organizacional, inovação empresarial e métodos de pesquisa aplicada';
  };

  const getYearRange = (articles: Article[]): string => {
    const years = articles.map(a => a.year);
    const min = Math.min(...years);
    const max = Math.max(...years);
    return min === max ? `${min}` : `${min} e ${max}`;
  };

  const getAuthorSummary = (articles: Article[]): string => {
    // In a real implementation, this would analyze the most frequent authors
    return 'Diversos pesquisadores reconhecidos contribuíram para esse tema, incluindo trabalhos colaborativos entre diferentes instituições acadêmicas.';
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage 
            key={message.id} 
            isUser={message.isUser} 
            content={message.content} 
            references={message.references}
            timestamp={message.timestamp}
          />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-100 rounded-xl p-4 max-w-[80%]">
              <div className="flex space-x-2">
                <div className="h-3 w-3 bg-emprad-purple rounded-full animate-bounce"></div>
                <div className="h-3 w-3 bg-emprad-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-3 w-3 bg-emprad-purple rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatInterface;
