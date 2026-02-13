import Link from 'next/link';
import { apiClient } from '@/lib/api-client';

export default async function EventsPage() {
  const { items } = await apiClient.getEvents();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Events</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((event) => (
          <div className="card" key={event.id}>
            <p className="text-sm text-slate-400">{new Date(event.startAt).toLocaleString()}</p>
            <p className="text-lg capitalize">{event.type}</p>
            <p className="text-sm">Confianza: {(event.score * 100).toFixed(0)}%</p>
            <Link href={`/events/${event.id}`} className="mt-2 inline-block text-sky-400">Ver clip</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
