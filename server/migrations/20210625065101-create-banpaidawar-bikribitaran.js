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
        type: Sequelize.INTEGER,
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
      aantarik_dar: {
        type: Sequelize.STRING,
      },
      aantarik_parinam: {
        type: Sequelize.STRING,
      },
      aantarik_rakam: {
        type: Sequelize.STRING,
      },
      aaapurti_dar: {
        type: Sequelize.STRING,
      },
      aapurti_parinam: {
        type: Sequelize.STRING,
      },
      aapurti_rakam: {
        type: Sequelize.STRING,
      },
      bahiya_dar: {
        type: Sequelize.STRING,
      },
      bahiya_parinam: {
        type: Sequelize.STRING,
      },
      bahiya_rakam: {
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
