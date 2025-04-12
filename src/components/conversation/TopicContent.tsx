
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {points.map((point) => (
          <div
            key={point.id}
            className="p-4 border-l-2 border-amlin-blue bg-gray-50 rounded-r-md"
          >
            <p>{point.content}</p>
          </div>
        ))}

        <div className="flex space-x-2">
          <Input
            value={newPoint}
            onChange={(e) => setNewPoint(e.target.value)}
            placeholder="Add points"
            className="flex-1"
            onKeyDown={(e) => e.key === 'Enter' && handleAddPoint()}
          />
          <Button size="icon" onClick={handleAddPoint}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopicContent;
