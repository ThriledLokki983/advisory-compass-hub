
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
    <div className="space-y-6">
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
      
      <div className="flex mt-6 space-x-2">
        <Input
          value={newPoint}
          onChange={(e) => setNewPoint(e.target.value)}
          placeholder="Add notes"
          className="flex-1 bg-gray-50"
          onKeyDown={(e) => e.key === 'Enter' && handleAddPoint()}
        />
        <Button 
          size="icon" 
          onClick={handleAddPoint} 
          variant="ghost"
          className="bg-gray-50 hover:bg-gray-100"
        >
          <Plus className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </div>
  );
};

export default TopicContent;
