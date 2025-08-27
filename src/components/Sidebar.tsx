import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart3, FileText, Cpu, Settings, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Relatórios", href: "/relatorios", icon: FileText },
  { name: "Sensores", href: "/sensores", icon: Cpu },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
];

const previousReports = [
  { title: "Dezembro 2024", date: "Gerado em 01/01/2025" },
  { title: "Novembro 2024", date: "Gerado em 01/12/2024" },
  { title: "Outubro 2024", date: "Gerado em 01/11/2024" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00000087] z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header da Sidebar */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.4375 3.37501C5.28828 3.37501 3.46992 4.78322 2.85195 6.72462C3.7707 6.25978 4.80703 6.00001 5.90625 6.00001H8.3125C8.55313 6.00001 8.75 6.19689 8.75 6.43751C8.75 6.67814 8.55313 6.87501 8.3125 6.87501H7.875H5.90625C5.45234 6.87501 5.01211 6.92697 4.58828 7.02267C3.88008 7.184 3.22109 7.47111 2.63594 7.86212C1.04727 8.92033 0 10.7277 0 12.7813V13.2188C0 13.5824 0.292578 13.875 0.65625 13.875C1.01992 13.875 1.3125 13.5824 1.3125 13.2188V12.7813C1.3125 11.4496 1.87852 10.252 2.78359 9.41251C3.325 11.477 5.20352 13 7.4375 13H7.46484C11.077 12.9809 14 9.42072 14 5.03205C14 3.8672 13.7949 2.75978 13.423 1.76173C13.352 1.57306 13.0758 1.58126 12.9801 1.759C12.466 2.7215 11.4488 3.37501 10.2812 3.37501H7.4375Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                EcoMonitor
              </h1>
            </div>

            {/* Botão de fechar para mobile */}
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navegação */}
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/50 text-blue-500 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Relatórios Anteriores */}
        <div className="p-4 mt-8">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
            Relatórios Anteriores
          </h3>
          <div className="flex flex-col space-y-3">
            {previousReports.map((report, index) => (
              <a href="relatorio_anterior.xlsx" target="_blank">
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3"
                >
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {report.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {report.date}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
