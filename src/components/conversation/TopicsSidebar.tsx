
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
      <CardContent className="p-0">
        <ul className="space-y-0">
          {topics.map((topic) => {
            const isActive = activeTopic === topic.id;
            return (
              <li key={topic.id} className="relative">
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                )}
                <button
                  className={`w-full text-left px-4 py-3 border-b border-gray-100 ${
                    isActive
                      ? 'text-red-500 font-medium'
                      : 'text-[#2D2D6D] hover:bg-gray-50'
                  }`}
                  onClick={() => onTopicChange(topic.id)}
                >
                  {topic.title}
                </button>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TopicsSidebar;
