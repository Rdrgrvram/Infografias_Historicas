import React from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';

const InfografiaCard = ({ infografia }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={infografia.imagen || 'https://via.placeholder.com/400x200?text=Infografía'}
        alt={infografia.titulo}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-fondoInstitucional mb-1">
          {infografia.titulo}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{infografia.fecha}</p>
        <div className="flex justify-between mt-4 text-sm">
          <button className="flex items-center gap-1 text-blue-600 hover:underline">
            <Eye size={16} /> Ver
          </button>
          <button className="flex items-center gap-1 text-orange-500 hover:underline">
            <Edit size={16} /> Editar
          </button>
          <button className="flex items-center gap-1 text-red-600 hover:underline">
            <Trash2 size={16} /> Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfografiaCard;
