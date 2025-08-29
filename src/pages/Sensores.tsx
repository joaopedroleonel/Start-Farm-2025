import React from "react";
import { Layout } from "@/components/Layout";
import { useMockData } from "@/hooks/useMockData";
import {
  Cpu,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Building,
  Download,
  Pencil,
  Eye,
} from "lucide-react";

export function Sensores() {
  const { devices, deviceStats, loading } = useMockData();

  if (loading) {
    return (
      <Layout
        title="Monitoramento Ambiental"
        subtitle="Relatório em tempo real - Fevereiro 2024"
      >
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Carregando sensores...</div>
        </div>
      </Layout>
    );
  }

  const statusBadge = (status: string) => {
    switch (status) {
      case "online":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5" />
            Normal
          </span>
        );
      case "offline":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-1.5" />
            Offline
          </span>
        );
      case "alert":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5" />
            Alerta
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <Layout
      title="Monitoramento Ambiental"
      subtitle="Relatório em tempo real - Fevereiro 2024"
    >
      <div className="mb-6">
        {/* Header + botão exportar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 dark:text-gray-100">
              Gestão de Dispositivos IoT
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Monitoramento em tempo real de sensores de chaminés industriais
            </p>
          </div>
          <a
            href="lista_sensores.xlsx"
            target="_blank"
            className="w-12 h-12 lg:w-auto lg:h-auto lg:px-4 lg:py-2 bg-white rounded-lg border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          >
            <span className="inline text-sm">
              <Download />
            </span>
          </a>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  Total Dispositivos
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-400">
                  {deviceStats.total}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Cpu className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  Ativos
                </p>
                <p className="text-2xl font-bold text-emerald-500">
                  {deviceStats.online}
                </p>
              </div>
              <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  Alertas
                </p>
                <p className="text-2xl font-bold text-red-500">
                  {deviceStats.maintenance}
                </p>
              </div>
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  Unidades
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-400">
                  {devices.length}
                </p>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center dark:bg-gray-600">
                <Building className="h-5 w-5 text-gray-600 dark:text-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
        {/* Lista de dispositivos */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Lista de Dispositivos
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm dark:bg-gray-800 dark:border-gray-700">
                <option>Todas as Unidades</option>
              </select>
              <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm dark:bg-gray-800 dark:border-gray-700">
                <option>Todos os Status</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dispositivo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Última Leitura
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Localização
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {devices.map((device) => (
                  <tr key={device.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center mr-3">
                          <Cpu className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {device.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {device.type}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {statusBadge(device.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-400">
                      {device.lastSeen}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {device.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          onClick={() => alert("Ação indisponivel no momento")}
                        >
                          <Pencil />
                        </button>
                        <button
                          className="text-gray-400 hover:text-gray-600"
                          onClick={() => alert("Ação indisponivel no momento")}
                        >
                          <Eye />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ações rápidas */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Ações Rápidas
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <button
              className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-gray-600"
              onClick={() => alert("Ação indisponivel no momento")}
            >
              <span className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                +
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Adicionar Dispositivo
              </span>
            </button>

            <button
              className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-gray-600"
              onClick={() => window.location.reload()}
            >
              <span className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                ↻
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Sincronizar Dados
              </span>
            </button>

            <a
              href="/configuracoes"
              className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-gray-600"
            >
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center dark:bg-orange-400">
                ⚙
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Configurações
              </span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
