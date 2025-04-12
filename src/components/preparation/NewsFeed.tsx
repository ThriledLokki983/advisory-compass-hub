
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  url?: string;
}

interface NewsFeedProps {
  news: NewsItem[];
}

const NewsFeed: React.FC<NewsFeedProps> = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="h-auto bg-white shadow-sm">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg text-[#1B1D64]">Newsfeed</CardTitle>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-900"
        >
          {isExpanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </CardHeader>
      <CardContent>
        {isExpanded && (
          <div className="space-y-4">
            {news.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                <h4 className="font-medium text-[#1B1D64] text-sm mb-1 font-[400]">{item.title}</h4>
                <p className="text-sm text-[#1B1D64] mb-1 font-[300]">{item.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#1B1D64] font-[400]">{item.date}</span>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#1B1D64] text-amlin-blue hover:underline font-[400]"
                    >
                      Read more
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </div>
  );
};

export default NewsFeed;
