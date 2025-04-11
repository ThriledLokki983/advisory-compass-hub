
import React from 'react';

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
    if (value < 33) return 'Non-compliance detected';
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
  
  const meterContainerClass = `compliance-meter-container ${className || ''}`;
  
  return (
    <div className={meterContainerClass} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="compliance-meter-label" style={{ textAlign: 'center', marginBottom: '0.25rem', fontWeight: 600, color: 'var(--text-gray-700)' }}>COMPLIANCE METER</div>
      <div className="compliance-meter" style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
        {/* Background arc */}
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <linearGradient id="complianceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4d4f" />
              <stop offset="50%" stopColor="#faad14" />
              <stop offset="100%" stopColor="#52c41a" />
            </linearGradient>
          </defs>
          
          {/* Semicircle background */}
          <path 
            d={`M ${thickness/2} ${height - thickness/2} 
                A ${width/2 - thickness/2} ${height - thickness/2} 0 0 1 ${width - thickness/2} ${height - thickness/2}`}
            fill="none"
            stroke="url(#complianceGradient)"
            strokeWidth={thickness}
            strokeLinecap="round"
          />
          
          {/* Needle */}
          <line
            x1={width / 2}
            y1={height - thickness}
            x2={width / 2 + (width / 2 - thickness) * Math.cos(needleAngle * Math.PI / 180)}
            y2={height - thickness - (height - thickness) * Math.sin(needleAngle * Math.PI / 180)}
            stroke="#333"
            strokeWidth={thickness / 4}
            strokeLinecap="round"
          />
          
          {/* Center circle */}
          <circle
            cx={width / 2}
            cy={height - thickness}
            r={thickness / 2}
            fill="#333"
          />
        </svg>
      </div>
      
      <div 
        className={`compliance-text-${complianceClass}`} 
        style={{ 
          fontSize: '0.875rem', 
          fontWeight: 500, 
          marginTop: '0.5rem', 
          textAlign: 'center', 
          color: `var(--${complianceClass})` 
        }}
      >
        {complianceText}
      </div>
      
      {showAlert && complianceClass === 'compliance-red' && (
        <div style={{ 
          fontSize: '0.75rem', 
          color: 'var(--compliance-red)', 
          marginTop: '0.25rem', 
          textAlign: 'center' 
        }}>
          Immediate action needed, topic will be prioritized during conversation.
        </div>
      )}
    </div>
  );
};

export default ComplianceMeter;
