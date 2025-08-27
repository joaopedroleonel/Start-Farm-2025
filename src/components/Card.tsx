import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6",
      className
    )}>
      {children}
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: React.ReactNode;
  status?: 'online' | 'offline' | 'warning';
  stats?: {
    max: number;
    min: number;
    avg: number;
  };
  iconBgColor?: string;
}

export function MetricCard({ 
  title, 
  value, 
  unit, 
  icon, 
  status = 'online',
  stats,
  iconBgColor = 'bg-blue-100 dark:bg-blue-900/50'
}: MetricCardProps) {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    warning: 'bg-yellow-500'
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center",
            iconBgColor
          )}>
            {icon}
          </div>
        </div>
        <div className={cn("w-3 h-3 rounded-full", statusColors[status])}></div>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 font-poppins">
          {title} {unit && `(${unit})`}
        </p>
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-poppins">
          {value}
        </p>
      </div>
      
      {stats && (
        <div className="flex items-center space-x-4 mt-4 text-xs text-gray-500 dark:text-gray-400 font-poppins">
          <span>Máx: {stats.max}</span>
          <span>Mín: {stats.min}</span>
          <span>Méd: {stats.avg}</span>
        </div>
      )}
    </Card>
  );
}

