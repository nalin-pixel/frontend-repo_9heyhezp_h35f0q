import React from 'react';
import { CalendarDays } from 'lucide-react';

export default function Topbar() {
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <CalendarDays className="h-5 w-5 text-blue-600" />
          <span className="text-sm">{today}</span>
        </div>
        <div className="text-sm text-gray-500">Semester Genap 2025</div>
      </div>
    </header>
  );
}
