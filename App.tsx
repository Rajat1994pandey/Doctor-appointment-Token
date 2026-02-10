
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './views/Dashboard';
import { QueueManager } from './views/QueueManager';
import { Reports } from './views/Reports';
import { Settings } from './views/Settings';
import { PatientStatus } from './views/PatientStatus';
import { PatientKiosk } from './views/PatientKiosk';
import { TurnAlert } from './views/TurnAlert';
import { PatientList } from './views/PatientList';
import { HospitalMap } from './views/HospitalMap';
import { MyBooking } from './views/MyBooking';

type AppMode = 'STAFF' | 'PATIENT' | 'KIOSK' | 'ALERT';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('STAFF');
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    if (mode === 'KIOSK') {
      return <PatientKiosk onConfirm={() => setMode('ALERT')} />;
    }
    
    if (mode === 'ALERT') {
      return <TurnAlert onDismiss={() => setMode('PATIENT')} />;
    }

    if (mode === 'PATIENT') {
      return (
        <Layout 
          role="patient" 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
        >
          {activeTab === 'patient-status' && <PatientStatus />}
          {activeTab === 'booking' && <MyBooking />}
          {activeTab === 'map' && <HospitalMap />}
          {activeTab === 'profile' && <div className="p-20 text-center text-gray-400">User Profile placeholder</div>}
        </Layout>
      );
    }

    // STAFF MODE
    return (
      <Layout 
        role="staff" 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      >
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'queue' && <QueueManager />}
        {activeTab === 'reports' && <Reports />}
        {activeTab === 'settings' && <Settings />}
        {activeTab === 'patients' && <PatientList />}
      </Layout>
    );
  };

  return (
    <div className="relative">
      {/* Role Switcher (Demo Only) */}
      <div className="fixed top-4 left-4 z-[100] flex gap-2">
        <button 
          onClick={() => { setMode('STAFF'); setActiveTab('dashboard'); }}
          className={`px-3 py-1 rounded-full text-[10px] font-bold shadow-lg transition-all ${mode === 'STAFF' ? 'bg-[#0d181b] text-white' : 'bg-white text-[#0d181b]'}`}
        >
          Staff
        </button>
        <button 
          onClick={() => { setMode('KIOSK'); }}
          className={`px-3 py-1 rounded-full text-[10px] font-bold shadow-lg transition-all ${mode === 'KIOSK' ? 'bg-[#0d181b] text-white' : 'bg-white text-[#0d181b]'}`}
        >
          Kiosk
        </button>
        <button 
          onClick={() => { setMode('PATIENT'); setActiveTab('patient-status'); }}
          className={`px-3 py-1 rounded-full text-[10px] font-bold shadow-lg transition-all ${mode === 'PATIENT' ? 'bg-[#0d181b] text-white' : 'bg-white text-[#0d181b]'}`}
        >
          Patient
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default App;
