const Tareas = require('./Tarea')
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Empleado.hasMany(models.Tarea, { as: "tareas", foreignKey: "Id_Empleado"});
    }
  };
  Empleado.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'email'
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false
    },
    puesto: DataTypes.STRING,
    kpi: DataTypes.INTEGER,
    dinero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Empleado',
    tableName: 'Empleado'
  });
  Empleado.sync({alter: true})

  return Empleado;
};