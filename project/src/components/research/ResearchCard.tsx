import React from 'react';
import { FileText, BookOpen, Bookmark } from 'lucide-react';

interface ResearchCardProps {
  title: string;
  authors: string;
  abstract: string;
  tags: string[];
  year: number;
  imageUrl?: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  authors,
  abstract,
  tags,
  year,
  imageUrl
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover object-center"
        />
      )}
      
      <div className="p-4 flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
          <span className="text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
            {year}
          </span>
        </div>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{authors}</p>
        
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
          {abstract}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="bg-slate-50 dark:bg-slate-800/50 p-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <button className="flex items-center text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
          <FileText className="mr-1 h-3 w-3" />
          Read Paper
        </button>
        
        <div className="flex space-x-3">
          <button className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <BookOpen className="h-4 w-4" />
          </button>
          <button className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;