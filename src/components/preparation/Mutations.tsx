import React from 'react';

interface Mutation {
  id: string;
  type: 'claim' | 'policy_change';
  description: string;
  date: string;
}

interface MutationsProps {
  mutations: Mutation[];
}

const Mutations: React.FC<MutationsProps> = ({ mutations }) => {
  const claimMutations = mutations.filter(m => m.type === 'claim');
  const policyMutations = mutations.filter(m => m.type === 'policy_change');

  return (
    <div className="pt-0 pb-0 pl-6 pr-6 bg-white">
      <h2 className="text-[#1B1464] text-xl font-medium mb-6">List of mutations</h2>

      <h3 className="text-[#1B1464] text-lg font-medium mb-3">Claims</h3>
      <div className="space-y-4 mb-8">
        {claimMutations.map((mutation) => (
          <div key={mutation.id} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-b-0 last:pb-0">
            <span className="text-[#1B1464] font-light pb-0 pt-0 text-[16px]">{mutation.description}</span>
            <span className="text-[#1B1464] font-light pb-0 pt-0 text-[14px]">{mutation.date}</span>
          </div>
        ))}
      </div>

      <h3 className="text-[#1B1464] text-lg font-medium mb-3">Policies</h3>
      <div className="space-y-4">
        {policyMutations.map((mutation) => (
          <div key={mutation.id} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-b-0 last:pb-0">
            <span className="text-[#1B1464] font-light pb-0 pt-0 text-[16px]">{mutation.description}</span>
            <span className="text-[#1B1464] font-light pb-0 pt-0 text-[14px]">{mutation.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mutations;
