import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './ui/card';
import meterImage from '../img/Info-meter.png';

interface ComplianceMeterProps {
  value: number; // 0-100
  showAlert?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ComplianceMeter: React.FC<ComplianceMeterProps> = ({
  value,
  showAlert = false,
  size = 'md',
  className
}) => {
  const getComplianceColor = (value: number) => {
    if (value < 33) return 'compliance-red';
    if (value < 66) return 'compliance-yellow';
    return 'compliance-green';
  };

  const getComplianceText = (value: number) => {
    if (value < 33) return 'Non-compliance detected. Immediate action needed, topic will be prioritized during conversation.';
    if (value < 66) return 'Partial compliance';
    return 'Fully compliant';
  };

  const getSizeDimensions = (size: string) => {
    switch(size) {
      case 'sm': return { width: 120, height: 60, thickness: 8 };
      case 'lg': return { width: 200, height: 100, thickness: 12 };
      default: return { width: 160, height: 80, thickness: 10 };
    }
  };

  const { width, height, thickness } = getSizeDimensions(size);
  const complianceClass = getComplianceColor(value);
  const complianceText = getComplianceText(value);

  // Calculate the angle for the needle
  const needleAngle = -90 + (value / 100 * 180);

  return (
    <div className="bg-white shadow-sm h-full pt-4" style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <div className="relative" style={{ width: `${width + 60}px`, height: `auto` }}>
        {/* Background arc */}
        <img src={meterImage} alt="Compliance Meter" />
      </div>
      <div className="text-left mb-1 font-semibold text-[#1B1464] pt-8 pl-4 pr-4 w-full">COMPLIANCE METER</div>

      <div className={cn(
        "text-m font-light mt-2 text-left pl-4 pr-2 w-full text-[#1B1464]" ,
      )}>
        {complianceText}
      </div>

      {showAlert && complianceClass === 'compliance-red' && (
        <div className="text-xs text-[#1B1464] mt-1 text-center">
          Immediate action needed, topic will be prioritized during conversation.
        </div>
      )}
    </div>
  );
};

export default ComplianceMeter;
