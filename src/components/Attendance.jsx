import React, { useMemo, useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';

const studentsSample = [
  { id: 'S-001', name: 'Budi Santoso' },
  { id: 'S-002', name: 'Siti Aisyah' },
  { id: 'S-003', name: 'Andi Pratama' },
  { id: 'S-004', name: 'Dewi Lestari' },
  { id: 'S-005', name: 'Rudi Hartono' },
];

export default function Attendance() {
  const [date, setDate] = useState(new Date());
  // state: { [studentId]: { status: 'Hadir' | 'Izin' | 'Alpha' | null, note: string } }
  const [records, setRecords] = useState({});

  const formatted = useMemo(
    () =>
      date.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    [date]
  );

  const changeDay = (offset) => {
    const d = new Date(date);
    d.setDate(d.getDate() + offset);
    setDate(d);
    setRecords({});
  };

  const setStatus = (sid, value, checked) => {
    setRecords((prev) => {
      const current = prev[sid] || { status: null, note: '' };
      return {
        ...prev,
        [sid]: {
          ...current,
          status: checked ? value : null,
        },
      };
    });
  };

  const setNote = (sid, note) => {
    setRecords((prev) => {
      const current = prev[sid] || { status: null, note: '' };
      return { ...prev, [sid]: { ...current, note } };
    });
  };

  const handleSave = () => {
    const payload = studentsSample.map((s) => ({
      studentId: s.id,
      name: s.name,
      status: records[s.id]?.status || null,
      note: records[s.id]?.note || '',
      date: date.toISOString().slice(0, 10),
    }));
    // For now, just show a friendly confirmation. Backend integration can replace this.
    console.log('Absensi disimpan:', payload);
    alert('Absensi tanggal ' + formatted + ' berhasil disimpan (contoh).');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="size-4" />
          <span>{formatted}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => changeDay(-1)} className="p-2 rounded-lg border hover:bg-gray-50" aria-label="Hari sebelumnya">
            <ChevronLeft className="size-4" />
          </button>
          <button onClick={() => setDate(new Date())} className="px-3 py-2 rounded-lg border hover:bg-gray-50 text-sm">
            Hari Ini
          </button>
          <button onClick={() => changeDay(1)} className="p-2 rounded-lg border hover:bg-gray-50" aria-label="Hari berikutnya">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="rounded-xl border bg-white overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 w-24">ID</th>
              <th className="text-left p-3">Nama</th>
              <th className="text-center p-3 w-24">Hadir</th>
              <th className="text-center p-3 w-24">Izin</th>
              <th className="text-center p-3 w-24">Alpha</th>
              <th className="text-left p-3 w-[320px]">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {studentsSample.map((s, idx) => {
              const data = records[s.id] || { status: null, note: '' };
              const rowBg = idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/40';
              return (
                <tr key={s.id} className={`border-t ${rowBg}`}>
                  <td className="p-3 font-mono text-xs">{s.id}</td>
                  <td className="p-3">{s.name}</td>
                  <td className="p-3 text-center">
                    <input
                      type="checkbox"
                      className="size-4 accent-emerald-600"
                      checked={data.status === 'Hadir'}
                      onChange={(e) => setStatus(s.id, 'Hadir', e.target.checked)}
                      aria-label={`Hadir - ${s.name}`}
                    />
                  </td>
                  <td className="p-3 text-center">
                    <input
                      type="checkbox"
                      className="size-4 accent-amber-600"
                      checked={data.status === 'Izin'}
                      onChange={(e) => setStatus(s.id, 'Izin', e.target.checked)}
                      aria-label={`Izin - ${s.name}`}
                    />
                  </td>
                  <td className="p-3 text-center">
                    <input
                      type="checkbox"
                      className="size-4 accent-rose-600"
                      checked={data.status === 'Alpha'}
                      onChange={(e) => setStatus(s.id, 'Alpha', e.target.checked)}
                      aria-label={`Alpha - ${s.name}`}
                    />
                  </td>
                  <td className="p-3">
                    <input
                      type="text"
                      value={data.note}
                      onChange={(e) => setNote(s.id, e.target.value)}
                      placeholder="cth: Sakit, izin lomba, dll."
                      className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          Simpan Absensi
        </button>
      </div>
    </div>
  );
}
