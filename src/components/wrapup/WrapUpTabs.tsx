
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
    <div className="border-b border-gray-200 mb-6">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-3 px-1 text-sm font-medium relative ${
              activeTab === tab 
                ? 'text-amlin-blue font-semibold' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-amlin-blue"
              ></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WrapUpTabs;
