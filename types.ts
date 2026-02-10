
export type AppRole = 'staff' | 'patient' | 'kiosk';

export interface Patient {
  id: string;
  name: string;
  token: string;
  status: 'Waiting' | 'Missed' | 'Serving' | 'Completed';
  time?: string;
  type?: 'Regular' | 'Follow-up';
}

export interface Doctor {
  name: string;
  specialty: string;
  room: string;
  status: 'Available' | 'On Break' | 'Emergency';
  image: string;
}

export interface Transaction {
  id: string;
  patientName: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Refunded' | 'Pending';
  type: 'Consultation' | 'Late Fee';
}

export interface MetricData {
  label: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
}
