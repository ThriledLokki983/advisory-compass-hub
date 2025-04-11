
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Topic {
  id: string;
  title: string;
}

interface TopicsSidebarProps {
  topics: Topic[];
  activeTopic: string;
  onTopicChange: (id: string) => void;
}

const TopicsSidebar: React.FC<TopicsSidebarProps> = ({
  topics,
  activeTopic,
  onTopicChange
}) => {
  return (
    <Card className="h-full">
      <CardContent className="p-2">
        <ul className="space-y-1">
          {topics.map((topic) => (
            <li key={topic.id}>
              <button
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                  activeTopic === topic.id
                    ? 'bg-amlin-blue text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => onTopicChange(topic.id)}
              >
                {topic.title}
              </button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TopicsSidebar;
