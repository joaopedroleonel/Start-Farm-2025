import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/Card";
import { useMockData } from "@/hooks/useMockData";
import {
  FileText,
  Filter,
  CheckCircle,
  XCircle,
  FileSpreadsheet,
  FileDown,
} from "lucide-react";

export function Relatorios() {
  const { loading, measurementData } = useMockData();
  const [selectedPeriod, setSelectedPeriod] = useState("Últimos 7 dias");
  const [selectedPollutant, setSelectedPollutant] = useState("Todos");
  const [selectedUnit, setSelectedUnit] = useState("Todas");

  if (loading) {
    return (
      <Layout
        title="Monitoramento Ambiental"
        subtitle="Relatório em tempo real - Fevereiro 2024"
      >
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Carregando relatórios...</div>
        </div>
      </Layout>
    );
  }

  const formatDateTime = (date: string, time: string) =>
    `${new Date(date).toLocaleDateString("pt-BR")} ${time}`;

  const getLegalLimit = (pollutant: string) => {
    if (pollutant === "CO") return "1 ppm";
    if (pollutant === "NO₂") return "100 µg/m³";
    if (pollutant === "SO₂") return "80 µg/m³";
    return "25 µg/m³";
  };

  const handleApplyFilters = () => {
    alert("Filtros aplicados! (Mock)");
  };

  return (
    <Layout
      title="Monitoramento Ambiental"
      subtitle="Relatório em tempo real - Fevereiro 2024"
    >
      <div className="space-y-6 max-w-full overflow-x-hidden">
        {/* Filtros */}
        <Card className="dark:bg-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-4 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Período:
                </label>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-full sm:w-auto border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700"
                >
                  <option>Últimos 7 dias</option>
                  <option>Últimos 30 dias</option>
                  <option>Últimos 90 dias</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Poluente:
                </label>
                <select
                  value={selectedPollutant}
                  onChange={(e) => setSelectedPollutant(e.target.value)}
                  className="w-full sm:w-auto border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700"
                >
                  <option>Todos</option>
                  <option>CO</option>
                  <option>NO₂</option>
                  <option>SO₂</option>
                  <option>PM2.5</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Unidade:
                </label>
                <select
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  className="w-full sm:w-auto border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700"
                >
                  <option>Todas</option>
                  <option>Unidade A</option>
                  <option>Unidade B</option>
                  <option>Unidade C</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleApplyFilters}
              className="w-full lg:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-600"
            >
              <Filter className="h-4 w-4" />
              Aplicar Filtros
            </button>
          </div>
        </Card>

        {/* Dados de Medição */}
        <Card className="dark:bg-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                Dados de Medição
              </h2>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                {measurementData.length} registros
              </span>
            </div>

            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              <a
                href="tabela_poluentes.pdf"
                target="_blank"
                className="flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2"
              >
                <FileText className="h-4 w-4 text-red-500" />
                PDF
              </a>
              <a
                href="tabela_poluentes.xlsx"
                target="_blank"
                className="flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2"
              >
                <FileSpreadsheet className="h-4 w-4 text-green-500" />
                Excel
              </a>
              <a
                href="tabela_poluentes.csv"
                target="_blank"
                className="flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2"
              >
                <FileDown className="h-4 w-4 text-blue-500" />
                CSV
              </a>
            </div>
          </div>

          {/* ======= LISTA (Mobile) ======= */}
          <div className="md:hidden space-y-3">
            {measurementData.map((d) => (
              <div
                key={d.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`inline-block w-2.5 h-2.5 rounded-full ${
                      d.status === "completed"
                        ? "bg-green-500"
                        : d.status === "error"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                    aria-label={d.status}
                  />
                  <span className="text-sm font-medium">{d.pollutant}</span>
                  <span className="ml-auto text-xs text-gray-500">
                    {formatDateTime(d.date, d.time)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-500">Valor</span>
                    <span className="font-medium">
                      {d.value} {d.unit}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Limite</span>
                    <span className="font-medium">
                      {getLegalLimit(d.pollutant)}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Unidade</span>
                    <span className="font-medium">
                      Unidade{" "}
                      {d.id % 3 === 0 ? "C" : d.id % 2 === 0 ? "B" : "A"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Conformidade</span>
                    <span className="font-medium inline-flex items-center gap-1">
                      {d.status === "completed" ? (
                        <>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          OK
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 text-red-500" />
                          Falha
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ======= TABELA (≥ md) ======= */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 md:px-6 py-3 text-left font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left font-medium text-gray-500 uppercase whitespace-nowrap">
                    Data/Hora
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left font-medium text-gray-500 uppercase">
                    Poluente
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left font-medium text-gray-500 uppercase">
                    Valor
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left font-medium text-gray-500 uppercase">
                    Limite
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left font-medium text-gray-500 uppercase">
                    Unidade
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left font-medium text-gray-500 uppercase">
                    Conformidade
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {measurementData.map((d) => (
                  <tr
                    key={d.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <td className="px-4 md:px-6 py-4">
                      <span
                        className={`inline-block w-3 h-3 rounded-full ${
                          d.status === "completed"
                            ? "bg-green-500"
                            : d.status === "error"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        }`}
                      />
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      {formatDateTime(d.date, d.time)}
                    </td>
                    <td className="px-4 md:px-6 py-4">{d.pollutant}</td>
                    <td className="px-4 md:px-6 py-4 font-medium">
                      {d.value} {d.unit}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-gray-500">
                      {getLegalLimit(d.pollutant)}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-gray-500">
                      Unidade{" "}
                      {d.id % 3 === 0 ? "C" : d.id % 2 === 0 ? "B" : "A"}
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      {d.status === "completed" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginação */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 w-full">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Mostrando {measurementData.length} de {measurementData.length}{" "}
              resultados
            </div>
            <div className="flex items-center gap-2">
              <button
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 cursor-not-allowed"
                disabled
              >
                Anterior
              </button>
              <button className="bg-blue-500 border border-blue-500 rounded-lg px-3 py-2 text-sm font-medium text-white">
                1
              </button>
              <button className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                Próximo
              </button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
