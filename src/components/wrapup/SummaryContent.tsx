
import React from 'react';
import { Button } from '@/components/ui/button';
import { Info, FileEdit, Share } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SummaryContentProps {
  content: string;
  onEdit: () => void;
  onShare: () => void;
}

const SummaryContent: React.FC<SummaryContentProps> = ({
  content,
  onEdit,
  onShare
}) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <Info className="h-4 w-4 mr-2" />
          <span>Generated by AI. Check for accuracy.</span>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm" onClick={onEdit} className="text-[#E11F27] border-[#E11F27] hover:bg-[#E11F27]/10">
            Edit summary
          </Button>
          <Button size="sm" onClick={onShare} className="bg-[#E11F27] hover:bg-[#E11F27]/90">
            Share with Farm Frites
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links</h2>
            <div className="space-y-2">
              <a href="#" className="text-[#1B1464] hover:underline flex items-center">
                <span className="mr-2">1</span>
                Equipment breakdown insurance.pdf
              </a>
              <a href="#" className="text-[#1B1464] hover:underline flex items-center">
                <span className="mr-2">2</span>
                Business interruption insurance.pdf
              </a>
            </div>
          </div>
        </div>

        <div 
          className={cn(
            'prose max-w-none',
            'prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-gray-900 prose-h3:mb-6',
            'prose-h4:text-lg prose-h4:font-semibold prose-h4:text-gray-900 prose-h4:mt-8 prose-h4:mb-4',
            'prose-p:text-gray-600 prose-p:leading-relaxed',
            'prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2',
            'prose-li:text-gray-600'
          )}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default SummaryContent;
