import Link from 'next/link';
import { StatusChip } from '@/components/status-chip';
import { apiClient } from '@/lib/api-client';

export default async function StationsPage() {
  const { items } = await apiClient.getStations();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Stations</h1>
      <div className="card overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="px-2 py-2 text-left">Nombre</th><th className="px-2 py-2 text-left">Estado</th><th className="px-2 py-2 text-left">Último seen</th><th className="px-2 py-2 text-left">Conectividad</th><th className="px-2 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((station) => (
              <tr key={station.id} className="border-t border-slate-800">
                <td className="px-2 py-2">{station.name}</td>
                <td className="px-2 py-2"><StatusChip status={station.status} /></td>
                <td className="px-2 py-2">{new Date(station.lastSeenAt).toLocaleTimeString()}</td>
                <td className="px-2 py-2">{station.connectivity}</td>
                <td className="px-2 py-2"><Link className="text-sky-400" href={`/stations/${station.id}`}>Ver detalle</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
