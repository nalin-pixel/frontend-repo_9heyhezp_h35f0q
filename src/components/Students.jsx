import React, { useMemo, useState } from 'react';
import { Plus, Search } from 'lucide-react';

const initial = [
  { id: 'S-001', name: 'Budi Santoso', kelas: '5A' },
  { id: 'S-002', name: 'Siti Aisyah', kelas: '5A' },
  { id: 'S-003', name: 'Andi Pratama', kelas: '5B' },
  { id: 'S-004', name: 'Dewi Lestari', kelas: '6A' },
];

export default function Students() {
  const [data, setData] = useState(initial);
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    if (!q) return data;
    return data.filter((s) => s.name.toLowerCase().includes(q.toLowerCase()) || s.kelas.toLowerCase().includes(q.toLowerCase()));
  }, [q, data]);

  const addDummy = () => {
    const next = data.length + 1;
    setData([...data, { id: `S-${String(next).padStart(3, '0')}`, name: `Siswa ${next}`, kelas: next % 2 === 0 ? '6B' : '4A' }]);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div className="relative">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari nama atau kelas"
            className="pl-9 pr-3 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
          />
          <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
        <button onClick={addDummy} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          <Plus className="size-4"/> Tambah Siswa
        </button>
      </div>

      <div className="rounded-xl border bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Nama</th>
              <th className="text-left p-3">Kelas</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-3 font-mono text-xs">{s.id}</td>
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.kelas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
