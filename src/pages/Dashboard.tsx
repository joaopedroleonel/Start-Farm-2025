import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { MetricCard, Card } from "@/components/Card"; // <-- Importar Card também
import { Chart } from "@/components/Chart";
import { useMockData } from "@/hooks/useMockData";
import { Wind, Cloud, Droplets, Gauge, AlertCircle, Bell } from "lucide-react";
import { pollutantTrendData } from "@/data/mockData";

export function Dashboard() {
  const { sensors, emissionTrends, pollutants, loading, updateSensorData } =
    useMockData();

  // Simular atualizações em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      updateSensorData();
    }, 10000); // Atualizar a cada 10 segundos

    return () => clearInterval(interval);
  }, [updateSensorData]);

  if (loading) {
    return (
      <Layout
        title="Monitoramento Ambiental"
        subtitle="Relatório em tempo real - Fevereiro 2024"
      >
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Carregando dados...</div>
        </div>
      </Layout>
    );
  }

  const getIconForSensor = (sensorId: string) => {
    switch (sensorId) {
      case "co":
        return <Wind className="h-4 w-4 text-blue-600" />;
      case "no2":
        return <Cloud className="h-4 w-4 text-yellow-600" />;
      case "so2":
        return <Droplets className="h-4 w-4 text-green-600" />;
      case "pm25":
        return <Gauge className="h-4 w-4 text-purple-600" />;
      default:
        return <Wind className="h-4 w-4 text-blue-600" />;
    }
  };

  const getIconBgColor = (sensorId: string) => {
    switch (sensorId) {
      case "co":
        return "bg-blue-100 dark:bg-blue-900/50";
      case "no2":
        return "bg-yellow-100 dark:bg-yellow-900/50";
      case "so2":
        return "bg-green-100 dark:bg-green-900/50";
      case "pm25":
        return "bg-purple-100 dark:bg-purple-900/50";
      default:
        return "bg-blue-100 dark:bg-blue-900/50";
    }
  };

  // Mocks de limites
  const limits = [
    { id: 1, name: "CO", status: "ok" },
    { id: 2, name: "NO₂", status: "alert" },
    { id: 3, name: "SO₂", status: "ok" },
    { id: 4, name: "PM2.5", status: "alert" },
  ];

  // Mocks de alertas
  const alerts = [
    {
      id: 1,
      title: "Níveis de NO₂ acima do limite permitido",
      time: "Há 5 minutos",
      color: "bg-red-50 dark:bg-red-900",
      icon: <AlertCircle className="w-4 h-4 text-red-500 dark:text-red-300" />,
    },
    {
      id: 2,
      title: "CO apresentou leve oscilação",
      time: "Há 20 minutos",
      color: "bg-yellow-50 dark:bg-yellow-900",
      icon: <Bell className="w-4 h-4 text-yellow-500 dark:text-yellow-300" />,
    },
  ];

  return (
    <Layout
      title="Monitoramento Ambiental"
      subtitle="Relatório em tempo real - Fevereiro 2024"
    >
      <div className="space-y-8 ">
        {/* Título da seção */}
        <div className="space-y-2">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 font-poppins dark:text-gray-100">
            Monitoramento de Emissões Atmosféricas
          </h2>
          <p className="text-sm lg:text-base text-gray-600 font-poppins dark:text-gray-400">
            Dados da última semana - Atualizado em tempo real
          </p>
        </div>

        {/* Cards de métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {sensors.map((sensor) => (
            <MetricCard
              key={sensor.id}
              title={sensor.name}
              value={sensor.value}
              unit={sensor.unit}
              icon={getIconForSensor(sensor.id)}
              status={sensor.status}
              stats={{
                max: sensor.max,
                min: sensor.min,
                avg: sensor.avg,
              }}
              iconBgColor={getIconBgColor(sensor.id)}
            />
          ))}
        </div>

        {/* Gráficos principais */}
        <div className=" gap-6">
          <Chart
            title="Evolução dos Poluentes"
            data={pollutantTrendData}
            type="line"
            height={300}
            dataKeys={["CO", "SOx", "NOx", "PM25"]}
            colors={["#3B82F6", "#F59E0B", "#10B981", "#8B5CF6"]}
          />
        </div>

        {/* Status dos Limites + Alertas Recentes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Status dos Limites */}
          <Card className="bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 font-poppins mb-6 dark:text-gray-100">
              Status dos Limites
            </h3>
            <div className="space-y-4">
              {limits.map((limite) => (
                <div
                  key={limite.id}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    limite.status === "ok"
                      ? "bg-green-50 dark:bg-green-900"
                      : "bg-red-50 dark:bg-red-900"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        limite.status === "ok"
                          ? "bg-green-500 dark:bg-green-300"
                          : "bg-red-500 dark:bg-red-300"
                      }`}
                    />
                    <span className="font-medium text-gray-900 font-poppins dark:text-gray-100">
                      {limite.name}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-medium font-poppins ${
                      limite.status === "ok"
                        ? "text-green-600 dark:text-green-300"
                        : "text-red-600 dark:text-red-300"
                    }`}
                  >
                    {limite.status === "ok"
                      ? "Dentro do limite"
                      : "Acima do limite"}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Alertas Recentes */}
          <Card className="bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 font-poppins mb-6 dark:text-gray-100">
              Alertas Recentes
            </h3>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`flex items-start space-x-3 p-3 rounded-lg ${alert.color}`}
                >
                  <div className="w-4 h-4 mt-1 flex-shrink-0">{alert.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 font-poppins dark:text-gray-100">
                      {alert.title}
                    </p>
                    <p className="text-xs text-gray-600 font-poppins dark:text-gray-300">
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
