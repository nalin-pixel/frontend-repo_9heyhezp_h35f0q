import React, { useMemo, useState } from 'react';

const SAMPLE_STUDENTS = [
  { id: 'S-001', name: 'Alya Putri' },
  { id: 'S-002', name: 'Budi Santoso' },
  { id: 'S-003', name: 'Citra Lestari' },
  { id: 'S-004', name: 'Dewa Pratama' },
];

export default function Attendance() {
  const [records, setRecords] = useState(() => {
    const init = {};
    SAMPLE_STUDENTS.forEach((s) => {
      init[s.id] = { status: null, note: '' };
    });
    return init;
  });

  const payload = useMemo(() => {
    return SAMPLE_STUDENTS.map((s) => ({
      studentId: s.id,
      status: records[s.id]?.status || null,
      note: records[s.id]?.note || '',
    }));
  }, [records]);

  const setStatus = (id, status) => {
    setRecords((prev) => ({
      ...prev,
      [id]: { status, note: prev[id]?.note || '' },
    }));
  };

  const setNote = (id, note) => {
    setRecords((prev) => ({
      ...prev,
      [id]: { status: prev[id]?.status || null, note },
    }));
  };

  const handleSave = () => {
    // For now we simply log; backend integration can persist this later
    // eslint-disable-next-line no-console
    console.log('Attendance payload:', payload);
    alert('Absensi tersimpan (contoh). Data akan disimpan permanen saat backend aktif.');
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Absensi</h1>
        <button
          onClick={handleSave}
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-blue-700"
        >
          Simpan
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white/70">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <Th>NIS</Th>
              <Th>Nama</Th>
              <Th className="text-center">Hadir</Th>
              <Th className="text-center">Izin</Th>
              <Th className="text-center">Alpha</Th>
              <Th>Keterangan</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {SAMPLE_STUDENTS.map((s) => {
              const r = records[s.id] || { status: null, note: '' };
              return (
                <tr key={s.id} className="hover:bg-gray-50/60">
                  <Td className="font-mono text-xs text-gray-600">{s.id}</Td>
                  <Td className="font-medium">{s.name}</Td>
                  <Td className="text-center">
                    <input
                      type="checkbox"
                      checked={r.status === 'Hadir'}
                      onChange={(e) => setStatus(s.id, e.target.checked ? 'Hadir' : null)}
                    />
                  </Td>
                  <Td className="text-center">
                    <input
                      type="checkbox"
                      checked={r.status === 'Izin'}
                      onChange={(e) => setStatus(s.id, e.target.checked ? 'Izin' : null)}
                    />
                  </Td>
                  <Td className="text-center">
                    <input
                      type="checkbox"
                      checked={r.status === 'Alpha'}
                      onChange={(e) => setStatus(s.id, e.target.checked ? 'Alpha' : null)}
                    />
                  </Td>
                  <Td>
                    <input
                      type="text"
                      value={r.note}
                      onChange={(e) => setNote(s.id, e.target.value)}
                      placeholder="Opsional"
                      className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Td>
                </tr>
              );
            })}
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
