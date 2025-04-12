import React from 'react';
import './ProposedAgenda.css';

interface AgendaItem {
  id: string;
  text: string;
}

interface ProposedAgendaProps {
  items: AgendaItem[];
}

const ProposedAgenda: React.FC<ProposedAgendaProps> = ({ items: initialItems }) => {
  const [items, setItems] = React.useState<AgendaItem[]>(initialItems);
  const [newPoint, setNewPoint] = React.useState('');

  const handleAddPoint = () => {
    if (newPoint.trim()) {
      const newItem: AgendaItem = {
        id: `${Date.now()}`,
        text: newPoint.trim()
      };
      setItems([...items, newItem]);
      setNewPoint('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddPoint();
    }
  };

  return (
    <div className="bg-white p-4 mb-4">
      <h2 className="text-lg font-medium text-[#1B1464] mb-4">Proposed agenda</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3 agenda-item">
            <div className="h-4 bg-[#1B1464]"></div>
            <span className="text-sm text-[#1B1464] font-light">{item.text}</span>
          </div>
        ))}
        <div className="flex items-center gap-3 agenda-item">
          <div className="h-4 bg-[#1B1464]"></div>
          <span className="text-sm text-[#1B1464] font-light">...</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-transparent flex items-center justify-between gap-3">
          <input
            type="text"
            placeholder="Add points"
            className="bg-gray-100 rounded-sm p-3 text-sm text-[#1B1464] placeholder-gray-400 outline-none w-full"
            value={newPoint}
            onChange={(e) => setNewPoint(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleAddPoint}
            className="bg-gray-100 rounded-sm p-2 text-[#1C1B1F] font-medium w-12 h-auto flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposedAgenda;
