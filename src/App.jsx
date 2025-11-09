import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Attendance from './components/Attendance.jsx';
import Students from './components/Students.jsx';
import Reports from './components/Reports.jsx';

const PAGES = {
  Dashboard: Dashboard,
  Absensi: Attendance,
  Siswa: Students,
  Laporan: Reports,
};

export default function App() {
  const [page, setPage] = useState('Dashboard');
  const PageComp = PAGES[page] || Dashboard;

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900">
      <div className="h-full flex">
        <Sidebar current={page} onNavigate={setPage} />
        <main className="flex-1 flex flex-col min-w-0">
          <Topbar />
          <div className="mx-auto max-w-7xl w-full flex-1 overflow-auto">
            <PageComp />
          </div>
        </main>
      </div>
    </div>
  );
}
