import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    rol: 'invitado'
  });

  const [mensaje, setMensaje] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    try {
      const res = await axios.post('http://localhost:5000/usuarios', usuario);
      setMensaje(res.data.mensaje);
      setUsuario({ nombre: '', correo: '', contraseña: '', rol: 'invitado' });
      obtenerUsuarios(); // Recargar lista
    } catch (err) {
      setMensaje('Error al crear el usuario');
    }
  };

  const obtenerUsuarios = async () => {
    try {
      const res = await axios.get('http://localhost:5000/usuarios');
      setUsuarios(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div style={{ maxWidth: '700px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={usuario.nombre} onChange={handleChange} required /><br /><br />
        <input type="email" name="correo" placeholder="Correo" value={usuario.correo} onChange={handleChange} required /><br /><br />
        <input type="password" name="contraseña" placeholder="Contraseña" value={usuario.contraseña} onChange={handleChange} required /><br /><br />
        <select name="rol" value={usuario.rol} onChange={handleChange}>
          <option value="invitado">Invitado</option>
          <option value="editor">Editor</option>
          <option value="administrador">Administrador</option>
        </select><br /><br />
        <button type="submit">Crear Usuario</button>
      </form>

      {mensaje && <p style={{ marginTop: '20px' }}>{mensaje}</p>}

      <h3 style={{ marginTop: '40px' }}>Usuarios registrados</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u._id}>
              <td>{u.nombre}</td>
              <td>{u.correo}</td>
              <td>{u.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
