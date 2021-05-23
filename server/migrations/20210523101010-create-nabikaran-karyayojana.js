"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("nabikaran_karyayojanas", {
      nabikaran_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      valid_miti: {
        type: Sequelize.STRING,
      },
      nabikaran_miti: {
        type: Sequelize.STRING,
      },
      nabikaran_abadhi: {
        type: Sequelize.STRING,
      },
      darta_id: {
        type: Sequelize.STRING,
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
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("nabikaran_karyayojanas");
  },
};
