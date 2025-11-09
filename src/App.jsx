import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Students from './components/Students';
import Reports from './components/Reports';

const PAGES = {
  Dashboard: <Dashboard />,
  Absensi: <Attendance />,
  Siswa: <Students />,
  Laporan: <Reports />,
};

export default function App() {
  const [page, setPage] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-gray-900">
      <div className="flex">
        <Sidebar current={page} onSelect={setPage} />
        <main className="flex-1 min-h-screen">
          <Topbar title={page} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {PAGES[page]}
          </div>
        </main>
      </div>
    </div>
  );
}
