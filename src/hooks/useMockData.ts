import { useState, useEffect } from "react";
import {
  sensorData,
  chartData,
  emissionTrendData,
  weeklyEmissionData,
  monthlyComparisonData,
  pollutantDistribution,
  hourlyEmissionData,
  deviceStatusData,
  reportData,
  deviceData,
  pollutantTrendData,
} from "@/data/mockData";
import { SensorData, ChartData, ReportData, DeviceData } from "@/types";

export function useMockData() {
  const [sensors, setSensors] = useState<SensorData[]>([]);
  const [charts, setCharts] = useState<ChartData[]>([]);
  const [pollutantTrends, setPollutantTrends] = useState<any[]>([]);
  const [emissionTrends, setEmissionTrends] = useState<ChartData[]>([]);
  const [weeklyEmissions, setWeeklyEmissions] = useState<ChartData[]>([]);
  const [monthlyComparison, setMonthlyComparison] = useState<any[]>([]);
  const [pollutants, setPollutants] = useState<any[]>([]);
  const [hourlyEmissions, setHourlyEmissions] = useState<ChartData[]>([]);
  const [deviceStatus, setDeviceStatus] = useState<any[]>([]);
  const [reports, setReports] = useState<ReportData[]>([]);
  const [devices, setDevices] = useState<DeviceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    const loadData = async () => {
      setLoading(true);

      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 500));

      setSensors(sensorData);
      setCharts(chartData);
      setPollutantTrends(pollutantTrendData);
      setEmissionTrends(emissionTrendData);
      setWeeklyEmissions(weeklyEmissionData);
      setMonthlyComparison(monthlyComparisonData);
      setPollutants(pollutantDistribution);
      setHourlyEmissions(hourlyEmissionData);
      setDeviceStatus(deviceStatusData);
      setReports(reportData);
      setDevices(deviceData);

      setLoading(false);
    };

    loadData();
  }, []);

  // Função para atualizar dados de sensores (simular tempo real)
  const updateSensorData = () => {
    setSensors((prevSensors) =>
      prevSensors.map((sensor) => ({
        ...sensor,
        value: Number((sensor.value + (Math.random() - 0.5) * 2).toFixed(1)),
        lastUpdate: new Date().toISOString(),
      }))
    );
  };

  // Função para filtrar relatórios por status
  const getReportsByStatus = (status: ReportData["status"]) => {
    return reports.filter((report) => report.status === status);
  };

  // Função para filtrar dispositivos por status
  const getDevicesByStatus = (status: DeviceData["status"]) => {
    return devices.filter((device) => device.status === status);
  };

  // Estatísticas dos dispositivos
  const deviceStats = {
    total: devices.length,
    online: devices.filter((d) => d.status === "online").length,
    offline: devices.filter((d) => d.status === "offline").length,
    maintenance: devices.filter((d) => d.status === "maintenance").length,
  };

  // Dados de medições (measurementData)
  const measurementData = [
    {
      id: 1,
      date: "2025-02-15",
      time: "08:30",
      pollutant: "CO",
      value: 0.7,
      unit: "ppm",
      status: "completed",
    },
    {
      id: 2,
      date: "2025-02-15",
      time: "09:00",
      pollutant: "NO₂",
      value: 42,
      unit: "µg/m³",
      status: "processing",
    },
    {
      id: 3,
      date: "2025-02-15",
      time: "09:30",
      pollutant: "SO₂",
      value: 15,
      unit: "µg/m³",
      status: "completed",
    },
    {
      id: 4,
      date: "2025-02-15",
      time: "10:00",
      pollutant: "PM2.5",
      value: 25,
      unit: "µg/m³",
      status: "error",
    },
    {
      id: 5,
      date: "2025-02-15",
      time: "10:30",
      pollutant: "CO",
      value: 0.9,
      unit: "ppm",
      status: "completed",
    },
  ];

  return {
    sensors,
    charts,
    pollutantTrends,
    emissionTrends,
    weeklyEmissions,
    monthlyComparison,
    pollutants,
    hourlyEmissions,
    deviceStatus,
    reports,
    devices,
    loading,
    updateSensorData,
    getReportsByStatus,
    getDevicesByStatus,
    deviceStats,
    measurementData,
  };
}
