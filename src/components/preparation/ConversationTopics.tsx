
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface Topic {
  id: string;
  title: string;
  selected: boolean;
}

interface ConversationTopicsProps {
  topics: Topic[];
  onTopicChange: (id: string, selected: boolean) => void;
}

const ConversationTopics: React.FC<ConversationTopicsProps> = ({ 
  topics, 
  onTopicChange 
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Conversation topics</CardTitle>
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
          <div className="space-y-2">
            {topics.map((topic) => (
              <div 
                key={topic.id} 
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50"
              >
                <Checkbox 
                  id={`topic-${topic.id}`}
                  checked={topic.selected}
                  onCheckedChange={(checked) => 
                    onTopicChange(topic.id, checked === true)
                  }
                />
                <label 
                  htmlFor={`topic-${topic.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {topic.title}
                </label>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ConversationTopics;
