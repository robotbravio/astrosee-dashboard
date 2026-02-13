export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-sm text-slate-300">Astrosee Network</div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-300">
            Mock mode
          </span>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-1 text-xs text-emerald-200">
            Backend: off
          </span>
        </div>

      </div>
    </header>
  );
}
