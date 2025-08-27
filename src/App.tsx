import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard';
import { Relatorios } from '@/pages/Relatorios';
import { Sensores } from '@/pages/Sensores';
import { Configuracoes } from '@/pages/Configuracoes';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/sensores" element={<Sensores />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  );
}

export default App;
