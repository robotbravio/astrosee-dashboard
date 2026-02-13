export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 px-6 py-3">
      <div className="flex items-center gap-3">
        <select className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-sm">
          <option>Org Norte</option>
          <option>Org Sur</option>
        </select>
        <input placeholder="Buscar estación/evento..." className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1 text-sm" />
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />Backend OK</span>
        <button className="rounded-md border border-slate-700 px-3 py-1">Logout</button>
      </div>
    </header>
  );
}
