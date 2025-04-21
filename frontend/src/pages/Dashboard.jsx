import React from 'react';
import { Link } from 'react-router-dom';
import {
  Plus,
  FolderOpen,
  Search,
  FileText,
  Home,
  Database,
  Layers,
  Users,
  LayoutDashboard,
} from 'lucide-react'; // usa lucide-react para íconos modernos

const Dashboard = () => {
  return (
    <div className="min-h-screen flex font-inter">
      {/* Sidebar */}
      <aside className="w-64 bg-fondoInstitucional text-white p-6 space-y-6 shadow-md">
        <div className="flex items-center gap-3 mb-8 text-lg font-semibold">
          <LayoutDashboard className="w-6 h-6 text-orange-400" />
          <span>Generador de Infografías Históricas Automatizadas</span>
        </div>

        <nav className="space-y-4 text-sm">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" active />
          <SidebarItem icon={<FolderOpen size={18} />} label="Mis Infografías" />
          <SidebarItem icon={<FileText size={18} />} label="Generador de Infografías" />
          <SidebarItem icon={<Database size={18} />} label="Base de Datos Histórica" />
          <SidebarItem icon={<Layers size={18} />} label="Gestión de Plantillas" />
          <SidebarItem icon={<Search size={18} />} label="Explorar Infografías" />
          <SidebarItem icon={<Users size={18} />} label="Administración de Usuarios" />
        </nav>
      </aside>

      {/* Área principal */}
      <main className="flex-1 bg-gray-50 p-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">Hola, Rodrigo 👋</h1>
            <p className="text-sm text-gray-600">Tu última actividad reciente fue <strong>hace 3 horas</strong></p>
            <p className="text-sm text-gray-600">Tu rol actual: <strong>Editor</strong></p>
          </div>
          <div className="text-right">
            <select className="border border-gray-300 px-3 py-1 rounded text-sm">
              <option>Rodrigo</option>
              <option>Salir</option>
            </select>
          </div>
        </div>

        {/* Cuatro acciones principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <CardDashboard icon={<Plus size={28} />} label="Crear nueva infografía" />
          <CardDashboard icon={<FolderOpen size={28} />} label="Ver infografías guardadas" />
          <CardDashboard icon={<Search size={28} />} label="Buscar eventos históricos" />
          <CardDashboard icon={<FileText size={28} />} label="Explorar infografías públicas" />
        </div>
      </main>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition ${
      active ? 'bg-orange-500 text-white' : 'hover:bg-gray-700'
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const CardDashboard = ({ icon, label }) => (
  <div className="flex items-center gap-4 border border-gray-200 p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition cursor-pointer">
    <div className="text-orange-500">{icon}</div>
    <div className="text-lg font-medium">{label}</div>
  </div>
);

export default Dashboard;
