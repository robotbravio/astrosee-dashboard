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
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-950 p-4">
      <h1 className="mb-6 text-lg font-semibold">AstroSee</h1>
      <nav className="space-y-2">
        {items.map(([label, href]) => (
          <Link key={href} href={href} className={`block rounded-lg px-3 py-2 text-sm ${pathname === href ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900'}`}>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
