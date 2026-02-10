
import React from 'react';

export const HospitalMap: React.FC = () => {
  return (
    <div className="animate-fade-in p-6 pb-20">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#0d181b]">Hospital Map</h1>
        <p className="text-sm text-[#4c869a]">Find your way around the facility</p>
      </header>

      <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm mb-8 relative overflow-hidden">
        <div className="grid grid-cols-2 gap-4 h-64">
          <div className="bg-primary/5 rounded-2xl border-2 border-primary/20 flex items-center justify-center flex-col p-4">
            <span className="material-icons text-primary mb-2">emergency</span>
            <span className="text-[10px] font-bold text-[#0d181b] uppercase">ER Dept</span>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-success/5 rounded-2xl border-2 border-success/20 flex items-center justify-center flex-col">
              <span className="text-[10px] font-bold text-[#0d181b] uppercase">Pharmacy</span>
            </div>
            <div className="bg-orange-50 rounded-2xl border-2 border-orange-200 flex items-center justify-center flex-col">
              <span className="text-[10px] font-bold text-[#0d181b] uppercase">Labs</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
            <span className="material-icons">my_location</span>
          </div>
          <div>
            <p className="text-xs font-bold text-[#0d181b]">You are here</p>
            <p className="text-[10px] text-[#4c869a]">Main Lobby, Floor 1</p>
          </div>
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-2">
           <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center"><span className="material-icons text-sm">add</span></button>
           <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center"><span className="material-icons text-sm">remove</span></button>
        </div>
      </div>

      <section>
        <h2 className="text-lg font-bold mb-4">Quick Shortcuts</h2>
        <div className="space-y-3">
          {[
            { name: 'Cardiology (Room 402)', dist: '200m', icon: 'favorite' },
            { name: 'Pediatrics (Room 105)', dist: '50m', icon: 'child_care' },
            { name: 'Cafeteria', dist: '120m', icon: 'restaurant' },
          ].map(place => (
            <div key={place.name} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-50 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="material-icons text-primary text-xl">{place.icon}</span>
                <span className="text-sm font-bold text-[#0d181b]">{place.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#4c869a]">{place.dist}</span>
                <span className="material-icons text-gray-300 text-sm">navigation</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
