export type StationStatus = 'online' | 'warning' | 'offline';

export type Station = {
  id: string;
  name: string;
  status: StationStatus;
  lastSeenAt: string;
  location?: { lat: number; lon: number; label?: string };
  connectivity?: 'ethernet' | 'wifi' | 'cellular';
  version?: string;
  organizationId?: string;
};

export type TelemetryPoint = {
  ts: string;
  tempInsideC?: number;
  humidityPct?: number;
  pressureHpa?: number;
  cpuTempC?: number;
  storageUsedPct?: number;
  lightLevel?: number;
};

export type EventType = 'meteor' | 'eclipse' | 'conjunction' | 'anomaly';

export type AstroEvent = {
  id: string;
  stationId: string;
  type: EventType;
  score: number;
  startAt: string;
  endAt?: string;
  previewUrl?: string;
  mediaUrl?: string;
};

export type AlertSeverity = 'critical' | 'warning' | 'info';

export type Alert = {
  id: string;
  stationId: string;
  severity: AlertSeverity;
  code: string;
  message: string;
  createdAt: string;
  acknowledgedAt?: string;
};
