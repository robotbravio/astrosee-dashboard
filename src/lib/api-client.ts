import { z } from 'zod';
import { alerts, events, stations, telemetryByStation } from '@/mock/data';

const stationSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(['online', 'warning', 'offline']),
  lastSeenAt: z.string()
});

const useMock = process.env.NEXT_PUBLIC_USE_MOCK !== 'false';

export const apiClient = {
  async getStations() {
    if (useMock) {
      return { items: z.array(stationSchema).parse(stations), total: stations.length };
    }
    const response = await fetch('/stations');
    return response.json();
  },
  async getStationById(id: string) {
    return stations.find((station) => station.id === id) ?? null;
  },
  async getStationTelemetry(id: string) {
    return telemetryByStation[id] ?? [];
  },
  async getEvents() {
    return { items: events, total: events.length };
  },
  async getEventById(id: string) {
    return events.find((event) => event.id === id) ?? null;
  },
  async getAlerts() {
    return { items: alerts, total: alerts.length };
  }
};
