
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Mutation {
  id: string;
  type: 'claim' | 'policy_change' | 'other';
  description: string;
  date: string;
}

interface MutationsProps {
  mutations: Mutation[];
}

const Mutations: React.FC<MutationsProps> = ({ mutations }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg">List of mutations</CardTitle>
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
          <div className="space-y-3">
            {mutations.map((mutation) => (
              <div 
                key={mutation.id} 
                className="p-3 border border-gray-200 rounded-md"
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">
                    {mutation.type === 'claim' 
                      ? 'Insurance claim' 
                      : mutation.type === 'policy_change' 
                        ? 'Policy change' 
                        : 'Other mutation'}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {mutation.date}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{mutation.description}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Mutations;
