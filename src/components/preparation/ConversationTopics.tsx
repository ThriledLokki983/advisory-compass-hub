
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './ConversationTopics.css';

interface Topic {
  id: string;
  title: string;
  selected: boolean;
}

interface ConversationTopicsProps {
  topics: {
    id: string;
    title: string;
    selected: boolean;
  }[];
  onTopicChange: (id: string, selected: boolean) => void;
  onAddTopic: (title: string) => void;
}

const ConversationTopics: React.FC<ConversationTopicsProps> = ({
  topics,
  onTopicChange,
  onAddTopic
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Conversation topics</CardTitle>
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
          <div className="topics-list">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="topic-item"
                onClick={() => onTopicChange(topic.id, !topic.selected)}
              >
                <div className={`topic-dot ${topic.selected ? 'selected' : ''}`} />
                <span className="topic-label">{topic.title}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ConversationTopics;
