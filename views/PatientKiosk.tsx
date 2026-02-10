
import React, { useState } from 'react';

export const PatientKiosk: React.FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');

  const handleKeyPress = (num: string) => {
    if (phone.length < 10) {
      setPhone(prev => prev + num);
    }
  };

  const handleBackspace = () => {
    setPhone(prev => prev.slice(0, -1));
  };

  const formatPhone = (val: string) => {
    if (!val) return 'Enter Phone';
    const match = val.match(/^(\d{0,5})(\d{0,5})$/);
    if (!match) return val;
    return match[2] ? `${match[1]} ${match[2]}` : match[1];
  };

  return (
    <div className="bg-white h-screen flex flex-col max-w-md mx-auto relative overflow-hidden">
      <header className="p-6 pt-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="material-icons text-primary">local_hospital</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#0d181b]">City General Hospital</h1>
            <p className="text-[10px] text-[#4c869a] font-bold uppercase tracking-[0.2em]">Self-Service Portal</p>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 pb-10 overflow-y-auto">
        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mb-6">
          <h2 className="text-2xl font-bold text-[#0d181b] mb-1">Welcome</h2>
          <p className="text-[#4c869a] text-sm">Please choose an option to begin your visit.</p>
        </div>

        <div className="grid gap-4 mb-8">
          <button 
            onClick={() => alert('Feature coming soon: Manual Check-in')}
            className="flex items-center p-6 bg-primary text-[#0d181b] rounded-2xl shadow-lg shadow-primary/20 text-left active:scale-[0.98] transition-all"
          >
            <div className="bg-white/30 p-4 rounded-xl mr-4">
              <span className="material-icons text-3xl">event_available</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Check-in</h3>
              <p className="text-[#0d181b]/60 text-xs">I have an appointment</p>
            </div>
            <span className="material-icons text-[#0d181b]/40">chevron_right</span>
          </button>

          <button 
            onClick={() => alert('Feature coming soon: Walk-in Registration')}
            className="flex items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-left active:scale-[0.98] transition-all"
          >
            <div className="bg-primary/10 p-4 rounded-xl mr-4">
              <span className="material-icons text-3xl text-primary">confirmation_number</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#0d181b]">Book New Token</h3>
              <p className="text-[#4c869a] text-xs">General OPD / Walk-in</p>
            </div>
            <span className="material-icons text-gray-300">chevron_right</span>
          </button>
        </div>

        <div className="mt-4">
          <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl">
            <button className="flex-1 py-2 text-xs font-bold rounded-lg bg-white shadow-sm">Phone Number</button>
            <button className="flex-1 py-2 text-xs font-bold text-[#4c869a]">Appt ID</button>
          </div>
          <div className="relative mb-6">
            <input 
              readOnly
              className={`w-full text-center text-3xl font-black py-5 bg-white border-2 rounded-2xl focus:ring-0 transition-colors ${phone ? 'border-primary text-[#0d181b]' : 'border-gray-100 text-gray-300'}`} 
              type="text" 
              value={formatPhone(phone)}
            />
            {phone && (
              <button 
                onClick={handleBackspace}
                className="absolute right-4 top-1/2 -translate-y-1/2 material-icons text-gray-400 hover:text-[#0d181b] active:scale-90 transition-all"
              >
                backspace
              </button>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
              <button 
                key={n} 
                onClick={() => handleKeyPress(n.toString())}
                className="h-14 bg-white border border-gray-100 rounded-xl text-xl font-bold shadow-sm active:bg-gray-200 active:scale-95 transition-all"
              >
                {n}
              </button>
            ))}
            <div className="h-14"></div>
            <button 
              onClick={() => handleKeyPress('0')}
              className="h-14 bg-white border border-gray-100 rounded-xl text-xl font-bold shadow-sm active:bg-gray-200 active:scale-95 transition-all"
            >
              0
            </button>
            <button 
              onClick={() => phone.length >= 10 ? setStep(2) : alert('Please enter 10 digits')}
              className={`h-14 rounded-xl flex items-center justify-center transition-all ${phone.length >= 10 ? 'bg-primary text-[#0d181b] shadow-lg shadow-primary/20 active:scale-95' : 'bg-gray-100 text-gray-300'}`}
            >
              <span className="material-icons text-3xl">check_circle</span>
            </button>
          </div>
        </div>
      </main>

      {step === 2 && (
        <div className="absolute inset-0 z-50 bg-[#0d181b]/20 backdrop-blur-sm flex items-end">
          <div className="w-full bg-white rounded-t-[2.5rem] p-8 animate-slide-up shadow-2xl">
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-8"></div>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="material-icons text-primary text-4xl">person_pin</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0d181b]">Confirm Arrival?</h2>
              <p className="text-[#4c869a] text-sm">Is this information correct?</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <span className="text-[#4c869a] font-bold text-xs uppercase tracking-wider">Patient</span>
                <span className="text-lg font-bold text-[#0d181b]">Johnathan Doe</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <span className="text-[#4c869a] font-bold text-xs uppercase tracking-wider">Doctor</span>
                <span className="text-lg font-bold text-[#0d181b]">Dr. Sarah Mitchell</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <span className="text-[#4c869a] font-bold text-xs uppercase tracking-wider">Appt. Time</span>
                <span className="text-lg font-bold text-primary">10:30 AM</span>
              </div>
            </div>

            <button 
              onClick={onConfirm}
              className="w-full bg-primary hover:bg-primary/90 text-[#0d181b] py-5 rounded-2xl text-xl font-black shadow-xl shadow-primary/30 mb-4 active:scale-95 transition-all"
            >
              Confirm Arrival
            </button>
            <button onClick={() => setStep(1)} className="w-full text-[#4c869a] hover:text-[#0d181b] font-bold py-2 text-sm transition-colors">
              Not me? Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
