'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('scores', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      circuitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'circuits', // Nombre de la tabla referenciada
          key: 'id', // Columna de la tabla referenciada
        },
        // onDelete: 'SET NULL', // Acción al eliminar un circuito
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Nombre de la tabla referenciada
          key: 'id', // Columna de la tabla referenciada
        },
        onDelete: 'CASCADE', // Acción al eliminar un usuario, elimina todo en scores relacionado.
      },
      score: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    await queryInterface.addIndex('scores', ['circuitId', 'userId'], { unique: true });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('scores');
  },
};
