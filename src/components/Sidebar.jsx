import React from 'react';
import { Home, CheckSquare, Users, BarChart2 } from 'lucide-react';

const NAV_ITEMS = [
  { key: 'Dashboard', label: 'Dashboard', icon: Home },
  { key: 'Absensi', label: 'Absensi', icon: CheckSquare },
  { key: 'Siswa', label: 'Siswa', icon: Users },
  { key: 'Laporan', label: 'Laporan', icon: BarChart2 },
];

export default function Sidebar({ current, onNavigate }) {
  return (
    <aside className="h-full w-64 shrink-0 border-r border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="px-4 py-5">
        <div className="text-xl font-semibold tracking-tight">SekolahKu</div>
        <div className="text-xs text-gray-500">Attendance System</div>
      </div>
      <nav className="px-2 space-y-1">
        {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
          const active = current === key;
          return (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left ${
                active
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
