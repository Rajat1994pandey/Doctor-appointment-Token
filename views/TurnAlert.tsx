
import React from 'react';
import { DOCTOR_SARAH } from '../constants';

export const TurnAlert: React.FC<{ onDismiss: () => void }> = ({ onDismiss }) => {
  return (
    <div className="bg-[#f8fbfc] h-screen flex flex-col max-w-md mx-auto relative overflow-hidden p-6 animate-fade-in">
      <header className="flex justify-between items-center py-4 px-2">
        <span className="font-black text-sm">9:41</span>
        <div className="flex gap-1.5 items-center">
          <span className="material-icons text-sm">signal_cellular_alt</span>
          <span className="material-icons text-sm text-success">circle</span>
          <span className="material-icons text-sm">battery_full</span>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center pt-10 text-center">
        <div className="inline-flex items-center px-4 py-1.5 bg-success/10 text-success rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          <span className="material-icons text-sm mr-2">campaign</span>
          Active Call
        </div>
        
        <h1 className="text-3xl font-black text-[#0d181b] mb-12">It's Your Turn!</h1>

        <div className="relative mb-12">
          <div className="w-56 h-56 bg-success rounded-full flex flex-col items-center justify-center shadow-2xl shadow-success/40 border-8 border-white pulse-effect relative">
             <span className="text-[#0d181b]/50 text-xs font-bold uppercase tracking-widest">Token</span>
             <span className="text-[#0d181b] text-[80px] font-black leading-none">#14</span>
          </div>
        </div>

        <div className="w-full bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-50 mb-8 text-left">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center">
              <span className="material-icons text-success text-3xl">door_front</span>
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest">Location</p>
              <h2 className="text-xl font-black text-[#0d181b]">Proceed to Room 204</h2>
            </div>
          </div>
          
          <div className="h-px bg-gray-50 w-full mb-6"></div>

          <div className="flex items-center gap-4">
            <img 
              src={DOCTOR_SARAH.image} 
              className="w-14 h-14 rounded-full object-cover ring-4 ring-success/10" 
              alt="" 
            />
            <div>
              <p className="text-[#0d181b] font-bold text-lg leading-tight">{DOCTOR_SARAH.name}</p>
              <p className="text-[#4c869a] text-sm">General Physician • 2nd Floor</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-auto space-y-4 pb-8">
           <button 
            onClick={onDismiss}
            className="w-full bg-success text-[#0d181b] py-5 rounded-[1.5rem] font-black text-lg shadow-xl shadow-success/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
           >
             <span className="material-icons">check_circle</span>
             I AM COMING
           </button>
           <button onClick={onDismiss} className="w-full bg-gray-100 text-gray-500 font-bold py-4 rounded-2xl text-sm">
             Delay by 5 mins
           </button>
        </div>
      </div>
    </div>
  );
};
