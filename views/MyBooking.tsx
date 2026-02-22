
import React from 'react';
import { DOCTOR_SARAH } from '../constants';

export const MyBooking: React.FC = () => {
  return (
    <div className="animate-fade-in p-6 pb-20">
      <header className="mb-8 flex justify-between items-center">
        <div>
          
          <h1 className="text-2xl font-bold text-[#0d181b]">My Booking</h1>
          <p className="text-sm text-[#4c869a]">Token #14 • Confirmed</p>
        </div>
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="material-icons text-primary">qr_code_2</span>
        </div>
      </header>

      <div className="bg-primary p-6 rounded-[2.5rem] text-[#0d181b] shadow-xl shadow-primary/20 mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Estimated Time</p>
            <p className="text-4xl font-black">10:45 AM</p>
          </div>
          <span className="bg-white/30 px-3 py-1 rounded-full text-[10px] font-bold">LIVE</span>
        </div>
        <div className="flex items-center gap-4 pt-6 border-t border-[#0d181b]/10">
          <img src={DOCTOR_SARAH.image} className="w-12 h-12 rounded-full border-2 border-white/20" alt="" />
          <div>
            <p className="font-bold text-sm leading-tight">{DOCTOR_SARAH.name}</p>
            <p className="text-[10px] opacity-70 font-medium">Cardiology • Floor 4</p>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Preparation Checklist</h2>
        <div className="space-y-3">
          {[
            { task: 'Bring previous test results', done: true },
            { task: 'Fasting (optional for today)', done: false },
            { task: 'Check-in at kiosk upon arrival', done: true },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-50">
              <span className={`material-icons ${item.done ? 'text-success' : 'text-gray-200'}`}>
                {item.done ? 'check_circle' : 'radio_button_unchecked'}
              </span>
              <span className={`text-sm font-medium ${item.done ? 'text-gray-400 line-through' : 'text-[#0d181b]'}`}>
                {item.task}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Medical History</h2>
          <button className="text-primary text-xs font-bold">View More</button>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                <span className="material-icons text-gray-400">description</span>
             </div>
             <div>
               <p className="text-sm font-bold text-[#0d181b]">Annual Checkup</p>
               <p className="text-[10px] text-gray-400">Sept 12, 2023 • Dr. Robert S.</p>
             </div>
          </div>
          <button className="w-full bg-gray-50 text-[#4c869a] py-3 rounded-xl font-bold text-xs">
            Download Report (PDF)
          </button>
        </div>
      </section>
    </div>
  );
};
