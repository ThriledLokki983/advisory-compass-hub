
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CompanyDetailsProps {
  name: string;
  sector: string;
  employees: number;
  productionCapacity: string;
  claims: number;
  premiumAmount: string;
  insuranceProvider: string;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  name,
  sector,
  employees,
  productionCapacity,
  claims,
  premiumAmount,
  insuranceProvider,
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Company details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-xs text-gray-500 uppercase">COMPANY NAME</h4>
          <p className="font-medium">{name}</p>
        </div>
        
        <div>
          <h4 className="text-xs text-gray-500 uppercase">SECTOR</h4>
          <p className="font-medium">{sector}</p>
        </div>
        
        <div>
          <h4 className="text-xs text-gray-500 uppercase">NUMBER OF EMPLOYEES</h4>
          <p className="font-medium">{employees}</p>
        </div>
        
        <div>
          <h4 className="text-xs text-gray-500 uppercase">PRODUCTION CAPACITY</h4>
          <p className="font-medium">{productionCapacity}</p>
        </div>
        
        <div>
          <h4 className="text-xs text-gray-500 uppercase">NUMBER OF CLAIMS IN 2024</h4>
          <p className="font-medium">{claims}</p>
        </div>
        
        <div>
          <h4 className="text-xs text-gray-500 uppercase">ANNUAL PREMIUM AMOUNT</h4>
          <p className="font-medium">{premiumAmount}</p>
        </div>
        
        <div>
          <h4 className="text-xs text-gray-500 uppercase">INSURANCE PROVIDER</h4>
          <p className="font-medium">{insuranceProvider}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyDetails;
