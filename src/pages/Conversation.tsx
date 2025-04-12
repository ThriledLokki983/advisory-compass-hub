
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TopicsSidebar from '@/components/conversation/TopicsSidebar';
import TopicContent from '@/components/conversation/TopicContent';
import SupportPanel from '@/components/SupportPanel';
import ComplianceMeter from '@/components/ComplianceMeter';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

// Mock data
const initialTopics = [
  { id: 'opening', title: 'Opening' },
  { id: 'finances', title: 'Finances' },
  { id: 'pending-claims', title: 'Pending claims' },
  { id: 'policy-mutations', title: 'Policy mutations' },
  { id: 'additional-policy-needs', title: 'Additional policy needs' },
  { id: 'business-developments', title: 'Business developments' },
  { id: 'current-notes', title: 'Current notes' },
  { id: 'compliance', title: 'Compliance' },
];

const topicContent = {
  'opening': {
    title: 'Opening',
    points: [
      {
        id: uuidv4(),
        content: 'Start with a friendly and professional greeting, acknowledging past interactions or developments'
      }
    ]
  },
  'finances': {
    title: 'Finances',
    points: [
      {
        id: uuidv4(),
        content: 'Address the previously outstanding invoice discussed during meeting'
      },
      {
        id: uuidv4(),
        content: 'Discuss any necessary steps or confirmations required to ensure the settlement proceeds smoothly'
      }
    ]
  },
  'pending-claims': {
    title: 'Pending claims',
    points: [
      {
        id: uuidv4(),
        content: 'Discuss the current status of the short circuit claim and provide a detailed update on what has been done so far and any outcomes or findings'
      },
      {
        id: uuidv4(),
        content: 'Identify next steps required in the claim process and any actions Freddie needs to take'
      },
      {
        id: uuidv4(),
        content: 'Establish an expected timeline for the claim resolution and clarify what Freddie can expect in terms of communication updates or decision points'
      },
      {
        id: uuidv4(),
        content: 'Consider how the ongoing claim might affect Farm Frites\' insurance strategy or premiums'
      },
      {
        id: uuidv4(),
        content: 'Discuss potential adjustments to coverage if needed based on the outcome of the claim'
      }
    ]
  },
  'policy-mutations': {
    title: 'Policy mutations',
    points: [
      {
        id: uuidv4(),
        content: 'Develop scenarios illustrating potential policy mutations, such as increased coverage limits or additional protection, contingent on claim resolution'
      },
      {
        id: uuidv4(),
        content: 'Ensure all necessary compliance checks and documentations are prepared in advance, facilitating smoother policy updates post-claim resolution'
      }
    ]
  }
};

const supportInsights = (
  <div className="space-y-4">
    <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm">
      Key insurance implications
    </div>
    
    <div className="bg-white p-4 rounded-md shadow-sm">
      <p className="mb-3">
        Regarding the new potato slicing machine, consider these key insurance implications:
      </p>

      <ul className="list-disc pl-5 space-y-3">
        <li>
          <strong>Coverage needs:</strong> we'll need to adjust his equipment breakdown insurance to encompass potential mechanical failures.
        </li>
        <li>
          <strong>Compliance checks:</strong> please ensure the machine's value aligns with his current coverage limits for an updated policy.
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
  "List the key coverage of the equipment breakdown insurance",
  "Create a high-level cost estimation for the policy update following the acquisition of a new machine valued at €250,000"
];

const Conversation: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState('pending-claims');
  const [content, setContent] = useState(topicContent);
  const [conversationPaused, setConversationPaused] = useState(true);

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
          <h2 className="text-2xl font-bold text-[#2D2D6D] mb-2 md:mb-0">Conversation Farm Frites</h2>
          
          <div className="flex items-center space-x-2">
            <Label htmlFor="conversation-status" className={`text-sm ${conversationPaused ? 'text-red-500' : 'text-green-500'}`}>
              Conversation {conversationPaused ? 'paused' : 'active'}
            </Label>
            <Switch 
              id="conversation-status" 
              checked={!conversationPaused} 
              onCheckedChange={(checked) => setConversationPaused(!checked)}
              className={conversationPaused ? 'bg-red-500' : 'bg-green-500'}
            />
          </div>
        </div>

        <div className="bg-white p-4 shadow-sm rounded-md">
          <div className="flex items-center space-x-2 mb-4">
            {/* Progress bar */}
            <div className="h-1 flex-grow flex">
              <div className="w-1/4 bg-red-500"></div>
              <div className="w-1/4 bg-yellow-500"></div>
              <div className="w-1/12 bg-black"></div>
              <div className="flex-grow bg-green-500"></div>
            </div>
          </div>
          
          <TopicContent
            title={currentContent.title}
            points={currentContent.points}
            onAddPoint={(content) => handleAddPoint(activeTopic, content)}
          />
        </div>
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
