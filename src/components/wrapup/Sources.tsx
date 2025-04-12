
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, File } from 'lucide-react';

interface Source {
  id: string;
  title: string;
  type: 'link' | 'document';
  url: string;
}

interface SourcesProps {
  sources: Source[];
}

const Sources: React.FC<SourcesProps> = ({ sources }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Links</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {sources.map((source) => (
            <li
              key={source.id}
              className="flex items-start"
            >
              {source.type === 'link' ? (
                <ExternalLink className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
              ) : (
                <File className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
              )}
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amlin-blue hover:underline text-sm"
              >
                {source.title}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Sources;
