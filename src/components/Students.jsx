import React from 'react';
import { UserPlus } from 'lucide-react';

export default function Students() {
  const students = [
    { id: 'S-001', name: 'Alya Putri', className: '3A' },
    { id: 'S-002', name: 'Budi Santoso', className: '3A' },
    { id: 'S-003', name: 'Citra Lestari', className: '3B' },
  ];

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Siswa</h1>
        <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-white text-sm hover:bg-gray-800">
          <UserPlus className="h-4 w-4" /> Tambah Siswa
        </button>
      </div>

      <div className="rounded-xl border border-gray-200 overflow-hidden bg-white/70">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <Th>NIS</Th>
              <Th>Nama</Th>
              <Th>Kelas</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50/60">
                <Td className="font-mono text-xs text-gray-600">{s.id}</Td>
                <Td className="font-medium">{s.name}</Td>
                <Td>{s.className}</Td>
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
