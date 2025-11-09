import React from 'react';
import { Home, CheckCircle, Users, BookOpen, FileText, LogOut } from 'lucide-react';

const navItems = [
  { key: 'Dashboard', label: 'Dashboard', icon: Home },
  { key: 'Absensi', label: 'Absensi', icon: CheckCircle },
  { key: 'Siswa', label: 'Siswa', icon: Users },
  { key: 'Kelas', label: 'Kelas', icon: BookOpen },
  { key: 'Laporan', label: 'Laporan', icon: FileText },
];

export default function Sidebar({ current, onSelect }) {
  return (
    <aside className="hidden md:flex md:flex-col w-64 border-r bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 h-screen sticky top-0">
      <div className="px-6 py-5 border-b">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">AS</div>
          <div>
            <p className="font-semibold">Absensi Sekolah</p>
            <p className="text-xs text-muted-foreground">SD | Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ key, label, icon: Icon }) => {
          const active = current === key;
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                active
                  ? 'bg-blue-600 text-white shadow'
                  : 'hover:bg-blue-50 text-gray-700'
              }`}
            >
              <Icon className="size-4" />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <LogOut className="size-4" />
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}
