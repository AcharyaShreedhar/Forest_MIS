"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("badhi_bibarans", {
      badhi_bibaran_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      badhi_aayeko_sthan: {
        type: Sequelize.STRING,
      },
      dist_id: {
        type: Sequelize.INTEGER,
      },
      manab_ghaite: {
        type: Sequelize.STRING,
      },
      manab_mareko: {
        type: Sequelize.STRING,
      },
      uddar_sankhya: {
        type: Sequelize.STRING,
      },
      badhi_aayeko_miti: {
        type: Sequelize.STRING,
      },
      xeti_bibaran: {
        type: Sequelize.STRING,
      },
      banyajantu_mareko: {
        type: Sequelize.STRING,
      },
      botbiruwa_xeti: {
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
    await queryInterface.dropTable("badhi_bibarans");
  },
};
