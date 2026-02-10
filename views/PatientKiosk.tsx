
import React, { useState } from 'react';
import { DOCTOR_SARAH } from '../constants';

type KioskStep = 'welcome' | 'phone' | 'register' | 'doctor_select' | 'time_select' | 'confirm';

const DOCTORS = [
  { id: '1', name: 'Dr. Sarah Mitchell', specialty: 'Cardiology', image: 'https://picsum.photos/seed/dr1/100/100', room: 'Room 402' },
  { id: '2', name: 'Dr. Michael Chen', specialty: 'Pediatrics', image: 'https://picsum.photos/seed/dr2/100/100', room: 'Room 105' },
  { id: '3', name: 'Dr. Elena Rodriguez', specialty: 'Orthopedics', image: 'https://picsum.photos/seed/dr3/100/100', room: 'Room 301' },
  { id: '4', name: 'Dr. James Wilson', specialty: 'Dermatology', image: 'https://picsum.photos/seed/dr4/100/100', room: 'Room 212' },
];

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

export const PatientKiosk: React.FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
  const [step, setStep] = useState<KioskStep>('welcome');
  const [phone, setPhone] = useState('');
  const [registrationData, setRegistrationData] = useState({
    name: '',
    age: '',
    gender: 'Other'
  });
  const [selectedDoctor, setSelectedDoctor] = useState<typeof DOCTORS[0] | null>(null);
  const [selectedTime, setSelectedTime] = useState('');

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

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registrationData.name && registrationData.age) {
      setStep('confirm');
    } else {
      alert('Please fill in all details');
    }
  };

  const handleDoctorSelect = (doctor: typeof DOCTORS[0]) => {
    setSelectedDoctor(doctor);
    setStep('time_select');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('confirm');
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
        {step === 'welcome' && (
          <div className="animate-fade-in">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mb-6">
              <h2 className="text-2xl font-bold text-[#0d181b] mb-1">Welcome</h2>
              <p className="text-[#4c869a] text-sm">Please choose an option to begin your visit.</p>
            </div>

            <div className="grid gap-4">
              <button 
                onClick={() => setStep('phone')}
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
                onClick={() => setStep('doctor_select')}
                className="flex items-center p-6 bg-white border-2 border-primary/20 rounded-2xl shadow-sm text-left active:scale-[0.98] transition-all"
              >
                <div className="bg-primary/10 p-4 rounded-xl mr-4">
                  <span className="material-icons text-3xl text-primary">calendar_month</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0d181b]">Book Appointment</h3>
                  <p className="text-[#4c869a] text-xs">Schedule with a specialist</p>
                </div>
                <span className="material-icons text-gray-300">chevron_right</span>
              </button>

              <button 
                onClick={() => setStep('register')}
                className="flex items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-left active:scale-[0.98] transition-all"
              >
                <div className="bg-success/10 p-4 rounded-xl mr-4">
                  <span className="material-icons text-3xl text-success">person_add</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0d181b]">New Patient</h3>
                  <p className="text-[#4c869a] text-xs">Register and get a token</p>
                </div>
                <span className="material-icons text-gray-300">chevron_right</span>
              </button>
            </div>
          </div>
        )}

        {step === 'doctor_select' && (
          <div className="animate-fade-in">
             <button onClick={() => setStep('welcome')} className="flex items-center gap-2 text-[#4c869a] font-bold text-sm mb-6">
              <span className="material-icons text-sm">arrow_back</span> Back
            </button>
            <h2 className="text-2xl font-bold text-[#0d181b] mb-1">Select Specialist</h2>
            <p className="text-[#4c869a] text-sm mb-6">Choose a doctor for your consultation.</p>
            <div className="space-y-3">
              {DOCTORS.map((doc) => (
                <button 
                  key={doc.id}
                  onClick={() => handleDoctorSelect(doc)}
                  className="w-full flex items-center p-4 bg-white border border-gray-100 rounded-2xl hover:border-primary/50 active:scale-[0.98] transition-all text-left shadow-sm"
                >
                  <img src={doc.image} className="w-14 h-14 rounded-full object-cover mr-4" alt={doc.name} />
                  <div className="flex-1">
                    <p className="text-[#0d181b] font-bold text-lg">{doc.name}</p>
                    <p className="text-[#4c869a] text-xs">{doc.specialty} • {doc.room}</p>
                  </div>
                  <span className="material-icons text-gray-300">chevron_right</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'time_select' && (
          <div className="animate-fade-in">
             <button onClick={() => setStep('doctor_select')} className="flex items-center gap-2 text-[#4c869a] font-bold text-sm mb-6">
              <span className="material-icons text-sm">arrow_back</span> Back
            </button>
            <h2 className="text-2xl font-bold text-[#0d181b] mb-1">Select Time</h2>
            <p className="text-[#4c869a] text-sm mb-6">Available slots for {selectedDoctor?.name}</p>
            <div className="grid grid-cols-2 gap-3">
              {TIME_SLOTS.map((time) => (
                <button 
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className="py-4 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-[#0d181b] hover:bg-primary/10 hover:border-primary transition-all active:scale-95"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'phone' && (
          <div className="animate-fade-in mt-4">
            <button onClick={() => setStep('welcome')} className="flex items-center gap-2 text-[#4c869a] font-bold text-sm mb-6">
              <span className="material-icons text-sm">arrow_back</span> Back
            </button>
            <h2 className="text-2xl font-bold text-[#0d181b] mb-1">Enter Phone</h2>
            <p className="text-[#4c869a] text-sm mb-6">Identify yourself using your registered number.</p>

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
                onClick={() => phone.length >= 10 ? setStep('confirm') : alert('Please enter 10 digits')}
                className={`h-14 rounded-xl flex items-center justify-center transition-all ${phone.length >= 10 ? 'bg-primary text-[#0d181b] shadow-lg shadow-primary/20 active:scale-95' : 'bg-gray-100 text-gray-300'}`}
              >
                <span className="material-icons text-3xl">check_circle</span>
              </button>
            </div>
          </div>
        )}

        {step === 'register' && (
          <div className="animate-fade-in mt-4">
             <button onClick={() => setStep('welcome')} className="flex items-center gap-2 text-[#4c869a] font-bold text-sm mb-6">
              <span className="material-icons text-sm">arrow_back</span> Back
            </button>
            <h2 className="text-2xl font-bold text-[#0d181b] mb-1">Self Registration</h2>
            <p className="text-[#4c869a] text-sm mb-6">Welcome! Please provide your basic details.</p>

            <form onSubmit={handleRegisterSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#4c869a]">Full Name</label>
                <input 
                  type="text"
                  placeholder="e.g. Johnathan Doe"
                  className="w-full bg-gray-50 border-gray-100 rounded-2xl py-4 px-6 font-bold text-[#0d181b] focus:ring-primary focus:border-primary"
                  value={registrationData.name}
                  onChange={(e) => setRegistrationData({...registrationData, name: e.target.value})}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#4c869a]">Age</label>
                  <input 
                    type="number"
                    placeholder="Years"
                    className="w-full bg-gray-50 border-gray-100 rounded-2xl py-4 px-6 font-bold text-[#0d181b] focus:ring-primary focus:border-primary"
                    value={registrationData.age}
                    onChange={(e) => setRegistrationData({...registrationData, age: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#4c869a]">Gender</label>
                  <select 
                    className="w-full bg-gray-50 border-gray-100 rounded-2xl py-4 px-6 font-bold text-[#0d181b] focus:ring-primary focus:border-primary appearance-none"
                    value={registrationData.gender}
                    onChange={(e) => setRegistrationData({...registrationData, gender: e.target.value})}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#4c869a]">Mobile Number</label>
                <input 
                  type="tel"
                  placeholder="98765 43210"
                  className="w-full bg-gray-50 border-gray-100 rounded-2xl py-4 px-6 font-bold text-[#0d181b] focus:ring-primary focus:border-primary"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-[#0d181b] py-5 rounded-2xl text-xl font-black shadow-xl shadow-primary/30 active:scale-95 transition-all"
              >
                Register & Continue
              </button>
            </form>
          </div>
        )}
      </main>

      {step === 'confirm' && (
        <div className="absolute inset-0 z-50 bg-[#0d181b]/20 backdrop-blur-sm flex items-end">
          <div className="w-full bg-white rounded-t-[2.5rem] p-8 animate-slide-up shadow-2xl">
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-8"></div>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="material-icons text-primary text-4xl">person_pin</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0d181b]">Confirm Details</h2>
              <p className="text-[#4c869a] text-sm">Please verify the information below.</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <span className="text-[#4c869a] font-bold text-xs uppercase tracking-wider">Patient</span>
                <span className="text-lg font-bold text-[#0d181b]">{registrationData.name || 'Johnathan Doe'}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <span className="text-[#4c869a] font-bold text-xs uppercase tracking-wider">{selectedDoctor ? 'Doctor' : 'Phone'}</span>
                <span className="text-lg font-bold text-[#0d181b]">{selectedDoctor?.name || phone || '98765 43210'}</span>
              </div>
              {selectedTime && (
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <span className="text-[#4c869a] font-bold text-xs uppercase tracking-wider">Time Slot</span>
                  <span className="text-lg font-bold text-primary">{selectedTime}</span>
                </div>
              )}
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <span className="text-[#4c869a] font-bold text-xs uppercase tracking-wider">Action</span>
                <span className="text-lg font-bold text-primary">{selectedDoctor ? 'Appointment' : 'Check-in'}</span>
              </div>
            </div>

            <button 
              onClick={onConfirm}
              className="w-full bg-primary hover:bg-primary/90 text-[#0d181b] py-5 rounded-2xl text-xl font-black shadow-xl shadow-primary/30 mb-4 active:scale-95 transition-all"
            >
              Confirm & Continue
            </button>
            <button onClick={() => setStep('welcome')} className="w-full text-[#4c869a] hover:text-[#0d181b] font-bold py-2 text-sm transition-colors">
              Cancel & Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
