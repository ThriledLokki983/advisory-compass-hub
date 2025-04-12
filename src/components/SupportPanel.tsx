
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
    <div className="support-panel flex flex-col h-full bg-gray-50 rounded-md">
      <div className="bg-[#E9E8F7] p-4">
        <h3 className="text-lg font-semibold text-[#2D2D6D]">{title}</h3>
      </div>

      <div className="p-4 flex-1 space-y-6">
        {insights && (
          <div>
            {insights}
          </div>
        )}

        {suggestions.length > 0 && (
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-between text-left text-[#2D2D6D] bg-white"
                onClick={() => onSuggestionClick && onSuggestionClick(suggestion)}
              >
                <span className="mr-2">{suggestion}</span>
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200 mt-auto">
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message MS Amlin support"
            className="flex-1 bg-white"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button size="icon" onClick={handleSend} variant="ghost">
            <Send className="h-4 w-4 text-[#2D2D6D]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SupportPanel;
