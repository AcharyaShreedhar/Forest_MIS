'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bachat_bibarans', {
      bachat_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      samuhako_naam: {
        type: Sequelize.STRING
      },
      samuhako_naam: {
        type: Sequelize.STRING
      },
      bachatma_gharduri: {
        type: Sequelize.STRING
      },
      bachat_rakam: {
        type: Sequelize.STRING
      },
      lagani_rakam: {
        type: Sequelize.STRING
      },
      sahakariko_rakam: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('bachat_bibarans');
  }
};