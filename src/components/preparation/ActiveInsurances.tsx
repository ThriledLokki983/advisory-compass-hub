import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import './ActiveInsurances.css';

interface Insurance {
  id: string;
  type: string;
  startDate: string;
}

interface ActiveInsurancesProps {
  insurances: Insurance[];
}

const suggestedInsurances = [
  'Product liability',
  'Food contamination'
];

const mockInsurances = [
  { id: '1', type: 'Fire insurance', startDate: 'May 2024' },
  { id: '2', type: 'Inventory insurance', startDate: 'May 2024' },
  { id: '3', type: 'Cyber insurance', startDate: 'August 2025' },
  { id: '4', type: 'Transportation insurance', startDate: 'August 2025' },
];

const ActiveInsurances: React.FC<ActiveInsurancesProps> = ({ insurances }) => {
  return (
    <div className="bg-white shadow-sm">
      <CardContent className="pt-6">
        <h2 className="text-[#1B1464] text-xl font-medium mb-6">Active insurances</h2>
        <div className="space-y-4">
          {insurances.map((insurance) => (
            <div key={insurance.id} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
              <span className="text-[#1B1464] font-light pb-0 pt-0 text-[16px]">{insurance.type}</span>
              <span className="text-[#1B1464] font-light pb-0 pt-0 text-[14px]">{insurance.startDate}</span>
            </div>
          ))}
        </div>

        <h3 className="text-[#1B1464] text-xl font-medium mt-8 mb-4">Suggested insurances</h3>
        <div className="space-y-4">
          {suggestedInsurances.map((insurance, index) => (
            <div key={index} className="text-[#1B1464] font-light pb-0 pt-0 text-[16px]">{insurance}</div>
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default ActiveInsurances;
