
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import CompanyDetails from '@/components/preparation/CompanyDetails';
import ActiveInsurances from '@/components/preparation/ActiveInsurances';
import Mutations from '@/components/preparation/Mutations';
import NewsFeed from '@/components/preparation/NewsFeed';
import ProposedAgenda from '@/components/preparation/ProposedAgenda';

// Mock data
const companyData = {
  name: 'Farm Frites',
  employees: 250,
  claimsRatio: '63%',
  premiumAmount: '€150,000',
  premiumChange: '+5%',
  revenue: '€500,000,000',
  revenueChange: '+15%',
  claims: 3,
  claimsChange: '-70%',
  compliance: 25,
};

const insurances = [
  { id: '1', type: 'Fire insurance', startDate: 'May 2024' },
  { id: '2', type: 'Inventory insurance', startDate: 'May 2024' },
  { id: '3', type: 'Cyber insurance', startDate: 'August 2025' },
  { id: '4', type: 'Transportation insurance', startDate: 'August 2025' },
];

const mutations = [
  {
    id: '1',
    type: 'claim' as const,
    description: 'Minor water leakage in the storage area',
    date: 'February 2024'
  },
  {
    id: '2',
    type: 'claim' as const,
    description: 'Machine failure of packaging technology',
    date: 'April 2024'
  },
  {
    id: '3',
    type: 'claim' as const,
    description: 'Short circuit in the electrical system',
    date: 'June 2024'
  },
  {
    id: '4',
    type: 'policy_change' as const,
    description: 'Adjustment of inventory insurance',
    date: 'March 2024'
  },
  {
    id: '5',
    type: 'policy_change' as const,
    description: 'Increased coverage for transportation insurance',
    date: 'July 2024'
  }
];

const initialTopics = [
  { id: '1', title: 'Opening', selected: false },
  { id: '2', title: 'Pending claims', selected: false },
  { id: '3', title: 'Policy changes', selected: false },
  { id: '4', title: 'Additional policy needs', selected: false },
  { id: '5', title: 'Business developments', selected: false },
  { id: '6', title: 'Finances', selected: false },
  { id: '7', title: 'Compliance', selected: false },
];

const news = [
  {
    id: '1',
    title: 'New EU regulations on cyber-resilience expected by October',
    summary: 'Companies in the manufacturing ...',
    date: 'June 15, 2024',
    url: '#',
  },
  {
    id: '2',
    title: 'The most successful business insurance products you never knew existed',
    summary: 'Discover new ways to protect ....',
    date: 'June 10, 2024',
    url: '#',
  },
  {
    id: '3',
    title: 'Insurance rates for manufacturing machinery rising amid global parts shortage',
    summary: 'A worldwide shortage of parts is putting pressure on manufacturing...',
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
    <p className="text-sm ">
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

const agendaItems = [
  { id: '1', text: 'Opening' },
  { id: '2', text: 'Pending claims' },
  { id: '3', text: 'Policy mutations' },
  { id: '4', text: 'Additional policy needs' },
  { id: '5', text: 'Business developments' },
  { id: '6', text: 'Finances' },
  { id: '7', text: 'Current notes' },
  { id: '8', text: 'Compliance' },
];

const Preparation: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Middle column - Lists & Actions */}
        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="">
              <CompanyDetails {...companyData} insuranceProvider="MS Amlin" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
              <div className="bg-white shadow-sm md:col-span-5">
                <div className="grid grid-cols-1 gap-8">
                  <ActiveInsurances insurances={insurances} />
                  <Mutations mutations={mutations} />
                </div>
              </div>
              <div className="md:col-span-3">
                <ProposedAgenda items={agendaItems} />
                <NewsFeed news={news} />
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Support */}
        <div className="md:col-start-9 md:col-span-full h-full flex flex-col">
            <h2 className="text-lg font-semibold text-[#1B1464] mb-0 bg-[#E5E3EB] p-6">MS Amlin support</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm mt-0 flex-1 flex flex-col">
              <p className="text-sm bg-[#F3F3F3] p-4 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-0 border border-[#E5E3EB]">
                <span className="text-[#101010] text-[16px] font-light">
                  If you want to know more about the company, active insurances or anything else, please let me know.
                </span>
              </p>
              <div className="mt-4 bg-[#F3F3F3] p-3 rounded flex items-center gap-2 mt-auto">
                <input
                  type="text"
                  placeholder="Message MS Amlin support"
                  className="flex-1 bg-transparent border-none text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
                />
                <button className="text-[#1B1464] p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><mask id="a" width="25" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path fill="#D9D9D9" stroke="#E5E3EB" d="M.812.5h23v23h-23z"/></mask><g mask="url(#a)"><path fill="#1B1D64" stroke="#E5E3EB" strokeWidth=".025" d="M5.3 16.837v.02l.017-.008 11.85-5.196.026-.012-.026-.011-11.85-5.196-.017-.008V10.292l.01.002 5.374 1.347-5.375 1.347-.01.003V16.837Zm-1.475 2.32V4.125l17.168 7.515-17.168 7.515Z"/></g></svg>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preparation;
