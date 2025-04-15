
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, Send } from 'lucide-react';

interface SupportPanelProps {
  title?: string;
  insights?: React.ReactNode;
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
}

interface AnimatedSuggestionProps {
  suggestion: string;
  index: number;
  onSuggestionClick?: (suggestion: string) => void;
  show: boolean;
}

const AnimatedSuggestion: React.FC<AnimatedSuggestionProps> = ({ suggestion, index, onSuggestionClick, show }) => (
  <div
    className={`transition-all duration-500 ease-out transform w-[80%] mt-4 ${show ? 'block translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-4 hidden opacity-0 pointer-events-none'}`}
    style={{ top: `${(index) * 72}px` }}
  >
    <Button
    variant="outline"
    className="w-full p-3 text-left text-[#2D2D6D] bg-white flex justify-between items-start whitespace-normal rounded-xl"
    style={{ height: 'max-content' }}
    onClick={() => onSuggestionClick && onSuggestionClick(suggestion)}
    >
      <div className="flex flex-col">
        <p className="text-[12px] uppercase pb-2 leading-none">&rarr; Prompt suggestion</p>
        <p className="mr-2 font-[400]" dangerouslySetInnerHTML={{ __html: suggestion }} />
      </div>
      <ChevronRight className="h-4 w-4 flex-shrink-0 mt-1" />
    </Button>
  </div>
);

const SupportPanel: React.FC<SupportPanelProps> = ({
  title = "MS Amlin support",
  insights,
  suggestions = [],
  onSuggestionClick,
}) => {
  const [message, setMessage] = useState('');
  const [visibleSuggestions, setVisibleSuggestions] = useState<{ text: string; type: 'preprompt' | 'action' }[]>([]);
  const [aiStatusText, setAiStatusText] = useState('AI is listening');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [aiIsActive, setAiIsActive] = useState(false);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleSuggestions]);

  useEffect(() => {
    const timeline: { time: number; text: string; type: 'preprompt' | 'action' }[] = [
      { time: 20000, text: 'Freddie: send the value of the new machine', type: 'action' },
      { time: 26500, text: 'Calculate an estimate of the new insurance premium based on the new machine of 250000 euro', type: 'preprompt' },
      { time: 53000, text: 'List the key coverage for the equipment breakdown insurance', type: 'preprompt' },
      { time: 56000, text: 'Agnes: send details of equipment breakdown insurance and business interruption insurance', type: 'action' },
      { time: 62000, text: 'Freddie: send invoice of the new machine within three days', type: 'action' },
      { time: 70000, text: 'Agnes: adjust policy fire insurance, calculate new premium', type: 'action' },
    ];
  
    setVisibleSuggestions([]); // reset
  
    timeline.forEach(({ time, text, type }) => {
      setTimeout(() => {
        setVisibleSuggestions(prev => [...prev, { text, type }]);
      }, time);
    });
  }, []);

  useEffect(() => {
    const events = [
      { time: 19500, text: 'Action point detected' },
      { time: 26000, text: 'Topic detected' },
      { time: 52500, text: 'Topic detected' },
      { time: 55500, text: 'Action point detected' },
      { time: 61500, text: 'Action point detected' },
      { time: 69500, text: 'Action point detected' },
    ];
  
    const timers: NodeJS.Timeout[] = [];
  
    events.forEach(({ time, text }) => {
      timers.push(setTimeout(() => {
        setAiStatusText(text);
        setAiIsActive(true); // trigger blue flash
      }, time));
  
      timers.push(setTimeout(() => {
        setAiIsActive(false); // remove blue
        setAiStatusText('AI is listening');
      }, time + 800));
    });
  
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mt-0 flex-1 relative flex flex-col  max-h-[calc(100vh-130px)]">
      <div ref={scrollContainerRef}
       className="p-2 flex-1 flex flex-col overflow-y-auto">
        {insights && (
          <div>
            {insights}
          </div>
        )}
        {visibleSuggestions.map((item, index) => (
          item.type === 'preprompt' ? (
            <AnimatedSuggestion
              key={index}
              suggestion={item.text}
              index={index}
              onSuggestionClick={onSuggestionClick}
              show={true}
            />
          ) : (
            <div
              key={index}
              className="mt-4 px-3 py-2 text-sm text-[#1B1464] bg-[#F3F3F3] border border-[#E0E0E0] rounded-tl-xl rounded-tr-xl rounded-br-xl w-[80%]"
            >
              <p className='text-[12px] uppercase pb-1'>○ Action point</p>
              {item.text}
            </div>
          )
        ))}

      </div>

      <div className="p-2 border-gray-200 mt-auto">
      <div className={`flex items-center flex-row mb-1 transition-all duration-500 ease-in-out
        ${aiIsActive ? 'bg-blue-100 text-blue-800 px-2 py-1 rounded-md' : 'text-gray-500 px-2 py-1'}
      `}>
        <span className="loader mr-1"></span>
        <span className={`text-xs transition-opacity duration-500 ease-in-out ${aiIsActive ? 'opacity-100' : 'opacity-70'}`}>
          {aiStatusText}
        </span>
      </div>
        <div className="t-4 bg-[#F3F3F3] p-3 rounded flex items-center gap-2 mt-auto">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message MS Amlin support"
            className="flex-1 bg-transparent border-none text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} className='text-[#1B1464] p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><mask id="a" width="25" height="24" x="0" y="0" maskUnits="userSpaceOnUse">
              <path fill="#D9D9D9" stroke="#E5E3EB" d="M.812.5h23v23h-23z"/></mask><g mask="url(#a)"><path fill="#1B1D64" stroke="#E5E3EB" strokeWidth=".025" d="M5.3 16.837v.02l.017-.008 11.85-5.196.026-.012-.026-.011-11.85-5.196-.017-.008V10.292l.01.002 5.374 1.347-5.375 1.347-.01.003V16.837Zm-1.475 2.32V4.125l17.168 7.515-17.168 7.515Z"/></g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportPanel;
