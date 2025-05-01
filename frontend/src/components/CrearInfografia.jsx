import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CrearInfografia = () => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Infografía creada:', { titulo, contenido });
    // Aquí luego se enviaría al backend
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-fondoInstitucional">Crear Infografía</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-2">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            placeholder="Ej. Independencia de Bolivia"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Contenido</label>
          <ReactQuill
            theme="snow"
            value={contenido}
            onChange={setContenido}
            className="bg-white"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold"
        >
          Guardar Infografía
        </button>
      </form>
    </div>
  );
};

export default CrearInfografia;
