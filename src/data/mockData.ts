import { SensorData, ChartData, ReportData, DeviceData } from "@/types";

export const sensorData: SensorData[] = [
  {
    id: "co",
    name: "CO",
    value: 8.2,
    unit: "mg/m³",
    status: "online",
    max: 12.1,
    min: 5.8,
    avg: 8.9,
    lastUpdate: "2024-02-15T10:30:00Z",
  },
  {
    id: "no2",
    name: "NO₂",
    value: 45.3,
    unit: "µg/m³",
    status: "warning",
    max: 52.1,
    min: 38.2,
    avg: 44.1,
    lastUpdate: "2024-02-15T10:30:00Z",
  },
  {
    id: "so2",
    name: "SO₂",
    value: 23.7,
    unit: "µg/m³",
    status: "online",
    max: 28.9,
    min: 18.4,
    avg: 22.8,
    lastUpdate: "2024-02-15T10:30:00Z",
  },
  {
    id: "pm25",
    name: "PM2.5",
    value: 15.2,
    unit: "µg/m³",
    status: "online",
    max: 18.7,
    min: 12.1,
    avg: 14.9,
    lastUpdate: "2024-02-15T10:30:00Z",
  },
];

export const chartData: ChartData[] = [
  { name: "Jan", value: 8.5 },
  { name: "Fev", value: 9.2 },
  { name: "Mar", value: 7.8 },
  { name: "Abr", value: 8.9 },
  { name: "Mai", value: 9.5 },
  { name: "Jun", value: 8.1 },
  { name: "Jul", value: 7.9 },
];

export const emissionTrendData: ChartData[] = [
  { name: "00:00", value: 8.2, time: "00:00" },
  { name: "04:00", value: 7.8, time: "04:00" },
  { name: "08:00", value: 9.1, time: "08:00" },
  { name: "12:00", value: 8.7, time: "12:00" },
  { name: "16:00", value: 9.3, time: "16:00" },
  { name: "20:00", value: 8.5, time: "20:00" },
];

export const weeklyEmissionData: ChartData[] = [
  { name: "Seg", value: 8.2 },
  { name: "Ter", value: 7.9 },
  { name: "Qua", value: 9.1 },
  { name: "Qui", value: 8.7 },
  { name: "Sex", value: 9.3 },
  { name: "Sáb", value: 7.1 },
  { name: "Dom", value: 6.8 },
];

export const pollutantTrendData = [
  { name: "Seg", CO: 12, SOx: 40, NOx: 22, PM25: 14 },
  { name: "Ter", CO: 13, SOx: 45, NOx: 25, PM25: 15 },
  { name: "Qua", CO: 15, SOx: 50, NOx: 28, PM25: 17 },
  { name: "Qui", CO: 12, SOx: 47, NOx: 23, PM25: 14 },
  { name: "Sex", CO: 13, SOx: 43, NOx: 26, PM25: 15 },
  { name: "Sáb", CO: 15, SOx: 58, NOx: 30, PM25: 17 },
  { name: "Dom", CO: 14, SOx: 52, NOx: 27, PM25: 16 },
];

export const monthlyComparisonData = [
  { name: "CO", atual: 8.2, anterior: 7.8 },
  { name: "NO₂", atual: 45.3, anterior: 42.1 },
  { name: "SO₂", atual: 23.7, anterior: 25.2 },
  { name: "PM2.5", atual: 15.2, anterior: 16.8 },
];

export const pollutantDistribution = [
  { name: "CO", value: 35, color: "#3B82F6" },
  { name: "NO₂", value: 28, color: "#EF4444" },
  { name: "SO₂", value: 22, color: "#10B981" },
  { name: "PM2.5", value: 15, color: "#F59E0B" },
];

export const hourlyEmissionData = Array.from({ length: 24 }, (_, i) => ({
  name: `${i.toString().padStart(2, "0")}:00`,
  value: Math.round((Math.sin(i / 4) * 2 + 8 + Math.random() * 2) * 10) / 10,
  time: `${i.toString().padStart(2, "0")}:00`,
}));

export const deviceStatusData = [
  { name: "Online", value: 18, color: "#10B981" },
  { name: "Offline", value: 3, color: "#EF4444" },
  { name: "Manutenção", value: 3, color: "#F59E0B" },
];

export const reportData: ReportData[] = [
  {
    id: "1",
    title: "Relatório Mensal - Janeiro 2024",
    date: "2024-01-31",
    status: "completed",
    type: "monthly",
  },
  {
    id: "2",
    title: "Relatório Semanal - Semana 6",
    date: "2024-02-11",
    status: "completed",
    type: "weekly",
  },
  {
    id: "3",
    title: "Relatório Diário - 15/02/2024",
    date: "2024-02-15",
    status: "processing",
    type: "daily",
  },
  {
    id: "4",
    title: "Relatório Mensal - Dezembro 2023",
    date: "2023-12-31",
    status: "completed",
    type: "monthly",
  },
  {
    id: "5",
    title: "Relatório Semanal - Semana 5",
    date: "2024-02-04",
    status: "error",
    type: "weekly",
  },
];

export const deviceData: DeviceData[] = [
  {
    id: "chm-001",
    name: "CHM-001",
    type: "Sensor NOx",
    location: "Unidade Industrial 1",
    status: "online",
    lastSeen: "2024-02-15 10:30",
  },
  {
    id: "chm-002",
    name: "CHM-002",
    type: "Sensor CO2",
    location: "Unidade Industrial 1",
    status: "online",
    lastSeen: "2024-02-15 10:25",
  },
  {
    id: "chm-003",
    name: "CHM-003",
    type: "Sensor SOx",
    location: "Unidade Industrial 2",
    status: "offline",
    lastSeen: "2024-02-14 18:45",
  },
];
