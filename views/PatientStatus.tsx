
import React from 'react';
import { INITIAL_PATIENTS } from '../constants';

export const PatientStatus: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-[#f8fbfc]/80 backdrop-blur-md z-10">
        <h2 className="text-[#0d181b] text-lg font-bold leading-tight flex-1 text-center pl-10">Dr. Amelia Chen</h2>
        <div className="flex size-10 items-center justify-end">
          <span className="material-icons text-[#0d181b]">menu</span>
        </div>
      </header>

      <section className="px-4 pt-4">
        <h2 className="text-2xl font-bold mb-4">Room 203</h2>
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden mb-8">
          <div className="w-full aspect-video bg-[#fbf9f1] flex items-center justify-center p-12">
            <img 
              src="https://picsum.photos/seed/med/200/200" 
              className="w-full h-full object-contain mix-blend-multiply opacity-80" 
              alt="Medical Symbol" 
            />
          </div>
          <div className="p-6">
            <p className="text-2xl font-black text-[#0d181b]">Token #14</p>
            <p className="text-primary font-bold text-sm">Current Token</p>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl font-bold mb-4">Next Up</h2>
        <div className="space-y-1">
          {INITIAL_PATIENTS.slice(0, 3).map((p, i) => (
            <div key={p.id} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
               <p className="text-[#0d181b] font-medium">Token #{p.token}</p>
               <span className="text-[#0d181b] text-sm">{5 * (i + 1)} min</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
