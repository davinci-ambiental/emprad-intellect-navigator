
import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Article } from "../types";

interface ArticleReferenceProps {
  article: Article;
}

const ArticleReference: React.FC<ArticleReferenceProps> = ({ article }) => {
  return (
    <div className="bg-white border rounded-lg p-3 shadow-sm">
      <div className="flex justify-between">
        <h5 className="font-medium text-emprad-dark-purple">{article.title}</h5>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-emprad-dark-purple hover:text-emprad-purple"
            onClick={() => window.open(article.url, '_blank')}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-emprad-dark-purple hover:text-emprad-purple"
            onClick={() => window.open(article.downloadUrl, '_blank')}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <p className="text-sm text-gray-600">{article.authors.join(', ')} ({article.year})</p>
      {article.pageNumber && (
        <p className="text-xs text-gray-500 mt-1">Página {article.pageNumber}</p>
      )}
      {article.snippet && (
        <div className="mt-2 text-sm bg-gray-50 p-2 rounded border border-gray-100 italic">
          "{article.snippet}"
        </div>
      )}
    </div>
  );
};

export default ArticleReference;
