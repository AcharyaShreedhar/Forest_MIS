'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nadikinarsamrakshyan_bibarans', {
      nadikinarsamrakshyan_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dist_id: {
        type: Sequelize.INTEGER
      },
      darta_no:{
        type: Sequelize.STRING
      },
      sthan: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.STRING
      },
      karyakram_miti: {
        type: Sequelize.STRING
      },
      conservation_area: {
        type: Sequelize.STRING
      },
      affected_area: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING,
      },
      updated_by: {
        type: Sequelize.STRING,
      },
      updated_by: {
        type: Sequelize.STRING
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
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('nadikinarsamrakshyan_bibarans');
  }
};