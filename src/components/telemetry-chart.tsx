'use client';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { TelemetryPoint } from '@/lib/types';

export function TelemetryChart({ data, metric }: { data: TelemetryPoint[]; metric: keyof TelemetryPoint }) {
  return (
    <div className="card h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="ts" tickFormatter={(v) => new Date(v).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} hide={false} />
          <YAxis />
          <Tooltip labelFormatter={(v) => new Date(v).toLocaleString()} />
          <Line type="monotone" dataKey={metric} stroke="#38bdf8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
