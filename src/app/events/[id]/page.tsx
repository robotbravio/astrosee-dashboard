import { notFound } from 'next/navigation';
import { apiClient } from '@/lib/api-client';

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = await apiClient.getEventById(id);
  if (!event) return notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Evento {event.id}</h1>
      <div className="card">
        <p>Tipo: {event.type}</p>
        <p>Score: {event.score}</p>
        <p>Inicio: {new Date(event.startAt).toLocaleString()}</p>
        <button className="mt-3 rounded-md border border-slate-700 px-3 py-1 text-sm">Descargar</button>
      </div>
      <div className="card flex h-72 items-center justify-center border border-dashed border-slate-700 text-slate-500">Video/frames placeholder</div>
    </div>
  );
}
