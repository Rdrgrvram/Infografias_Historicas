import React, { useState } from 'react';
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
} from 'lucide-react';
import CrearInfografia from '../components/CrearInfografia';
import InfografiaCard from '../components/InfografiaCard';
import ExplorarInfografias from '../components/ExplorarInfografias';
import PlantillasInfografia from '../components/PlantillasInfografia';
import GestionUsuarios from '../components/GestionUsuarios'; // si ya existe

const Dashboard = () => {
  const [vistaActiva, setVistaActiva] = useState('inicio');
  const rol = localStorage.getItem('rol') || 'editor';
  console.log('Rol detectado en Dashboard:', localStorage.getItem('rol'));


  const datosSimulados = [
    {
      id: 1,
      titulo: 'Revolución de Chuquisaca',
      fecha: '25 de mayo de 1809',
      imagen: 'https://picsum.photos/id/1011/400/200',
    },
    {
      id: 2,
      titulo: 'Independencia de Bolivia',
      fecha: '6 de agosto de 1825',
      imagen: 'https://picsum.photos/id/1015/400/200',
    },
    {
      id: 3,
      titulo: 'Guerra del Pacífico',
      fecha: '1879 - 1884',
      imagen: 'https://picsum.photos/id/1016/400/200',
    },
  ];

  return (
    <div className="min-h-screen flex font-inter">
      {/* SIDEBAR */}
      <aside className="w-64 bg-fondoInstitucional text-white p-6 space-y-6 shadow-md">
        <div className="flex items-center gap-3 mb-8 text-lg font-semibold">
          <LayoutDashboard className="w-6 h-6 text-orange-400" />
          <span>Generador de Infografías</span>
        </div>

        <nav className="space-y-4 text-sm">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" active={vistaActiva === 'inicio'} onClick={() => setVistaActiva('inicio')} />

          {(rol === 'editor' || rol === 'admin') && (
            <SidebarItem icon={<FolderOpen size={18} />} label="Mis Infografías" active={vistaActiva ==='mis'} onClick={() => setVistaActiva('mis')} />
          )}

          {(rol === 'editor' || rol === 'admin') && (
            <SidebarItem icon={<FileText size={18} />} label="Crear Infografía" active={vistaActiva ==='crear'} onClick={() => setVistaActiva('crear')} />
          )}

          <SidebarItem icon={<Layers size={18} />} label="Plantillas" active={vistaActiva === 'plantillas'} onClick={() => setVistaActiva('plantillas')} />

          <SidebarItem icon={<Search size={18} />} label="Explorar" active={vistaActiva === 'explorar'} onClick={() => setVistaActiva('explorar')} />

          {rol === 'admin' && (
            <SidebarItem icon={<Users size={18} />} label="Usuarios" active={vistaActiva === 'usuarios'} onClick={() => setVistaActiva('usuarios')} />
          )}
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 bg-gray-50 p-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">Hola, Rodrigo 👋</h1>
            <p className="text-sm text-gray-600">
              Rol actual: <strong>{rol}</strong>
            </p>
          </div>
          <div className="text-right">
            <select className="border border-gray-300 px-3 py-1 rounded text-sm">
              <option>Rodrigo</option>
              <option>Salir</option>
            </select>
          </div>
        </div>

        {/* VISTAS */}
        {vistaActiva === 'inicio' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {(rol === 'editor' || rol === 'admin') && (
              <>
                <CardDashboard icon={<Plus size={28} />} label="Crear nueva infografía" onClick={() => setVistaActiva('crear')} />
                <CardDashboard icon={<FolderOpen size={28} />} label="Ver infografías guardadas" onClick={() => setVistaActiva('mis')} />
              </>
            )}
            <CardDashboard icon={<Search size={28} />} label="Buscar eventos históricos" onClick={() => setVistaActiva('explorar')} />
            <CardDashboard icon={<FileText size={28} />} label="Explorar infografías públicas" onClick={() => setVistaActiva('explorar')} />
          </div>
        )}

        {vistaActiva === 'crear' && (rol === 'editor' || rol === 'admin') && <CrearInfografia />}

        {vistaActiva === 'mis' && (rol === 'editor' || rol === 'admin') && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-fondoInstitucional">Mis Infografías</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {datosSimulados.map((item) => (
                <InfografiaCard key={item.id} infografia={item} />
              ))}
            </div>
          </div>
        )}

        {vistaActiva === 'plantillas' && <PlantillasInfografia />}
        {vistaActiva === 'explorar' && <ExplorarInfografias />}
        {vistaActiva === 'usuarios' && rol === 'admin' && <GestionUsuarios />}
      </main>
    </div>
  );
};

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition ${
      active ? 'bg-orange-500 text-white' : 'hover:bg-gray-700'
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const CardDashboard = ({ icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-4 border border-gray-200 p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition cursor-pointer"
  >
    <div className="text-orange-500">{icon}</div>
    <div className="text-lg font-medium">{label}</div>
  </div>
);

export default Dashboard;
