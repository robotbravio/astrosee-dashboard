'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { TelemetryPoint } from '@/lib/types';

export function TelemetryChart({
  data,
  metric,
  unit
}: {
  data: TelemetryPoint[];
  metric: keyof TelemetryPoint;
  unit?: string;
}) {
  const rows = data
    .filter((point) => typeof point[metric] === 'number')
    .map((point) => ({ ...point, _t: new Date(point.ts).getTime() }));

  return (
    <div className="card">
      <div className="mb-3 text-sm text-slate-300">
        {String(metric)} {unit ? <span className="text-slate-500">({unit})</span> : null}
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rows}>
            <XAxis
              dataKey="_t"
              tickFormatter={(value) =>
                new Date(value).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }
            />
            <YAxis />
            <Tooltip
              labelFormatter={(value) => new Date(Number(value)).toLocaleString()}
              formatter={(value) =>
                typeof value === 'number'
                  ? [unit ? `${value.toFixed(2)} ${unit}` : value.toFixed(2), String(metric)]
                  : [value, String(metric)]
              }
            />
            <Line type="monotone" dataKey={metric as string} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
