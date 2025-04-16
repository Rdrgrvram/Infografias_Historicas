const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: { type: String, enum: ['administrador', 'editor', 'invitado'], default: 'invitado' },
  autenticacion_2fa: { type: Boolean, default: false },
  fecha_registro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
