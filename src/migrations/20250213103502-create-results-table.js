'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('results', {
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
        onDelete: 'CASCADE', // Acción al eliminar un circuito
      },
      post1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      post2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      post3: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      post4: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      post5: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      post6: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      post7: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      post8: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      post9: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      post10: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
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

    await queryInterface.addIndex('results', ['circuitId'], { unique: true });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('results');
  },
};
