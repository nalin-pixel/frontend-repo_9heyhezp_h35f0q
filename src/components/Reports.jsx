import React, { useMemo, useState } from 'react';
import { Download, Calendar } from 'lucide-react';

export default function Reports() {
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  });

  const [kelas, setKelas] = useState('Semua');

  const summary = useMemo(() => ({
    hadir: 92,
    izin: 5,
    alpha: 3,
  }), []);

  const download = () => {
    const blob = new Blob([
      `Laporan Absensi\nBulan: ${month}\nKelas: ${kelas}\nHadir: ${summary.hadir}%\nIzin: ${summary.izin}%\nAlpha: ${summary.alpha}%`,
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `laporan-${month}-${kelas}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      <div className="p-5 rounded-xl border bg-white grid sm:grid-cols-3 gap-3 items-end">
        <div>
          <label className="text-sm text-muted-foreground">Bulan</label>
          <div className="relative mt-1">
            <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} className="w-full px-3 py-2 rounded-lg border" />
            <Calendar className="size-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"/>
          </div>
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Kelas</label>
          <select value={kelas} onChange={(e) => setKelas(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border">
            <option>Semua</option>
            <option>5A</option>
            <option>5B</option>
            <option>6A</option>
          </select>
        </div>
        <button onClick={download} className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          <Download className="size-4"/> Unduh Laporan
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl border bg-white">
          <p className="text-sm text-muted-foreground">Hadir</p>
          <p className="text-3xl font-semibold mt-1">{summary.hadir}%</p>
        </div>
        <div className="p-5 rounded-xl border bg-white">
          <p className="text-sm text-muted-foreground">Izin</p>
          <p className="text-3xl font-semibold mt-1">{summary.izin}%</p>
        </div>
        <div className="p-5 rounded-xl border bg-white">
          <p className="text-sm text-muted-foreground">Alpha</p>
          <p className="text-3xl font-semibold mt-1">{summary.alpha}%</p>
        </div>
      </div>
    </div>
  );
}
