import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/Card";
import { useTheme } from "@/hooks/useTheme";
import {
  Settings,
  Eye,
  EyeOff,
  Save,
  Bell,
  Shield,
  Moon,
  Sun,
  Smartphone,
  Mail,
  Globe,
} from "lucide-react";

export function Configuracoes() {
  const { theme, toggleTheme } = useTheme();
  const [showApiToken, setShowApiToken] = useState(false);
  const [formData, setFormData] = useState({
    apiToken:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjZmMWYwZDM5ODRjNjdhYjA3",
    companyName: localStorage.getItem("companyName") || "EcoTech Industries",
    contactEmail: localStorage.getItem("contactEmail") || "admin@ecotech.com",
    phoneNumber: "+55 11 99999-9999",
    timezone: "America/Sao_Paulo",
    language: "pt-BR",
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    alertThreshold: 85,
    dataRetention: 365,
    autoBackup: true,
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Simular salvamento
    localStorage.setItem("companyName", formData.companyName);
    localStorage.setItem("contactEmail", formData.contactEmail);
    alert("Configurações salvas com sucesso!");
  };

  return (
    <Layout
      title="Monitoramento Ambiental"
      subtitle="Relatório em tempo real - Fevereiro 2024"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 dark:text-gray-100">
            Configurações do Sistema
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Configure os parâmetros de monitoramento e integração da API
          </p>
        </div>

        <div className="space-y-8">
          {/* Configuração da API */}
          <Card>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Settings className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Configuração da API
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                    Url da API
                  </label>
                  <div className="relative">
                    <input
                      disabled
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
                      value="https://api.ecomonitor.com.br"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                    Token de Integração da Empresa
                  </label>
                  <div className="relative">
                    <input
                      disabled
                      type={showApiToken ? "text" : "password"}
                      value={formData.apiToken}
                      onChange={(e) =>
                        handleInputChange("apiToken", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
                      placeholder="Insira o token da API..."
                    />
                    <button
                      type="button"
                      onClick={() => setShowApiToken(!showApiToken)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showApiToken ? (
                        <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                      Email de Contato
                    </label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) =>
                        handleInputChange("contactEmail", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Configurações de Aparência */}
          <Card>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  {theme === "dark" ? (
                    <Moon className="h-4 w-4 text-purple-600" />
                  ) : (
                    <Sun className="h-4 w-4 text-purple-600" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Configurações de Aparência
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {theme === "dark" ? (
                      <Moon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Sun className="h-5 w-5 text-gray-400" />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        Modo Escuro
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Alternar entre tema claro e escuro
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 flex items-center gap-2"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="h-4 w-4" />
                        Modo Claro
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4" />
                        Modo Escuro
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                      Idioma
                    </label>
                    <select
                      value={formData.language}
                      onChange={(e) =>
                        handleInputChange("language", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="pt-BR">Português (Brasil)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-200">
                      Fuso Horário
                    </label>
                    <select
                      value={formData.timezone}
                      onChange={(e) =>
                        handleInputChange("timezone", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="America/Sao_Paulo">
                        São Paulo (GMT-3)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Botão de salvar */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Salvar Configurações
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
