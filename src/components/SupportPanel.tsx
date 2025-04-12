
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, Send } from 'lucide-react';

interface SupportPanelProps {
  title?: string;
  insights?: React.ReactNode;
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
}

const SupportPanel: React.FC<SupportPanelProps> = ({
  title = "MS Amlin support",
  insights,
  suggestions = [],
  onSuggestionClick,
}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mt-0 flex-1 flex flex-col">
      <div className="p-4 flex-1 flex flex-col">
        {insights && (
          <div>
            {insights}
          </div>
        )}

        {suggestions.length > 0 && (
          <div className="space-y-2 mt-auto">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full p-3 justify-between text-left text-[#2D2D6D] bg-white flex items-center text-wrap rounded-xl"
                style={{ height: 'max-content' }}
                onClick={() => onSuggestionClick && onSuggestionClick(suggestion)}
              >
                <span className="mr-2 font-[400]">{suggestion}</span>
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className="p-2 border-gray-200 mt-auto">
        <div className="t-4 bg-[#F3F3F3] p-3 rounded flex items-center gap-2 mt-auto">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message MS Amlin support"
            className="flex-1 bg-transparent border-none text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} className='text-[#1B1464] p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><mask id="a" width="25" height="24" x="0" y="0" maskUnits="userSpaceOnUse">
              <path fill="#D9D9D9" stroke="#E5E3EB" d="M.812.5h23v23h-23z"/></mask><g mask="url(#a)"><path fill="#1B1D64" stroke="#E5E3EB" strokeWidth=".025" d="M5.3 16.837v.02l.017-.008 11.85-5.196.026-.012-.026-.011-11.85-5.196-.017-.008V10.292l.01.002 5.374 1.347-5.375 1.347-.01.003V16.837Zm-1.475 2.32V4.125l17.168 7.515-17.168 7.515Z"/></g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportPanel;
