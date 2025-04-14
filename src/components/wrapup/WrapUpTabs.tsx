
import React from 'react';
import { cn } from '@/lib/utils';

interface WrapUpTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  onEditSummary?: () => void;
  onShare?: () => void;
}

const WrapUpTabs: React.FC<WrapUpTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  onEditSummary,
  onShare
}) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 mb-6 py-3">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "py-3 px-1 text-sm font-medium relative",
              activeTab === tab
                ? "text-[#1B1464]" // Updated color here
                : "text-gray-500 hover:text-gray-700"
            )}
            onClick={() => onTabChange(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1B1464]"></span> // Updated underline color
            )}
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        {onEditSummary && (
          <button
            onClick={onEditSummary}
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Edit summary
          </button>
        )}
        {onShare && (
          <button
            onClick={onShare}
            className="px-4 py-2 text-sm font-medium text-white bg-[#E11F27] rounded-md hover:bg-[#c91922]"
          >
            Share with Farm Frites
          </button>
        )}
      </div>
    </div>
  );
};

export default WrapUpTabs;
