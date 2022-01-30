"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("banpaidawar_bikribitarans", {
      bikribitaran_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dist_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      office_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      banko_kisim: {
        type: Sequelize.INTEGER,
      },
      bikri_medium: {
        type: Sequelize.INTEGER,
      },
      bikri_miti: {
        type: Sequelize.STRING,
      },
      banpaidawar_kisim: {
        type: Sequelize.STRING,
      },
      ekai: {
        type: Sequelize.STRING,
      },
      dar: {
        type: Sequelize.STRING,
      },
      parinam: {
        type: Sequelize.STRING,
      },
      rakam: {
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
    await queryInterface.dropTable("banpaidawar_bikribitarans");
  },
};
