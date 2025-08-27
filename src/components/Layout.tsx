import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function Layout({ children, title, subtitle }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 ">
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header
          title={title}
          subtitle={subtitle}
          onMenuClick={handleMenuClick}
        />

        <main className="flex-1 bg-gray-50 p-4 lg:p-8 dark:bg-gray-700 ">
          {children}
        </main>
      </div>
    </div>
  );
}
