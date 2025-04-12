
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

<p>Thank you for our annual update meeting. Here's a summary of what we discussed, including points regarding the new potato slicing machine.</p>

<h4>Summary</h4>
<ul>
  <li>We talked about the impressive growth of Farm Fields and the significant decrease in the number of claims in the recent months.</li>
  <li>There was an outstanding harvest results discussed. It was nice to hear that it will be better yields.</li>
  <li>We then discussed the short cutoff from your 2024 to 2025 campaign, and I provided you with an update on the taxes.</li>
  <li>Regarding the new potato slicing machine, we discussed its value, compliance with regulations and potential discount for prompt decision. This would ultimately lead to a premium increase.</li>
  <li>Lastly, we discussed business options available that might ensure you with <strong>business interruption insurance</strong> and <strong>breakdown insurance</strong> for business continuity.</li>
</ul>

<h4>Action points for you</h4>
<ul>
  <li>It would be great if you could send me the invoice for the potato slicing machine within 3 business days after purchase.</li>
  <li>Take the time to review the proposals for additional insurances and let me know if there's anything else you need.</li>
</ul>

<h4>Action points for me</h4>
<ul>
  <li>Once I have received the invoice for the potato slicing machine, I will adjust the policy and calculate the new premium.</li>
  <li>I will send you an initial offer in 5 business days with the details of the proposed additional insurances.</li>
  <li>Add specific information on the specifics of the ongoing claim and keep you updated on the progress.</li>
  <li>I will look into the possibilities of a premium discount when considering all insurances.</li>
</ul>

<p>Feel free to let me know if there are any further questions. I am ready to help you.</p>

<p>Best regards,</p>

<p>Agnes</p>
`;

const actionPoints = [
  {
    id: uuidv4(),
    content: 'Receipt and processing of invoice - Wait for the invoice of the potato slicing machine from Freddie and process it within 3 business days after receipt.',
    assignee: 'Agnes'
  },
  {
    id: uuidv4(),
    content: 'Policy adjustment - Adjust the current <a href="#" class="text-amlin-blue underline">insurance policy</a> and calculate the new premium once the invoice of the potato slicing machine is received.',
    assignee: 'Agnes'
  },
  {
    id: uuidv4(),
    content: 'Email preparation and sending - Prepare an organized cost list within 5 business days, with details and recommendations about the proposed additional insurances <a href="#" class="text-amlin-blue underline">business interruption insurance</a> and <a href="#" class="text-amlin-blue underline">business breakdown insurance</a>.',
    assignee: 'Agnes'
  },
  {
    id: uuidv4(),
    content: 'Claim management - Follow up on the status of the ongoing claim about the short circuit in June 2024 and provide Freddie with updates on the progress.',
    assignee: 'Agnes'
  },
  {
    id: uuidv4(),
    content: 'Research premium discount opportunities - Explore the possibilities for a premium discount if Freddie decides to consolidate all his insurances with MS Amlin.',
    assignee: 'Agnes'
  },
  {
    id: uuidv4(),
    content: 'Send invoice for the potato slicing machine within 3 business days after purchase.',
    assignee: 'Freddie'
  },
  {
    id: uuidv4(),
    content: 'Review the proposals for additional insurances and let Agnes know if there\'s anything else needed.',
    assignee: 'Freddie'
  }
];

const learningCategories = [
  {
    id: uuidv4(),
    title: 'Cultivate client relationships',
    points: [
      'Active listening: Practice actively listening during client conversations to understand their concerns and preferences, fostering trust and rapport.',
      'Personalized communication: Tailor communication style to match client\'s communication preferences, background and social style.'
    ]
  },
  {
    id: uuidv4(),
    title: 'Strengthen compliance knowledge',
    points: [
      'Regulatory tracking: Stay updated on upcoming agricultural regulations that may impact client\'s operations, requirements and policy.',
      'Utilize compliance tools: Make use of the compliance tools available, such as the compliance checklist tool.'
    ]
  },
  {
    id: uuidv4(),
    title: 'Focus on risk management',
    points: [
      'Risk Assessment: Regularly evaluate client\'s risk profiles and suggest appropriate risk mitigation strategies.',
      'Proactive solutions: Offer proactive solutions that prevent risks before they escalate into issues.'
    ]
  }
];

const sources = [
  {
    id: uuidv4(),
    title: 'Business policy.pdf',
    type: 'document',
    url: '#'
  },
  {
    id: uuidv4(),
    title: 'Exported data folder',
    type: 'document',
    url: '#'
  },
  {
    id: uuidv4(),
    title: 'Client summary link',
    type: 'link',
    url: '#'
  },
  {
    id: uuidv4(),
    title: 'Comprehensive agricultural risk management',
    type: 'link',
    url: '#'
  }
];

const WrapUp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Summary');
  const tabs = ['Summary', 'Action points', 'Learning points'];

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
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-amlin-blue">Afrording - {activeTab}</h2>

      <WrapUpTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main content */}
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

        {/* Sources sidebar */}
        <div className="md:col-span-3">
          <Sources sources={sources} />
        </div>
      </div>
    </div>
  );
};

export default WrapUp;
