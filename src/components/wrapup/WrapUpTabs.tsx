
import React from 'react';

interface WrapUpTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const WrapUpTabs: React.FC<WrapUpTabsProps> = ({
  tabs,
  activeTab,
  onTabChange
}) => {
  return (
    <div className="wrapup-tabs" style={{ borderBottom: '1px solid var(--border-gray-200)', marginBottom: '1.5rem' }}>
      <div className="tabs-container" style={{ display: 'flex', gap: '2rem' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button${activeTab === tab ? ' tab-active' : ''}`}
            style={{
              padding: '0.75rem 0.25rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              position: 'relative',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === tab ? 'var(--amlin-blue)' : 'var(--text-gray-500)',
            }}
            onClick={() => onTabChange(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span 
                className="active-indicator" 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--amlin-blue)'
                }}
              ></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WrapUpTabs;
