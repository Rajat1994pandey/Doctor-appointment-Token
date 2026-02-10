
import React, { useState } from 'react';

export const Settings: React.FC = () => {
  const [autoApply, setAutoApply] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [refunds, setRefunds] = useState([
    { id: '#REF-9021', name: 'Sarah Jenkins', amount: '$50.00', reason: 'Missed Appt.', note: '"Patient rescheduled 24h prior but fee was triggered by system error."' }
  ]);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const handleRefund = (id: string) => {
    setRefunds(prev => prev.filter(r => r.id !== id));
    alert('Refund Approved and Processed');
  };

  return (
    <div className="animate-fade-in">
      <header className="flex items-center p-4 border-b border-primary/5 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <span className="material-icons text-gray-600 mr-4 cursor-pointer hover:bg-gray-100 p-1 rounded-full transition-colors">arrow_back</span>
        <h2 className="text-[#0d181b] text-lg font-bold flex-1 text-center">Financial Policy Admin</h2>
        <span className="material-icons text-gray-600 ml-4 cursor-pointer hover:bg-gray-100 p-1 rounded-full transition-colors">notifications</span>
      </header>

      <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[#0d181b] font-bold">Global Fee Configuration</h3>
          <button 
            onClick={handleSave}
            className="text-primary hover:text-primary/70 active:scale-95 transition-all text-sm font-bold"
          >
            {isSaving ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#4c869a] uppercase tracking-widest">Late Fee ($)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input type="number" defaultValue="50.00" className="w-full bg-white border-primary/20 rounded-xl pl-6 font-bold py-3 focus:ring-primary focus:border-primary" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#4c869a] uppercase tracking-widest">Grace Period</label>
            <div className="relative">
              <input type="number" defaultValue="15" className="w-full bg-white border-primary/20 rounded-xl pr-10 font-bold py-3 focus:ring-primary focus:border-primary" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#4c869a]">min</span>
            </div>
          </div>
        </div>

        <div 
          onClick={() => setAutoApply(!autoApply)}
          className="bg-white cursor-pointer hover:bg-gray-50 rounded-2xl border border-primary/10 p-4 flex items-center justify-between shadow-sm transition-colors"
        >
          <div className="pr-4">
            <p className="text-[#0d181b] font-bold">Auto-apply Late Fee</p>
            <p className="text-[#4c869a] text-[11px]">Charge patients for arrivals exceeding grace period</p>
          </div>
          <div className="relative inline-flex items-center">
            <div className={`w-11 h-6 rounded-full transition-colors ${autoApply ? 'bg-primary' : 'bg-gray-200'}`}></div>
            <div className={`absolute w-4 h-4 bg-white rounded-full transition-all top-1 ${autoApply ? 'left-6' : 'left-1'}`}></div>
          </div>
        </div>
      </section>

      <section className="p-4 mt-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[#0d181b] font-bold">Pending Refunds</h3>
          <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full">{refunds.length} Active</span>
        </div>
        
        <div className="space-y-3">
          {refunds.map(refund => (
            <div key={refund.id} className="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm animate-fade-in">
              <div className="flex justify-between mb-2">
                <div>
                  <p className="text-sm font-bold text-[#0d181b]">{refund.name}</p>
                  <p className="text-[10px] text-[#4c869a]">ID: {refund.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{refund.amount}</p>
                  <p className="text-[10px] text-orange-500 font-bold">{refund.reason}</p>
                </div>
              </div>
              <p className="text-[#4c869a] text-xs italic mb-4 leading-relaxed">{refund.note}</p>
              <button 
                onClick={() => handleRefund(refund.id)}
                className="w-full bg-primary hover:bg-primary/90 active:scale-95 transition-all text-[#0d181b] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
              >
                <span className="material-icons text-sm">check_circle</span> Approve Refund
              </button>
            </div>
          ))}
          {refunds.length === 0 && (
            <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <span className="material-icons text-gray-300 text-4xl mb-2">verified</span>
              <p className="text-gray-400 text-xs font-medium">No pending refunds</p>
            </div>
          )}
        </div>
      </section>

      <section className="p-4 mt-4 pb-20">
         <h3 className="text-[#0d181b] font-bold mb-4">Transaction History</h3>
         <div className="flex gap-2 mb-4">
            <div className="flex-1 relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
              <input type="text" placeholder="Search patient..." className="w-full bg-white border-primary/10 rounded-xl pl-9 text-xs py-3 focus:ring-primary focus:border-primary" />
            </div>
            <button className="bg-white p-3 border border-primary/10 rounded-xl text-primary hover:bg-gray-50 active:scale-95 transition-all">
              <span className="material-icons text-sm">filter_list</span>
            </button>
         </div>
         <div className="bg-white rounded-2xl border border-primary/10 divide-y divide-gray-50 shadow-sm overflow-hidden">
            {[
              { name: 'James Wilson', time: 'Today, 10:45 AM', amount: '$120.00', status: 'Paid', icon: 'payments', color: 'text-success' },
              { name: 'Elena Rodriguez', time: 'Today, 09:12 AM', amount: '$50.00', status: 'Refunded', icon: 'undo', color: 'text-primary' },
              { name: 'Robert Taylor', time: 'Yesterday, 4:30 PM', amount: '$50.00', status: 'Pending', icon: 'schedule', color: 'text-orange-400' },
            ].map((tx, i) => (
              <div 
                key={i} 
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => alert(`Showing receipt for ${tx.name}`)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${tx.color}`}>
                    <span className="material-icons">{tx.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0d181b]">{tx.name}</p>
                    <p className="text-[10px] text-[#4c869a]">{tx.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{tx.amount}</p>
                  <span className={`text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${tx.color.replace('text-', 'bg-').concat('/10')} ${tx.color}`}>
                    {tx.status}
                  </span>
                </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};
