import { Alert, AstroEvent, Station, TelemetryPoint } from '@/lib/types';

const now = new Date();

export const stations: Station[] = [
  { id: 'st-001', name: 'Atacama North', status: 'online', lastSeenAt: now.toISOString(), location: { lat: -23.02, lon: -67.75, label: 'Chile' }, connectivity: 'ethernet', version: '1.4.2', organizationId: 'org-1' },
  { id: 'st-002', name: 'Patagonia Sky', status: 'warning', lastSeenAt: new Date(now.getTime() - 1000 * 60 * 4).toISOString(), location: { lat: -50.1, lon: -72.3, label: 'Argentina' }, connectivity: 'wifi', version: '1.4.1', organizationId: 'org-1' },
  { id: 'st-003', name: 'Canarias West', status: 'offline', lastSeenAt: new Date(now.getTime() - 1000 * 60 * 25).toISOString(), location: { lat: 28.26, lon: -16.64, label: 'Spain' }, connectivity: 'cellular', version: '1.3.9', organizationId: 'org-2' }
];

export const events: AstroEvent[] = [
  { id: 'ev-9001', stationId: 'st-001', type: 'meteor', score: 0.93, startAt: new Date(now.getTime() - 1000 * 60 * 14).toISOString(), previewUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=500', mediaUrl: 'https://example.com/mock.mp4' },
  { id: 'ev-9002', stationId: 'st-002', type: 'anomaly', score: 0.66, startAt: new Date(now.getTime() - 1000 * 60 * 62).toISOString() },
  { id: 'ev-9003', stationId: 'st-001', type: 'eclipse', score: 0.82, startAt: new Date(now.getTime() - 1000 * 60 * 180).toISOString() }
];

export const alerts: Alert[] = [
  { id: 'al-001', stationId: 'st-003', severity: 'critical', code: 'OFFLINE', message: 'Station offline for > 20 min', createdAt: new Date(now.getTime() - 1000 * 60 * 26).toISOString() },
  { id: 'al-002', stationId: 'st-002', severity: 'warning', code: 'TEMP_HIGH', message: 'Internal temperature above threshold', createdAt: new Date(now.getTime() - 1000 * 60 * 8).toISOString() }
];

export const telemetryByStation: Record<string, TelemetryPoint[]> = {
  'st-001': Array.from({ length: 24 }).map((_, i) => ({
    ts: new Date(now.getTime() - (23 - i) * 1000 * 60 * 5).toISOString(),
    tempInsideC: 18 + i * 0.12,
    humidityPct: 45 - i * 0.1,
    pressureHpa: 1005 + i * 0.2,
    cpuTempC: 53 + i * 0.08,
    storageUsedPct: 63 + i * 0.15
  })),
  'st-002': Array.from({ length: 24 }).map((_, i) => ({
    ts: new Date(now.getTime() - (23 - i) * 1000 * 60 * 5).toISOString(),
    tempInsideC: 28 + i * 0.25,
    humidityPct: 35 + i * 0.1,
    cpuTempC: 61 + i * 0.12,
    storageUsedPct: 80 + i * 0.08
  }))
};
