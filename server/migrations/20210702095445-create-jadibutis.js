'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('jadibutis', {
      jadibuti_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dist_id: {
        type: Sequelize.INTEGER
      },
      jadibuti_thegana: {
        type: Sequelize.STRING
      },
      jadibuti_kisim: {
        type: Sequelize.STRING
      },
      jadibuti_prajati: {
        type: Sequelize.STRING
      },
      jadibuti_laxya: {
        type: Sequelize.STRING
      },
      jadibuti_pragati: {
        type: Sequelize.STRING
      },
      jadibuti_sankhya: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING,
      },
      updated_by: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('jadibutis');
  }
};