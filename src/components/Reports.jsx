import React from 'react';
import { FileDown } from 'lucide-react';

export default function Reports() {
  const data = [
    { date: '2025-02-01', present: 110, permit: 6, absent: 4 },
    { date: '2025-02-02', present: 108, permit: 8, absent: 4 },
    { date: '2025-02-03', present: 109, permit: 5, absent: 6 },
  ];

  const handleExport = () => {
    const csvRows = [
      ['Tanggal', 'Hadir', 'Izin', 'Alpha'],
      ...data.map((d) => [d.date, d.present, d.permit, d.absent]),
    ];
    const csv = csvRows.map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'laporan_absensi.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Laporan</h1>
        <button onClick={handleExport} className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-white text-sm hover:bg-emerald-700">
          <FileDown className="h-4 w-4" /> Ekspor CSV
        </button>
      </div>

      <div className="rounded-xl border border-gray-200 overflow-hidden bg-white/70">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <Th>Tanggal</Th>
              <Th>Hadir</Th>
              <Th>Izin</Th>
              <Th>Alpha</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((d) => (
              <tr key={d.date} className="hover:bg-gray-50/60">
                <Td>{d.date}</Td>
                <Td>{d.present}</Td>
                <Td>{d.permit}</Td>
                <Td>{d.absent}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children, className = '' }) {
  return (
    <th className={`px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 ${className}`}>
      {children}
    </th>
  );
}

function Td({ children, className = '' }) {
  return <td className={`px-4 py-2 text-sm text-gray-700 ${className}`}>{children}</td>;
}
