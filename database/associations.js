const Empleado = require('../models/empleado');
const Tareas = require('../models/Tareas');

// Uno a muchos, 1 a N
//Empleado tiene muchas tareas

Empleado.hasMany(Tareas, { as: "asignado", foreignKey: "Id_Empleado"});
Tareas.belongsTo(Empleado);
