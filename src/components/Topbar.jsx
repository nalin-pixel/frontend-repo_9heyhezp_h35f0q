import React from 'react';
import { Bell, CalendarDays, Search } from 'lucide-react';

export default function Topbar({ title }) {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="size-4" />
              <span>{new Date().toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Cari…"
                className="pl-9 pr-3 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
                aria-label="Search"
              />
              <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
            <button className="relative p-2 rounded-lg border hover:bg-gray-50">
              <Bell className="size-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
            <div className="size-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white grid place-items-center font-semibold">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
