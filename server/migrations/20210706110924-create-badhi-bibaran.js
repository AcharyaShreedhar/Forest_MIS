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
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      office_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      manab_ghaite: {
        type: Sequelize.INTEGER,
      },
      manab_mareko: {
        type: Sequelize.INTEGER,
      },
      uddar_sankhya: {
        type: Sequelize.INTEGER,
      },
      badhi_aayeko_miti: {
        type: Sequelize.STRING,
      },
      xeti_bibaran: {
        type: Sequelize.STRING,
      },
      banyajantu_mareko: {
        type: Sequelize.INTEGER,
      },
      botbiruwa_xeti: {
        type: Sequelize.INTEGER,
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
