
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Insurance {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
}

interface ActiveInsurancesProps {
  insurances: Insurance[];
}

const ActiveInsurances: React.FC<ActiveInsurancesProps> = ({ insurances }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Active insurances</CardTitle>
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
            {insurances.map((insurance) => (
              <div 
                key={insurance.id} 
                className="p-3 border border-gray-200 rounded-md"
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">{insurance.type}</h4>
                  <span className="text-xs text-gray-500">
                    {insurance.startDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ActiveInsurances;
