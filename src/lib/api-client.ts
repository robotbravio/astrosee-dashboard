import { z } from 'zod';
import { alerts, events, stations, telemetryByStation } from '@/mock/data';

const stationSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(['online', 'warning', 'offline']),
  lastSeenAt: z.string(),
  location: z
    .object({
      lat: z.number(),
      lon: z.number(),
      label: z.string().optional()
    })
    .optional(),
  connectivity: z.enum(['ethernet', 'wifi', 'cellular']).optional(),
  version: z.string().optional(),
  organizationId: z.string().optional()
});

const eventSchema = z.object({
  id: z.string(),
  stationId: z.string(),
  type: z.enum(['meteor', 'eclipse', 'conjunction', 'anomaly']),
  score: z.number(),
  startAt: z.string(),
  endAt: z.string().optional(),
  previewUrl: z.string().optional(),
  mediaUrl: z.string().optional()
});

const alertSchema = z.object({
  id: z.string(),
  stationId: z.string(),
  severity: z.enum(['critical', 'warning', 'info']),
  code: z.string(),
  message: z.string(),
  createdAt: z.string(),
  acknowledgedAt: z.string().optional()
});

const telemetryPointSchema = z.object({
  ts: z.string(),
  tempInsideC: z.number().optional(),
  humidityPct: z.number().optional(),
  pressureHpa: z.number().optional(),
  cpuTempC: z.number().optional(),
  storageUsedPct: z.number().optional(),
  lightLevel: z.number().optional()
});

const stationListSchema = z.object({ items: z.array(stationSchema), total: z.number() });
const eventListSchema = z.object({ items: z.array(eventSchema), total: z.number() });
const alertListSchema = z.object({ items: z.array(alertSchema), total: z.number() });

const useMock = process.env.NEXT_PUBLIC_USE_MOCK !== 'false';
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

function withBaseUrl(path: string) {
  return apiBaseUrl ? `${apiBaseUrl}${path}` : path;
}

async function fetchJson<T>(path: string, schema: z.ZodType<T>): Promise<T> {
  const response = await fetch(withBaseUrl(path), {
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Request failed ${response.status} ${response.statusText} for ${path}`);
  }

  const data: unknown = await response.json();
  return schema.parse(data);
}

export const apiClient = {
  async getStations() {
    if (useMock) {
      return stationListSchema.parse({ items: stations, total: stations.length });
    }

    return fetchJson('/stations', stationListSchema);
  },

  async getStationById(id: string) {
    if (useMock) {
      const station = stations.find((entry) => entry.id === id) ?? null;
      return station ? stationSchema.parse(station) : null;
    }

    return fetchJson(`/stations/${id}`, stationSchema);
  },

  async getStationTelemetry(id: string) {
    if (useMock) {
      return z.array(telemetryPointSchema).parse(telemetryByStation[id] ?? []);
    }

    return fetchJson(`/stations/${id}/telemetry`, z.array(telemetryPointSchema));
  },

  async getEvents() {
    if (useMock) {
      return eventListSchema.parse({ items: events, total: events.length });
    }

    return fetchJson('/events', eventListSchema);
  },

  async getEventById(id: string) {
    if (useMock) {
      const event = events.find((entry) => entry.id === id) ?? null;
      return event ? eventSchema.parse(event) : null;
    }

    return fetchJson(`/events/${id}`, eventSchema);
  },

  async getAlerts() {
    if (useMock) {
      return alertListSchema.parse({ items: alerts, total: alerts.length });
    }

    return fetchJson('/alerts', alertListSchema);
  }
};
