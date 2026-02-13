import { notFound } from 'next/navigation';
import { StatusChip } from '@/components/status-chip';
import { TelemetryChart } from '@/components/telemetry-chart';
import { apiClient } from '@/lib/api-client';

export default async function StationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const station = await apiClient.getStationById(id);
  if (!station) return notFound();
  const telemetry = await apiClient.getStationTelemetry(id);
  const relatedEvents = (await apiClient.getEvents()).items.filter((event) => event.stationId === station.id);

  return (
    <div className="space-y-4">
      <div className="card flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{station.name}</h1>
          <p className="text-sm text-slate-400">{station.location?.label} · Last seen {new Date(station.lastSeenAt).toLocaleString()}</p>
        </div>
        <StatusChip status={station.status} />
      </div>
      <div className="card">
        <h2 className="mb-2 text-sm">Live view (último frame cada 2s)</h2>
        <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-slate-700 text-slate-500">Frame/Stream placeholder</div>
      </div>
      <TelemetryChart data={telemetry} metric="tempInsideC" />
      <div className="card">
        <h2 className="mb-2 text-sm font-semibold">Eventos recientes</h2>
        <ul className="space-y-1 text-sm">
          {relatedEvents.map((event) => <li key={event.id}>{event.type} · score {event.score}</li>)}
        </ul>
      </div>
    </div>
  );
}
