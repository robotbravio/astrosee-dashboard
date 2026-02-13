export function KpiCard({ title, value, delta }: { title: string; value: string; delta?: string }) {
  return (
    <div className="card">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      {delta ? <p className="mt-1 text-xs text-slate-400">{delta}</p> : null}
    </div>
  );
}
