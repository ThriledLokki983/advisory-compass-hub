
import React, { useState } from 'react';
import CompanyDetails from '@/components/preparation/CompanyDetails';
import ActiveInsurances from '@/components/preparation/ActiveInsurances';
import Mutations from '@/components/preparation/Mutations';
import ConversationTopics from '@/components/preparation/ConversationTopics';
import NewsFeed from '@/components/preparation/NewsFeed';
import SuggestedProducts from '@/components/preparation/SuggestedProducts';
import SupportPanel from '@/components/SupportPanel';
import ComplianceMeter from '@/components/ComplianceMeter';

// Mock data
const companyData = {
  name: 'Acme Manufacturing Inc.',
  sector: 'Manufacturing',
  employees: 245,
  productionCapacity: '10K units per month',
  claims: 3,
  premiumAmount: '€85,600',
  insuranceProvider: 'MS Amlin',
};

const insurances = [
  { id: '1', type: 'Property Cyber Insurance', startDate: 'May 2024', endDate: 'May 2025' },
  { id: '2', type: 'Product Liability Insurance', startDate: 'August 2024', endDate: 'August 2025' },
  { id: '3', type: 'Professional Cyber Insurance', startDate: 'May 2024', endDate: 'May 2025' },
  { id: '4', type: 'Property Cyber Insurance', startDate: 'August 2024', endDate: 'August 2025' },
];

const mutations = [
  { 
    id: '1', 
    type: 'claim' as const, 
    description: 'Water damage in the storage area', 
    date: 'February 2024' 
  },
  { 
    id: '2', 
    type: 'policy_change' as const, 
    description: 'Increased coverage for equipment', 
    date: 'April 2024' 
  },
  { 
    id: '3', 
    type: 'claim' as const, 
    description: 'Burn-out of the electrical system', 
    date: 'June 2024' 
  },
];

const initialTopics = [
  { id: '1', title: 'Opening', selected: true },
  { id: '2', title: 'Pending claims', selected: true },
  { id: '3', title: 'Policy changes', selected: false },
  { id: '4', title: 'Additional policy needs', selected: false },
  { id: '5', title: 'Business developments', selected: true },
  { id: '6', title: 'Finances', selected: false },
  { id: '7', title: 'Compliance', selected: true },
];

const news = [
  {
    id: '1',
    title: 'New EU regulations on cyber-resilience expected by October',
    summary: 'Companies in the manufacturing sector should prepare for stricter compliance requirements.',
    date: 'June 15, 2024',
    url: '#',
  },
  {
    id: '2',
    title: 'The most successful business insurance products you never knew existed',
    summary: 'Discover new ways to protect your business from emerging risks.',
    date: 'June 10, 2024',
    url: '#',
  },
  {
    id: '3',
    title: 'Insurance rates for manufacturing machinery rising amid global parts shortage',
    summary: 'A worldwide shortage of parts is putting pressure on manufacturing equipment insurance rates.',
    date: 'June 5, 2024',
    url: '#',
  },
];

const suggestedProducts = [
  {
    id: '1',
    name: 'Extended Cyber Risk Insurance',
    description: 'Comprehensive protection against sophisticated cyber attacks and data breaches.',
    code: 'CYB-1-EXT',
  },
  {
    id: '2',
    name: 'Business Interruption Plus',
    description: 'Advanced coverage for business interruption including supply chain disruptions.',
    code: 'BIP-2-ADV',
  },
  {
    id: '3',
    name: 'Product Liability Enhanced',
    description: 'Enhanced coverage for product liability including recall expenses.',
    code: 'PLE-3-ENH',
  },
];

const supportInsights = (
  <div className="space-y-4">
    <p className="text-sm">
      Regarding the compliance status, this company needs your immediate attention.
    </p>
    
    <h4 className="text-sm font-semibold mt-4">Key insights and recommendations:</h4>
    <ul className="list-disc pl-5 text-sm space-y-2">
      <li>Compliance needs: A recent audit revealed the company is not fully compliant with new cyber-security regulations.</li>
      <li>Product recalls: Consider adding product recall coverage to mitigate recent supply chain issues.</li>
      <li>Premium details: Annual premium has increased by 7% since last year due to the additional machinery.</li>
      <li>Insurance claim experience: Previous water damage claim was processed smoothly but with delays due to incomplete information.</li>
    </ul>
  </div>
);

const supportSuggestions = [
  "Assist with new machine compliance requirements",
  "Create high-level cost estimation",
  "Review machinery valuation documents"
];

const Preparation: React.FC = () => {
  const [topics, setTopics] = useState(initialTopics);

  const handleTopicChange = (id: string, selected: boolean) => {
    setTopics(topics.map(topic => 
      topic.id === id ? { ...topic, selected } : topic
    ));
  };

  const handleSuggestionClick = (suggestion: string) => {
    console.log('Suggestion clicked:', suggestion);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Left column - Company details */}
      <div className="md:col-span-3">
        <CompanyDetails {...companyData} />
      </div>
      
      {/* Middle column - Lists & Actions */}
      <div className="md:col-span-6 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-amlin-blue mb-2 md:mb-0">Preparation</h2>
          <ComplianceMeter value={25} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActiveInsurances insurances={insurances} />
          <Mutations mutations={mutations} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ConversationTopics 
            topics={topics} 
            onTopicChange={handleTopicChange} 
          />
          <NewsFeed news={news} />
        </div>
        
        <SuggestedProducts products={suggestedProducts} />
      </div>
      
      {/* Right column - Support */}
      <div className="md:col-span-3">
        <SupportPanel 
          insights={supportInsights}
          suggestions={supportSuggestions}
          onSuggestionClick={handleSuggestionClick}
        />
      </div>
    </div>
  );
};

export default Preparation;
