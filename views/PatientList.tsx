
import React, { useState } from 'react';
import { INITIAL_PATIENTS } from '../constants';

export const PatientList: React.FC = () => {
  const [search, setSearch] = useState('');
  
  const filteredPatients = INITIAL_PATIENTS.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.token.includes(search)
  );

  return (
    <div className="animate-fade-in p-4 pb-20">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#0d181b]">Patient Directory</h1>
        <button className="bg-primary/10 text-primary p-2 rounded-xl">
          <span className="material-icons">person_add</span>
        </button>
      </header>

      <div className="relative mb-6">
        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
        <input 
          type="text" 
          placeholder="Search by name or token..." 
          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar">
        {['All', 'Waiting', 'Completed', 'Missed', 'Follow-up'].map((tag) => (
          <button key={tag} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${tag === 'All' ? 'bg-[#0d181b] text-white' : 'bg-gray-100 text-[#4c869a]'}`}>
            {tag}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="bg-white p-4 rounded-2xl border border-gray-50 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all">
            <div className="flex items-center gap-4">
              <img src={patient.image} className="w-12 h-12 rounded-full object-cover" alt="" />
              <div>
                <h3 className="text-[#0d181b] font-bold">{patient.name}</h3>
                <p className="text-[#4c869a] text-xs">Token #{patient.token} • {patient.type}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full mb-1 ${
                patient.status === 'Missed' ? 'bg-red-50 text-red-500' : 
                patient.status === 'Completed' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
              }`}>
                {patient.status}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">Last visit: {patient.time} ago</span>
            </div>
          </div>
        ))}
        {filteredPatients.length === 0 && (
          <div className="py-20 text-center">
            <span className="material-icons text-gray-200 text-6xl mb-4">person_search</span>
            <p className="text-gray-400 font-medium">No patients found</p>
          </div>
        )}
      </div>
    </div>
  );
};
