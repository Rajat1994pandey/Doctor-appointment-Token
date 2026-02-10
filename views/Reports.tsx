
import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const HOURLY_DATA = [
  { time: '09AM', tokens: 16, rate: 12 },
  { time: '10AM', tokens: 28, rate: 20 },
  { time: '11AM', tokens: 36, rate: 32 },
  { time: '12PM', tokens: 24, rate: 18 },
  { time: '01PM', tokens: 32, rate: 24 },
  { time: '02PM', tokens: 30, rate: 28 },
  { time: '03PM', tokens: 16, rate: 10 },
];

export const Reports: React.FC = () => {
  return (
    <div className="animate-fade-in pb-10">
      <header className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Revenue & Tokens</h1>
            <p className="text-sm text-[#4c869a]">Hospital Administration Overview</p>
          </div>
          <button className="bg-primary text-white p-2 rounded-lg">
            <span className="material-icons">ios_share</span>
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex-1 flex items-center bg-white p-3 rounded-xl border border-primary/10 shadow-sm">
            <span className="material-icons text-primary mr-2 text-xl">calendar_today</span>
            <span className="text-sm font-medium">October 24, 2023</span>
            <span className="material-icons text-gray-400 ml-auto">expand_more</span>
          </div>
          <button className="bg-white p-3 rounded-xl border border-primary/10 shadow-sm text-primary">
            <span className="material-icons">file_download</span>
          </button>
        </div>
      </header>

      <section className="flex overflow-x-auto gap-4 px-5 pb-4 hide-scrollbar">
        <div className="flex-none w-64 bg-white p-4 rounded-2xl shadow-sm border border-primary/5">
          <div className="flex justify-between mb-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Total Revenue</span>
            <span className="material-icons text-primary text-sm bg-primary/10 p-1 rounded">payments</span>
          </div>
          <p className="text-2xl font-black mb-2">$14,250.00</p>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">Consultations</span>
              <span className="font-bold text-success">$12,800.00</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '90%' }}></div>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">Late Fees</span>
              <span className="font-bold text-orange-400">$1,450.00</span>
            </div>
          </div>
        </div>
        
        <div className="flex-none w-44 bg-white p-4 rounded-2xl shadow-sm border border-primary/5">
           <div className="flex justify-between mb-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Tokens</span>
            <span className="material-icons text-sky-500 text-sm bg-sky-50 p-1 rounded">confirmation_number</span>
          </div>
          <p className="text-2xl font-black mb-1">342</p>
          <span className="text-[10px] text-success font-bold flex items-center gap-1">
            <span className="material-icons text-[12px]">trending_up</span> 12% vs yesterday
          </span>
        </div>
      </section>

      <section className="px-5 mt-6">
        <div className="bg-white p-5 rounded-2xl border border-primary/5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold">Hourly Token Volume</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-[8px] font-bold text-gray-400">Tokens</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span className="text-[8px] font-bold text-gray-400">Rate %</span>
              </div>
            </div>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={HOURLY_DATA}>
                <Tooltip cursor={{fill: '#f8fbfc'}} />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 8, fill: '#4c869a'}} dy={10} />
                <Bar dataKey="tokens" radius={[2, 2, 0, 0]} barSize={30}>
                  {HOURLY_DATA.map((entry, index) => (
                    <Cell key={`cell-tokens-${index}`} fill="#2bbdee" fillOpacity={0.2} />
                  ))}
                </Bar>
                <Bar dataKey="rate" radius={[2, 2, 0, 0]} barSize={30}>
                   {HOURLY_DATA.map((entry, index) => (
                    <Cell key={`cell-rate-${index}`} fill="#2dd4bf" fillOpacity={0.6} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="px-5 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold">Doctor Performance</h3>
          <button className="text-primary text-xs font-bold">View All</button>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden border border-primary/5 shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-[9px] uppercase font-bold text-gray-400">
              <tr>
                <th className="p-3">Doctor</th>
                <th className="p-3 text-center">Tokens</th>
                <th className="p-3 text-right">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { name: 'Dr. S. James', dept: 'Cardiology', tokens: 42, rev: '$2,450', img: 'https://picsum.photos/seed/d1/60/60' },
                { name: 'Dr. M. Chen', dept: 'Pediatrics', tokens: 38, rev: '$1,900', img: 'https://picsum.photos/seed/d2/60/60' },
                { name: 'Dr. L. Smith', dept: 'Orthopedics', tokens: 31, rev: '$3,120', img: 'https://picsum.photos/seed/d3/60/60' },
              ].map((doc) => (
                <tr key={doc.name}>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <img src={doc.img} className="w-8 h-8 rounded-full" alt="" />
                      <div>
                        <p className="text-[10px] font-bold">{doc.name}</p>
                        <p className="text-[8px] text-gray-400">{doc.dept}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-center text-[10px] font-bold">{doc.tokens}</td>
                  <td className="p-3 text-right text-[10px] font-black text-primary">{doc.rev}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
