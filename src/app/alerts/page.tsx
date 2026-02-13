import { apiClient } from '@/lib/api-client';

export default async function AlertsPage() {
  const { items } = await apiClient.getAlerts();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Alerts</h1>
      <div className="space-y-2">
        {items.map((alert) => (
          <div key={alert.id} className="card">
            <p className="text-xs uppercase text-slate-400">{alert.severity}</p>
            <p>{alert.message}</p>
            <p className="text-xs text-slate-500">{new Date(alert.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
