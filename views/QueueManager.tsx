
import React, { useState, useEffect } from 'react';
import { DOCTOR_SARAH, INITIAL_PATIENTS } from '../constants';

export const QueueManager: React.FC = () => {
  const [status, setStatus] = useState(DOCTOR_SARAH.status);
  const [timer, setTimer] = useState(862); // 14:22 in seconds

  useEffect(() => {
    let interval: any;
    if (status === 'On Break') {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="animate-fade-in p-4">
      <header className="flex items-center justify-between mb-6">
         <img src={DOCTOR_SARAH.image} className="rounded-full size-10 object-cover" alt="" />
         <h2 className="text-[#0d181b] text-xl font-bold">Queue Manager</h2>
         <div className="w-10"></div>
      </header>

      <section className="flex gap-4 items-center mb-6">
        <img src={DOCTOR_SARAH.image} alt="Doctor" className="w-20 h-20 rounded-full object-cover border-2 border-primary/20" />
        <div>
          <h3 className="text-[#0d181b] text-xl font-bold">{DOCTOR_SARAH.name}</h3>
          <p className="text-[#4c869a] text-sm">{DOCTOR_SARAH.specialty} • {DOCTOR_SARAH.room}</p>
        </div>
      </section>

      <section className="bg-gray-100 rounded-2xl p-4 flex justify-between mb-6">
        {[
          { label: 'Available', color: 'bg-success' },
          { label: 'On Break', color: 'bg-orange-400' },
          { label: 'Emergency', color: 'bg-red-500' }
        ].map(s => (
          <button 
            key={s.label}
            onClick={() => setStatus(s.label as any)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${status === s.label ? 'bg-white shadow-sm' : ''}`}
          >
            <span className={`w-2 h-2 rounded-full ${s.color}`}></span>
            <span className="text-xs font-bold">{s.label}</span>
          </button>
        ))}
      </section>

      {status === 'On Break' ? (
        <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6 animate-slide-up">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="material-icons text-orange-400">coffee</span>
                <span className="text-[#0d181b] font-bold">Break in progress</span>
              </div>
              <span className="text-[#0d181b] font-black text-xl">{formatTime(timer)}</span>
           </div>
           <button 
            onClick={() => setStatus('Available')}
            className="w-full bg-primary py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20"
           >
             Return to Queue
           </button>
        </section>
      ) : (
        <div className="relative mb-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 opacity-40 blur-[2px]">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Now Serving</p>
            <h4 className="text-[#0d181b] text-2xl font-black">Token #14</h4>
            <p className="text-gray-500">Ethan Carter</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#0d181b] text-white px-6 py-2 rounded-full flex items-center gap-3 shadow-2xl">
              <span className="material-icons text-sm">pause_circle</span>
              <span className="text-xs font-bold uppercase tracking-wider">Queue Paused</span>
            </div>
          </div>
        </div>
      )}

      <section className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#0d181b] text-lg font-bold">Upcoming Queue</h3>
          <span className="text-[#4c869a] text-xs bg-gray-100 px-3 py-1 rounded-full">5 Patients Waiting</span>
        </div>
        <div className="space-y-4">
          {INITIAL_PATIENTS.slice(0, 3).map(p => (
            <div key={p.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={p.image} className="w-14 h-14 rounded-full" alt="" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white"></span>
                </div>
                <div>
                  <p className="text-[#0d181b] font-bold">{p.name}</p>
                  <p className="text-[#4c869a] text-xs">Token #{p.token} • {p.type}</p>
                </div>
              </div>
              <span className="text-primary text-[10px] font-black tracking-widest bg-primary/10 px-2 py-1 rounded">WAITING</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
