
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
    <div className="support-panel flex flex-col h-full">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      {insights && (
        <div className="mb-4">
          {insights}
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="space-y-2 mb-4">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-between text-left"
              onClick={() => onSuggestionClick && onSuggestionClick(suggestion)}
            >
              <span className="truncate">{suggestion}</span>
              <ChevronRight className="h-4 w-4 flex-shrink-0" />
            </Button>
          ))}
        </div>
      )}

      <div className="mt-auto">
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message MS Amlin support"
            className="flex-1"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button size="icon" onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SupportPanel;
