'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Estatus.hasMany(models.Tarea, { as: "tarea", foreignKey: "id_estatus"});
    }
  };
  Estatus.init({
    id_estatus: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nombre_estatus: DataTypes.STRING,
    id_estatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Estatus',
    tableName: 'Estatuses',
    timestamps: false
  });
  Estatus.sync({alter: true})
  return Estatus;
};