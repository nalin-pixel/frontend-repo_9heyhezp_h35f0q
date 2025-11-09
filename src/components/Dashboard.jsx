import React from 'react';
import { Users, CheckCircle2, XCircle, FileText } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total Siswa" value="120" color="text-indigo-600" />
        <StatCard icon={CheckCircle2} label="Hadir Hari Ini" value="108" color="text-emerald-600" />
        <StatCard icon={XCircle} label="Tidak Hadir" value="12" color="text-rose-600" />
        <StatCard icon={FileText} label="Laporan Bulan Ini" value="8" color="text-amber-600" />
      </div>
      <div className="rounded-xl border border-gray-200 p-4 bg-white/70">
        <h2 className="font-medium mb-2">Ringkasan</h2>
        <p className="text-sm text-gray-600">Data ini akan terhubung ke basis data untuk menampilkan statistik nyata setelah penyimpanan permanen diaktifkan.</p>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white/70 p-4 flex items-center gap-3">
      <div className={`h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-xl font-semibold">{value}</div>
      </div>
    </div>
  );
}
