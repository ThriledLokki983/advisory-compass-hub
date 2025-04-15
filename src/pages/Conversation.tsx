
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
  <div className="space-y-4 flex flex-col">
    <div className="inline-block bg-gray-100 rounded-full text-sm p-3 text-[#2D2D6D] rounded-br-xl w-fit self-end">
      Key insurance implications
    </div>

    <div className="rounded-md w-[80%]">
    <p className="text-sm bg-[#F3F3F3] p-4 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-0 border border-[#E5E3EB]">
      <span className="text-[#101010] text-[16px] font-light">
        Regarding the new potato slicing machine, consider these key insurance implications:
      </span>
    </p>

    <ul className="list-disc p-5 space-y-3 text-sm bg-[#F3F3F3] p-4 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-0 border border-[#E5E3EB] mt-4">
      <li className="text-[#101010] text-[16px] font-light ml-4">
        <strong>Coverage needs:</strong> we'll need to adjust his equipment breakdown insurance to encompass potential mechanical failures.
      </li>
      <li className="text-[#101010] text-[16px] font-light ml-4">
          <strong>Compliance checks:</strong> please ensure the machine's value aligns with his current coverage limits for an updated policy.
        </li>
        <li className="text-[#101010] text-[16px] font-light ml-4">
          <strong>Premium impact:</strong> the addition may affect your premium - I'll calculatelihe specifics once we finalize all details.
        </li>
        <li className="text-[#101010] text-[16px] font-light ml-4">
          <strong>Risk mitigation:</strong> evaluating business interruption insurance could be beneficial to manage any disruptions effectively.
        </li>
      </ul>
    </div>
  </div>
);

const supportSuggestions = [
  "Calculate an estimate of the new insurance premium based on the new machine of <strong>€250,000</strong>",
  "List the key coverage for the equipment breakdown insurance"
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
    <div className="grid grid-cols-1 md:grid-cols-12 ga-0" style={{ height: 'calc(100dvh - 60px)'}}>
      {/* Middle column - Topic content */}
      <div className="mt-6 md:col-span-8 space-y-6 grid md:grid-cols-8 gap-0" style={{ gridTemplateRows: 'max-content' }}>
        <div className="flex flex-col md:flex-row items-center justify-between md:col-span-8 border-b border-border/90 py-4">
          <div>
            <h2 className="text-2xl font-bold text-[#2D2D6D] mb-2 md:mb-0">Conversation Farm Frites</h2>
            <div className="flex items-center space-x-2 mb-4">
              {/* Progress bar */}
              <div className="h-1.5 flex-grow flex mt-4">
                <div className="w-1/4 bg-red-500"></div>
                <div className="w-1/4 bg-yellow-500"></div>
                <div className="w-1/12 bg-black"></div>
                <div className="flex-grow bg-green-500"></div>
              </div>
            </div>
          </div>

          <div className="flex items-end space-x-2 pr-4 flex flex-col">
            <Label htmlFor="conversation-status" className={`text-sm ${conversationPaused ? 'text-[#E11F27]' : 'text-green-500'} mb-1`}>
              Conversation {conversationPaused ? 'paused' : 'active'}
            </Label>
            <Switch
              id="conversation-status"
              checked={!conversationPaused}
              onCheckedChange={(checked) => setConversationPaused(!checked)}
              className={conversationPaused ? 'bg-[#E11F27]' : 'bg-green-500'}
            />
          </div>
        </div>

        <div className="md:col-span-3">
          {/* Left sidebar - Topics list */}
          <TopicsSidebar
            topics={initialTopics}
            activeTopic={activeTopic}
            onTopicChange={setActiveTopic}
          />
        </div>

        <div className="bg-transparent md:col-span-5">
          <TopicContent
            title={currentContent.title}
            points={currentContent.points}
            onAddPoint={(content) => handleAddPoint(activeTopic, content)}
          />
        </div>
      </div>

      {/* Right column - Support */}
      <div className="md:col-span-4 md:col-start-9 md:col-span-full h-full flex flex-col">
        <h2 className="text-lg font-semibold text-[#1B1464] mb-0 bg-[#E5E3EB] p-6">MS Amlin support</h2>
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
