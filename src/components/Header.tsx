import React from "react";
import { Menu, User, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface HeaderProps {
  title: string;
  subtitle: string;
  onMenuClick: () => void;
}

export function Header({ title, subtitle, onMenuClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 lg:px-6">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div>
            <h1 className="text-sm lg:text-2xl font-semibold text-gray-800 dark:text-gray-200">
              {title}
            </h1>
            <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full opacity-65"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Tempo Real
            </span>
          </div>

          {/* Toggle de Dark Mode */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
            title={theme === "dark" ? "Modo Claro" : "Modo Escuro"}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
}
