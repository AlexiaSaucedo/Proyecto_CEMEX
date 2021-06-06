'use strict';

const empleado = require("../models/empleado");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tareas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      tipo: {
        type: Sequelize.STRING
      },
      Id_Empleado: {
        type: Sequelize.INTEGER,
        references: {
          model: "empleado",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      id_estatus: {
        type: Sequelize.INTEGER,
        references: {
          model: "Estatus",
          key: "id_estatus" 
        },
        onDelete: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tareas');
  }
};