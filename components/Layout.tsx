
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  role: 'staff' | 'patient';
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange, role }) => {
  const staffTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'queue', label: 'Queue', icon: 'list_alt' },
    { id: 'patients', label: 'Patients', icon: 'people' },
    { id: 'reports', label: 'Finance', icon: 'payments' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  const patientTabs = [
    { id: 'patient-status', label: 'Live Queue', icon: 'list_alt' },
    { id: 'booking', label: 'My Booking', icon: 'calendar_today' },
    { id: 'map', label: 'Hospital Map', icon: 'map' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];

  const tabs = role === 'staff' ? staffTabs : patientTabs;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fbfc] w-full max-w-md mx-auto border-x border-gray-100 shadow-xl overflow-x-hidden">
      <main className="flex-1 pb-20">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-between items-center px-4 py-2 z-50 max-w-md mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-1 flex-col items-center gap-1 transition-colors ${
              activeTab === tab.id ? 'text-[#0d181b]' : 'text-[#4c869a]'
            }`}
          >
            <span className="material-icons">{tab.icon}</span>
            <span className="text-[10px] font-medium leading-tight">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
