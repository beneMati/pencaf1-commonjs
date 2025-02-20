'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('predictions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', key: 'id',
        },
        onDelete: 'CASCADE',
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
      prediction1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      prediction2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      prediction3: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      prediction4: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      prediction5: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      prediction6: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      prediction7: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      prediction8: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      prediction9: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drivers', key: 'id',
        },
        onDelete: 'NO ACTION',
      },
      prediction10: {
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
  },

  async down (queryInterface) {
    await queryInterface.dropTable('predictions');
  },
};
