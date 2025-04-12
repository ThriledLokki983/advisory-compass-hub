
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface Point {
  id: string;
  content: string;
}

interface TopicContentProps {
  title: string;
  points: Point[];
  onAddPoint: (content: string) => void;
}

const TopicContent: React.FC<TopicContentProps> = ({
  title,
  points,
  onAddPoint
}) => {
  const [newPoint, setNewPoint] = useState('');

  const handleAddPoint = () => {
    if (newPoint.trim()) {
      onAddPoint(newPoint);
      setNewPoint('');
    }
  };

  return (
    <div className="space-y-6 pr-4 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-[#2D2D6D]">{title}</h3>

      <div className="space-y-0">
        {points.map((point, index) => (
          <div key={point.id} className="relative pl-6 py-3 border-l border-gray-200">
            {/* Timeline dot */}
            <div className="absolute left-[-4px] top-5 w-2 h-2 rounded-full border border-gray-300 bg-white"></div>

            {/* Content */}
            <p className="text-gray-800">{point.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto !mt-auto flex space-x-2 !mb-6 bg-transparent flex items-center justify-between gap-3">
        <Input
          value={newPoint}
          onChange={(e) => setNewPoint(e.target.value)}
          placeholder="Add notes"
          className="bg-gray-100 rounded-sm h-12 p-4 text-sm text-[#1B1464] placeholder-gray-400 outline-none w-full"
          onKeyDown={(e) => e.key === 'Enter' && handleAddPoint()}
        />
        <Button
          size="icon"
          onClick={handleAddPoint}
          variant="ghost"
            className="bg-gray-100 rounded-sm p-4 text-[#1C1B1F] font-medium w-12 h-auto flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TopicContent;
