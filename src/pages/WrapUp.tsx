
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WrapUpTabs from '@/components/wrapup/WrapUpTabs';
import SummaryContent from '@/components/wrapup/SummaryContent';
import ActionPoints from '@/components/wrapup/ActionPoints';
import LearningPoints from '@/components/wrapup/LearningPoints';
import Sources from '@/components/wrapup/Sources';
import { toast } from "sonner";

// Mock data
const summaryContent = `
<h3>Summary and action points Freddie (Farm Fields)</h3>

<p>Dear Freddie,</p>

<p>Thank you for our insightful update meeting. Here's a summary of what we discussed, including points regarding the new potato slicing machine.</p>

<h4>Summary</h4>
<ul>
  <li>We talked about the impressive growth of Farm Fields and the significant demand in the recent months, which increases strain on machines.</li>
  <li>There were an outstanding harvest results discussed. It was nice to hear that it will be better yields.</li>
  <li>We then regarding the short cutoff from your 2024 to 2025 campaign, until proved you with an update on the taxes.</li>
  <li>Regarding the new potato slicing machine, we discussed its value, compliance with regulations and potential discount for prompt decision. This would ultimately lead to a premium increase.</li>
  <li>Lastly, we discussed business options available that might ensure you <strong>business interruption insurance</strong> and <strong>breakdown insurance</strong> for business interruption insurance.</li>
</ul>

<h4>Action points for you</h4>
<ul>
  <li>It would be great if you could send me the invoice for the potato slicing machine within 3 business days after purchase.</li>
  <li>Take the time to review the proposals for additional insurances and let me know if there's anything else you need.</li>
</ul>

<h4>Action points for me</h4>
<ul>
  <li>Once I have received the invoice for the potato slicing machine, I will adjust the policy and calculate the new premium.</li>
  <li>I will send you an initial order in business days with the details of the proposed additional insurances.</li>
  <li>Add specific information on the specifics of the ongoing claim until keep you updated on the progress.</li>
  <li>I will look into the possibilities of a premium discount when considering all insurances.</li>
</ul>

<p>Feel free to let me know if there are any further questions. I am ready to help you.</p>

<p>Best regards,</p>

<p>Agnes</p>
`;

const actionPoints = [
  {
    id: uuidv4(),
    content: 'Receive and processing of invoice/final offer for the invoice slicing machine from Freddie and process within 3 business days after receipt',
    assignee: 'Agnes'
  },
  {
    id: uuidv4(),
    content: 'Policy adjustment - prepare the adjustment of policy 1, and calculate the new premium once the invoice slicing machine is received',
    assignee: 'Agnes'
  },
  {
    id: uuidv4(),
    content: 'Send proposition and costing - Prepare an organized cost list within 5 business days with details and recommendations regarding breakdown insurance/business interruption insurance',
    assignee: 'Agnes'
  },
  {
    id: uuidv4(),
    content: 'Claim management - Follow up on the status of the ongoing claim about the steel issue in April 2024 and provide Freddie with an update on the progress',
    assignee: 'Agnes'
  },
  {
    id: uuidv4(),
    content: 'Research premium discount opportunities - Explore the possibilities for a premium discount if Freddie decides to consolidate all the insurances with MS Amlin',
    assignee: 'Agnes'
  },
  {
    id: uuidv4(),
    content: 'Send invoice for the potato slicing machine within 3 business days after purchase',
    assignee: 'Freddie'
  },
  {
    id: uuidv4(),
    content: 'Review the proposals for additional insurances and let Agnes know if there\'s anything else needed',
    assignee: 'Freddie'
  }
];

const learningCategories = [
  {
    id: uuidv4(),
    title: 'Cultivate client relationships',
    points: [
      'Active listening: Practice actively listening during client conversations to understand their concerns and preferences, fostering trust and rapport.',
      'Personalized approach: Tailor communication style to match client\'s communication preferences and social style.'
    ]
  },
  {
    id: uuidv4(),
    title: 'Strengthen compliance knowledge',
    points: [
      'Industry regulations: Stay updated on upcoming agricultural regulations that may impact client\'s operations, requirements and social policy.',
      'Offer compliance tools: Full range of digital tools that can help clients track compliance more effectively, such as checklist tools.'
    ]
  },
  {
    id: uuidv4(),
    title: 'Focus on risk management',
    points: [
      'Risk assessment: Regularly evaluate clients\' risk profiles and suggest appropriate risk mitigation strategies.',
      'Proactive solutions: Offer proactive solutions that prevent risks before they escalate into issues.'
    ]
  }
];

const sources = [
  {
    id: uuidv4(),
    title: 'Agricultural insurance policy guidelines.pdf',
    type: 'document' as const,
    url: '#'
  },
  {
    id: uuidv4(),
    title: 'Machine valuation guidelines.pdf',
    type: 'document' as const,
    url: '#'
  },
  {
    id: uuidv4(),
    title: 'Insurance standards for machinery.pdf',
    type: 'document' as const,
    url: '#'
  },
  {
    id: uuidv4(),
    title: 'Comprehensive agricultural risk management',
    type: 'link' as const,
    url: '#'
  }
];

const WrapUp = () => {
  const [activeTab, setActiveTab] = useState('Summary');
  const tabs = [
    'Summary',
    'Action points',
    'Learning points'
  ];

  const handleEdit = () => {
    toast.info("Edit mode enabled", {
      description: "You can now edit the content."
    });
  };

  const handleShare = () => {
    toast.success("Content shared", {
      description: "The content has been shared with the client."
    });
  };

  const handleOpenKnowledgeCenter = () => {
    toast.info("Knowledge center", {
      description: "Opening knowledge center..."
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-amlin-blue mb-4">Wrap-up</h2>
      
      <WrapUpTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
        <div className="md:col-span-9">
          {activeTab === 'Summary' && (
            <SummaryContent
              content={summaryContent}
              onEdit={handleEdit}
              onShare={handleShare}
            />
          )}
          
          {activeTab === 'Action points' && (
            <ActionPoints
              actionPoints={actionPoints}
              onEdit={handleEdit}
              onShare={handleShare}
            />
          )}
          
          {activeTab === 'Learning points' && (
            <LearningPoints
              categories={learningCategories}
              onEdit={handleEdit}
              onOpenKnowledgeCenter={handleOpenKnowledgeCenter}
            />
          )}
        </div>
        
        <div className="md:col-span-3">
          <Sources sources={sources} />
        </div>
      </div>
    </div>
  );
};

export default WrapUp;
