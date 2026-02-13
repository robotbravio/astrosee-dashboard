'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  ['Overview', '/'],
  ['Stations', '/stations'],
  ['Events', '/events'],
  ['Alerts', '/alerts'],
  ['Settings', '/settings'],
  ['Admin', '/admin']
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r border-slate-800 bg-slate-950/60 p-4">
      <div className="mb-6">
        <div className="text-lg font-semibold">AstroSee</div>
        <div className="text-xs text-slate-400">Dashboard (MVP)</div>
      </div>

      <nav className="space-y-1">
        {items.map(([label, href]) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={[
                'block rounded-lg px-3 py-2 text-sm transition',
                active ? 'bg-slate-900 text-slate-50' : 'text-slate-300 hover:bg-slate-900/60'
              ].join(' ')}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
