import { StationStatus } from '@/lib/types';

const statusClasses: Record<StationStatus, string> = {
  online: 'bg-emerald-500/15 text-emerald-200 border-emerald-400/30',
  warning: 'bg-amber-500/15 text-amber-200 border-amber-400/30',
  offline: 'bg-rose-500/15 text-rose-200 border-rose-400/30'
};

const label: Record<StationStatus, string> = {
  online: 'Online',
  warning: 'Warning',
  offline: 'Offline'
};

export function StatusChip({ status }: { status: StationStatus }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium',
        statusClasses[status]
      ].join(' ')}
    >
      {label[status]}
    </span>
  );

}
