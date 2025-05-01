import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminLogin = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!correo || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    // 🔐 Aquí se haría la validación real (backend)
    // ⚠️ Por ahora es simulación
    localStorage.setItem('rol', 'admin');
    console.log('Login como admin confirmado');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-fondoInstitucional flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-fondoInstitucional mb-6">Login Administrador</h2>

        {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Correo</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="admin@correo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold transition duration-200"
          >
            Iniciar como Administrador
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/">
            <button className="text-sm text-fondoInstitucional hover:underline">Volver al inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
