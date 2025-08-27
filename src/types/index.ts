export interface SensorData {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: "online" | "offline" | "warning";
  max: number;
  min: number;
  avg: number;
  lastUpdate: string;
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
  time?: string;
}

export interface ReportData {
  id: string;
  title: string;
  date: string;
  status: "completed" | "processing" | "error";
  type: "monthly" | "weekly" | "daily";
}

export interface DeviceData {
  id: string;
  name: string;
  location: string;
  type: "Sensor NOx" | "Sensor CO2" | "Sensor SOx";
  status: "online" | "offline" | "maintenance";
  lastSeen: string;
  batteryLevel?: number;
  signalStrength?: number;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  current: boolean;
}
