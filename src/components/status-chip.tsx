import { StationStatus } from '@/lib/types';

const statusClasses: Record<StationStatus, string> = {
  online: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
  warning: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
  offline: 'bg-rose-500/20 text-rose-300 border-rose-400/40'
};

export function StatusChip({ status }: { status: StationStatus }) {
  return <span className={`rounded-full border px-2 py-1 text-xs capitalize ${statusClasses[status]}`}>{status}</span>;
}
