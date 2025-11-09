import React, { useMemo, useState } from 'react';
import { Check, X, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';

const studentsSample = [
  { id: 'S-001', name: 'Budi Santoso' },
  { id: 'S-002', name: 'Siti Aisyah' },
  { id: 'S-003', name: 'Andi Pratama' },
  { id: 'S-004', name: 'Dewi Lestari' },
  { id: 'S-005', name: 'Rudi Hartono' },
];

export default function Attendance() {
  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState({});

  const formatted = useMemo(
    () => date.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }),
    [date]
  );

  const changeDay = (offset) => {
    const d = new Date(date);
    d.setDate(d.getDate() + offset);
    setDate(d);
    setStatus({});
  };

  const setPresence = (sid, value) => {
    setStatus((prev) => ({ ...prev, [sid]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="size-4" />
          <span>{formatted}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => changeDay(-1)} className="p-2 rounded-lg border hover:bg-gray-50"><ChevronLeft className="size-4"/></button>
          <button onClick={() => setDate(new Date())} className="px-3 py-2 rounded-lg border hover:bg-gray-50 text-sm">Hari Ini</button>
          <button onClick={() => changeDay(1)} className="p-2 rounded-lg border hover:bg-gray-50"><ChevronRight className="size-4"/></button>
        </div>
      </div>

      <div className="rounded-xl border bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Nama</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {studentsSample.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-3 font-mono text-xs">{s.id}</td>
                <td className="p-3">{s.name}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPresence(s.id, 'Hadir')}
                      className={`px-3 py-1 rounded-lg border flex items-center gap-2 ${status[s.id] === 'Hadir' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'hover:bg-gray-50'}`}
                    >
                      <Check className="size-4"/> Hadir
                    </button>
                    <button
                      onClick={() => setPresence(s.id, 'Alpha')}
                      className={`px-3 py-1 rounded-lg border flex items-center gap-2 ${status[s.id] === 'Alpha' ? 'bg-red-50 border-red-200 text-red-700' : 'hover:bg-gray-50'}`}
                    >
                      <X className="size-4"/> Alpha
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Simpan Absensi</button>
      </div>
    </div>
  );
}
