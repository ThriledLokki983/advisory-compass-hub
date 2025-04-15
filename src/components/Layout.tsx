
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MSAmlinLogo from './MSAmlinLogo';
import ConversationAudio from "../audio/insurance_converdation.mp3"


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  React.useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);
  
  React.useEffect(() => {
    if (!audioRef.current) return;
  
    if (location.pathname === '/conversation') {
      const playTimeout = setTimeout(() => {
        audioRef.current!.currentTime = 0;
        audioRef.current!.play().catch((err) => {
          console.warn("Autoplay failed:", err);
        });
      }, 500);
  
      return () => clearTimeout(playTimeout);
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [location.pathname]);

  const tabs = [
    { name: 'PREPARATION', path: '/' },
    { name: 'CONVERSATION SUPPORT', path: '/conversation' },
    { name: 'WRAP-UP', path: '/wrapup' },
  ];

  const handleTabChange = (path: string) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <div className="app-container">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <MSAmlinLogo />
            <nav className="hidden md:flex">
              {tabs.map((tab) => (
                <button
                  key={tab.path}
                  className={`px-4 py-4 text-sm font-medium ${
                    activeTab === tab.path ? 'tab-active' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => handleTabChange(tab.path)}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-gray-800">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-800 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="md:hidden container mx-auto px-4 pb-2">
          <div className="flex space-x-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.path}
                className={`px-3 py-1 text-xs whitespace-nowrap ${
                  activeTab === tab.path ? 'tab-active' : 'text-gray-600'
                }`}
                onClick={() => handleTabChange(tab.path)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </header>
      {/* only show this at the preparation page */}
      <audio ref={audioRef} preload="auto" style={{ display: 'none' }}>
        <source src={ConversationAudio} type="audio/mp3"/>
      </audio>

      {activeTab === '/' && (
        <div className="py-3 shadow-sm bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 flex justify-end">
            <Button
              onClick={async () => {
                
                  navigate('/conversation');
                }
              }
              className="bg-[#E11F27] text-white px-8 py-2 rounded-full">
              Start Conversation
            </Button>
          </div>
        </div>
      )}
      <main className="container mx-auto px-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
