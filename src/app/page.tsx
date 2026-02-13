import Link from 'next/link';
import { KpiCard } from '@/components/kpi-card';
import { MapStations } from '@/components/map-stations';
import { StatusChip } from '@/components/status-chip';
import { apiClient } from '@/lib/api-client';

export default async function HomePage() {
  const stationResponse = await apiClient.getStations();
  const eventResponse = await apiClient.getEvents();
  const alertResponse = await apiClient.getAlerts();
  const online = stationResponse.items.filter((s) => s.status === 'online').length;

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-4">
        <KpiCard title="Estaciones online" value={`${online}/${stationResponse.total}`} />
        <KpiCard title="Eventos hoy" value={`${eventResponse.total}`} />
        <KpiCard title="Alertas críticas" value={`${alertResponse.items.filter((a) => a.severity === 'critical').length}`} />
        <KpiCard title="Último evento" value={eventResponse.items[0]?.type ?? 'N/A'} />
      </section>
      <MapStations />
      <section className="card">
        <h2 className="mb-3 text-sm font-semibold">Estaciones con problemas</h2>
        <div className="space-y-2">
          {stationResponse.items.filter((station) => station.status !== 'online').slice(0, 10).map((station) => (
            <div key={station.id} className="flex items-center justify-between rounded-lg border border-slate-800 px-3 py-2">
              <div>
                <p>{station.name}</p>
                <p className="text-xs text-slate-400">Último visto: {new Date(station.lastSeenAt).toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-3">
                <StatusChip status={station.status} />
                <Link href={`/stations/${station.id}`} className="text-sm text-sky-400">Ver detalle</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
