import React, { useMemo, useState } from 'react';
import { Plus, Users } from 'lucide-react';

const initial = [
  { id: '5A', wali: 'Ibu Sari', jumlah: 28 },
  { id: '5B', wali: 'Pak Arif', jumlah: 27 },
  { id: '6A', wali: 'Ibu Maya', jumlah: 26 },
];

export default function Classes() {
  const [data, setData] = useState(initial);
  const [id, setId] = useState('');
  const [wali, setWali] = useState('');

  const addClass = () => {
    if (!id || !wali) return;
    if (data.some((c) => c.id === id)) return;
    setData([{ id, wali, jumlah: 0 }, ...data]);
    setId('');
    setWali('');
  };

  const totalSiswa = useMemo(() => data.reduce((a, c) => a + c.jumlah, 0), [data]);

  return (
    <div className="space-y-6">
      <div className="p-5 rounded-xl border bg-white grid sm:grid-cols-3 gap-3 items-end">
        <div>
          <label className="text-sm text-muted-foreground">Kode Kelas</label>
          <input value={id} onChange={(e) => setId(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border" placeholder="mis. 4A" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Wali Kelas</label>
          <input value={wali} onChange={(e) => setWali(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border" placeholder="Nama Wali" />
        </div>
        <button onClick={addClass} className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          <Plus className="size-4"/> Tambah Kelas
        </button>
      </div>

      <div className="rounded-xl border bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3">Kelas</th>
              <th className="text-left p-3">Wali</th>
              <th className="text-left p-3">Jumlah Siswa</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3 font-medium">{c.id}</td>
                <td className="p-3">{c.wali}</td>
                <td className="p-3 flex items-center gap-2"><Users className="size-4"/> {c.jumlah}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-muted-foreground">Total siswa terdata: {totalSiswa}</div>
    </div>
  );
}
