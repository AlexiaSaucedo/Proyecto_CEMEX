'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tarea.belongsTo(models.Tarea, {as: "autor", foreignKey: "Id_Empleado"})
    }
  };
  Tarea.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    descripcion: DataTypes.TEXT,

    tipo: DataTypes.STRING,

    Id_Empleado: {
      type: DataTypes.INTEGER,
      references: {
        model: "empleado",
        key: "id"
      },
      onDelete: "CASCADE"
    }

  }, {
    sequelize,
    modelName: 'Tarea',
    tableName: 'Tareas'
  });
  Tarea.sync({alter: true})
  return Tarea;
};

