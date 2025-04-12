
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TopicsSidebar from '@/components/conversation/TopicsSidebar';
import TopicContent from '@/components/conversation/TopicContent';
import SupportPanel from '@/components/SupportPanel';
import ComplianceMeter from '@/components/ComplianceMeter';

// Mock data
const initialTopics = [
  { id: 'opening', title: 'Opening' },
  { id: 'pending-claims', title: 'Pending claims' },
  { id: 'policy-changes', title: 'Policy changes' },
  { id: 'additional-policy-needs', title: 'Additional policy needs' },
  { id: 'business-developments', title: 'Business developments' },
  { id: 'finances', title: 'Finances' },
  { id: 'production-capacity', title: 'Production Capacity Utilization' },
  { id: 'revenue-growth', title: 'Revenue Growth Insights' },
  { id: 'insurance-claim', title: 'Insurance Claim Experience' },
  { id: 'future-risk', title: 'Future Risk Management' },
  { id: 'cyber-insurance', title: 'Cyber Insurance' },
  { id: 'compliance', title: 'Compliance' },
];

const topicContent: Record<string, { title: string; points: { id: string; content: string }[] }> = {
  'production-capacity': {
    title: 'Production Capacity Utilization',
    points: [
      {
        id: uuidv4(),
        content: 'Impact of 20% increase in production capacity due to new machines on operational efficiency'
      },
      {
        id: uuidv4(),
        content: 'Strategies for maximizing the benefits of increased production capabilities'
      }
    ]
  },
  'revenue-growth': {
    title: 'Revenue Growth Insights',
    points: [
      {
        id: uuidv4(),
        content: 'Discussion of factors contributing to the 15% revenue growth and how insurance can support continued growth'
      },
      {
        id: uuidv4(),
        content: 'Exploring potential investments or expansions supported by increased revenue'
      }
    ]
  },
  'insurance-claim': {
    title: 'Insurance Claim Experience',
    points: [
      {
        id: uuidv4(),
        content: 'Overview of the claims submitted in 2024 and lessons learned from them'
      },
      {
        id: uuidv4(),
        content: 'Mitigation strategies to prevent similar incidents (e.g., machine failure, water leakage)'
      }
    ]
  },
  'compliance': {
    title: 'Compliance',
    points: [
      {
        id: uuidv4(),
        content: 'Review of current compliance status and areas for improvement'
      },
      {
        id: uuidv4(),
        content: 'Discussion of new regulations affecting the manufacturing sector and required adaptations'
      }
    ]
  }
};

const supportInsights = (
  <div className="space-y-4">
    <h4 className="font-semibold mb-2">Key insurance implications</h4>

    <div className="prose text-sm">
      <p>Regarding the new potato slicing machine, consider these key insurance implications:</p>

      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li>
          <strong>Coverage needs:</strong> we'll need to adjust the equipment breakdown insurance to encompass potential mechanical failures.
        </li>
        <li>
          <strong>Compliance checks:</strong> please ensure the machine's value aligns with its current coverage limits for an updated policy.
        </li>
        <li>
          <strong>Premium impact:</strong> the addition may affect your premium - I'll calculate the specifics once we finalize all details.
        </li>
        <li>
          <strong>Risk mitigation:</strong> evaluating business interruption insurance could be beneficial to manage any disruptions effectively.
        </li>
      </ul>
    </div>
  </div>
);

const supportSuggestions = [
  "Acquiring new machine requires immediate compliance checks or policy updates?",
  "Create high-level cost estimation"
];

const Conversation: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState('production-capacity');
  const [content, setContent] = useState(topicContent);

  const handleAddPoint = (topicId: string, pointContent: string) => {
    setContent(prev => {
      // If the topic doesn't exist yet, create it
      if (!prev[topicId]) {
        const topic = initialTopics.find(t => t.id === topicId);
        prev[topicId] = {
          title: topic?.title || 'New Topic',
          points: []
        };
      }

      // Add the new point
      const newPoint = { id: uuidv4(), content: pointContent };
      return {
        ...prev,
        [topicId]: {
          ...prev[topicId],
          points: [...prev[topicId].points, newPoint]
        }
      };
    });
  };

  const handleSuggestionClick = (suggestion: string) => {
    console.log('Suggestion clicked:', suggestion);
  };

  const currentContent = content[activeTopic] || {
    title: initialTopics.find(t => t.id === activeTopic)?.title || 'No content',
    points: []
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Left sidebar - Topics list */}
      <div className="md:col-span-2">
        <TopicsSidebar
          topics={initialTopics}
          activeTopic={activeTopic}
          onTopicChange={setActiveTopic}
        />
      </div>

      {/* Middle column - Topic content */}
      <div className="md:col-span-7 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-amlin-blue mb-2 md:mb-0">Conversation topics</h2>
          <ComplianceMeter
            value={25}
            showAlert={true}
            size="lg"
          />
        </div>

        <TopicContent
          title={currentContent.title}
          points={currentContent.points}
          onAddPoint={(content) => handleAddPoint(activeTopic, content)}
        />
      </div>

      {/* Right column - Support */}
      <div className="md:col-span-3">
        <SupportPanel
          title="MS Amlin support"
          insights={supportInsights}
          suggestions={supportSuggestions}
          onSuggestionClick={handleSuggestionClick}
        />
      </div>
    </div>
  );
};

export default Conversation;
