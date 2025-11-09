import React from 'react';
import { Users, CheckCircle2, BookOpen, FileText } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend }) => (
  <div className="p-5 rounded-xl border bg-white shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className="size-11 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
        <Icon className="size-5" />
      </div>
    </div>
    {trend && (
      <p className="text-xs mt-3 text-emerald-600">{trend}</p>
    )}
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total Siswa" value="324" trend="+12 siswa bulan ini" />
        <StatCard icon={BookOpen} label="Jumlah Kelas" value="12" />
        <StatCard icon={CheckCircle2} label="Kehadiran Hari Ini" value="298" trend="92% hadir" />
        <StatCard icon={FileText} label="Laporan Bulan Ini" value="8" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-5 rounded-xl border bg-white shadow-sm">
          <h3 className="font-semibold mb-4">Ringkasan Kehadiran Mingguan</h3>
          <div className="h-56 grid place-items-center text-muted-foreground">
            <span>Grafik dummy — integrasi chart dapat ditambahkan nanti.</span>
          </div>
        </div>
        <div className="p-5 rounded-xl border bg-white shadow-sm">
          <h3 className="font-semibold mb-4">Kegiatan Terbaru</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-between">
              <span>Absensi Kelas 5A</span>
              <span className="text-muted-foreground">07:45</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Tambah Siswa Baru</span>
              <span className="text-muted-foreground">Kemarin</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Export Laporan</span>
              <span className="text-muted-foreground">2 hari lalu</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
