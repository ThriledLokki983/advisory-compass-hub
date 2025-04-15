
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import './CompanyDetails.css';

interface CompanyDetailsProps {
  name: string;
  employees: number;
  claimsRatio: string;
  premiumAmount: string;
  premiumChange: string;
  revenue: string;
  revenueChange: string;
  claims: number;
  claimsChange: string;
  compliance: number;
  insuranceProvider: string;
  mutations?: Array<{
    id: string;
    date: string;
    type: string;
    description: string;
  }>;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  name,
  employees,
  claimsRatio,
  premiumAmount,
  premiumChange,
  revenue,
  revenueChange,
  claims,
  claimsChange,
  compliance,
  insuranceProvider,
  mutations = [],
}) => {
  return (
    <div className="p-6">
      <h2 className="text-[#1B1464] text-xl font-medium mb-6 text-[26px]">Company details - {name}</h2>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-[#1B1464] font-medium mb-2 text-[16px]">NUMBER OF EMPLOYEES</h3>
          <p className="text-[#1B1464] text-[15px]">{employees}</p>
        </div>

        <div>
          <h3 className="text-[#1B1464] font-medium mb-2 text-[16px]">CLAIMS RATIO</h3>
          <p className="text-[#1B1464] text-[15px]">{claimsRatio}</p>
        </div>

        <div>
          <h3 className="text-[#1B1464] font-medium mb-2 text-[16px]">ANNUAL PREMIUM AMOUNTS IN 2024</h3>
          <p className="text-[#1B1464] text-[15px]">
            {premiumAmount}&nbsp;
            (<span className="text-green-500 font-semibold ml-1">{premiumChange}</span>)
          </p>
        </div>

        <div>
          <h3 className="text-[#1B1464] font-medium mb-2 text-[16px]">REVENUE</h3>
          <p className="text-[#1B1464] text-[15px]">
            {revenue}&nbsp;
            (<span className="text-green-500 font-semibold ml-1">{revenueChange}</span>)
          </p>
        </div>

        <div>
          <h3 className="text-[#1B1464] font-medium mb-2 text-[16px]">NUMBER OF CLAIMS IN 2024</h3>
          <p className="text-[#1B1464] text-[15px]">
            {claims}&nbsp;
            (<span className="text-red-500 font-semibold ml-1">{claimsChange}</span>)
          </p>
        </div>

        <div>
          <h3 className="text-[#1B1464] font-medium mb-2 text-[16px]">COMPLIANCE</h3>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
              style={{ width: `100%` }}
            >
              <div className="h-3 w-3 bg-black rounded-full relative -top-0.5" style={{ marginLeft: `${compliance}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
