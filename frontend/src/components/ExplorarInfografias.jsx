import React, { useState } from 'react';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const datosExplorar = [
  {
    id: 1,
    titulo: 'Batalla de Suipacha',
    autor: 'María López',
    fecha: '7 de noviembre de 1810',
    imagen: 'https://picsum.photos/id/1050/400/220',
    votos: 12,
    comentarios: 5,
  },
  {
    id: 2,
    titulo: 'Primer Congreso de Bolivia',
    autor: 'Carlos Ruiz',
    fecha: '11 de agosto de 1825',
    imagen: 'https://picsum.photos/id/1033/400/220',
    votos: 8,
    comentarios: 2,
  },
  {
    id: 3,
    titulo: 'Reformas educativas de 1955',
    autor: 'Ana Quispe',
    fecha: '10 de enero de 1955',
    imagen: 'https://picsum.photos/id/1010/400/220',
    votos: 20,
    comentarios: 9,
  },
];

const ExplorarInfografias = () => {
  const [busqueda, setBusqueda] = useState('');

  const resultados = datosExplorar.filter((item) =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-fondoInstitucional mb-4">Explorar Infografías Públicas</h2>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar por título o autor..."
        className="w-full border border-gray-300 px-4 py-2 rounded mb-6"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* Resultados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resultados.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={item.imagen}
              alt={item.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-fondoInstitucional">{item.titulo}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Por {item.autor} • {item.fecha}
              </p>

              <div className="flex justify-between text-sm mt-4">
                <button className="flex items-center gap-1 text-blue-600 hover:underline">
                  <ThumbsUp size={16} /> {item.votos}
                </button>
                <button className="flex items-center gap-1 text-gray-500 hover:underline">
                  <MessageCircle size={16} /> {item.comentarios}
                </button>
                <button className="flex items-center gap-1 text-orange-500 hover:underline">
                  <Share2 size={16} /> Compartir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {resultados.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No se encontraron infografías con ese criterio.</p>
      )}
    </div>
  );
};

export default ExplorarInfografias;
