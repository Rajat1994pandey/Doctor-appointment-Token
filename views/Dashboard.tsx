
import React, { useState } from 'react';
import { DOCTOR_SARAH, INITIAL_PATIENTS } from '../constants';

export const Dashboard: React.FC = () => {
  const [servingToken, setServingToken] = useState('14');
  const [servingName, setServingName] = useState('Ethan Carter');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    setTimeout(() => {
      // Move to next patient in demo
      setServingToken('15');
      setServingName('Olivia Bennett');
      setIsCompleted(false);
    }, 800);
  };

  return (
    <div className="animate-fade-in">
      <header className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-[#f8fbfc]/80 backdrop-blur-md z-10">
        <div className="flex size-10 shrink-0 items-center">
          <img src={DOCTOR_SARAH.image} className="rounded-full size-8 object-cover" alt="Profile" />
        </div>
        <h2 className="text-[#0d181b] text-lg font-bold leading-tight flex-1 text-center pr-10">Dashboard</h2>
      </header>

      <section className="p-4 flex gap-4 items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
          <img src={DOCTOR_SARAH.image} alt="Doctor" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-[#0d181b] text-xl font-bold leading-tight">{DOCTOR_SARAH.name}</p>
          <p className="text-[#4c869a] text-sm">{DOCTOR_SARAH.specialty}</p>
          <span className="text-success text-sm font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-success"></span>
            {DOCTOR_SARAH.status}
          </span>
        </div>
      </section>

      <section className="px-4 mt-6">
        <h3 className="text-[#0d181b] text-lg font-bold mb-3">Today's Schedule</h3>
        <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 ${isCompleted ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600&h=300" 
            alt="Current Patient" 
            className="w-full aspect-video object-cover" 
          />
          <div className="p-4">
            <p className="text-[#0d181b] text-lg font-bold">Now Serving</p>
            <div className="flex items-center justify-between mt-1">
              <div>
                <p className="text-[#4c869a] text-sm">Token #{servingToken}</p>
                <p className="text-[#4c869a] font-medium">{servingName}</p>
              </div>
              <button 
                onClick={handleComplete}
                className="bg-primary hover:bg-primary/90 active:scale-95 transition-all text-[#0d181b] px-6 py-2 rounded-lg font-bold text-sm"
              >
                {isCompleted ? 'Saving...' : 'Complete'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 mt-8 pb-4">
        <h3 className="text-[#0d181b] text-lg font-bold mb-3">Queue</h3>
        <div className="space-y-1">
          {INITIAL_PATIENTS.map((patient) => (
            <div 
              key={patient.id} 
              className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 px-2 rounded-lg transition-colors cursor-pointer"
              onClick={() => alert(`Opening details for ${patient.name}`)}
            >
              <div className="flex items-center gap-3">
                <img src={patient.image} className="w-12 h-12 rounded-full object-cover" alt="" />
                <div>
                  <p className="text-[#0d181b] font-bold text-sm leading-tight">{patient.name}</p>
                  <p className="text-[#4c869a] text-xs">Token #{patient.token}</p>
                </div>
              </div>
              <span className={`text-xs font-medium ${patient.status === 'Missed' ? 'text-red-500' : 'text-[#0d181b]'}`}>
                {patient.status}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all text-[#0d181b] py-3 rounded-xl font-bold text-sm">Reschedule</button>
          <button className="flex-1 bg-primary hover:bg-primary/90 active:scale-95 transition-all text-[#0d181b] py-3 rounded-xl font-bold text-sm">Apply Late Fee</button>
        </div>
      </section>
    </div>
  );
};
