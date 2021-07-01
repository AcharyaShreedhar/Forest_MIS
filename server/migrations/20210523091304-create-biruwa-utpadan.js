"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("biruwa_utpadans", {
      biruwa_utpadan_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dist_id:{
        type: Sequelize.INTEGER,
      },
      arthik_barsa: {
        type: Sequelize.STRING,
      },
      narsari_sankhya: {
        type: Sequelize.STRING,
      },
      barga: {
        type: Sequelize.STRING,
      },
      laxya: {
        type: Sequelize.STRING,
      },
      pragati: {
        type: Sequelize.STRING,
      },
      brixyaropan: {
        type: Sequelize.STRING,
      },
      remarks: {
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
    await queryInterface.dropTable("biruwa-utpadans");
  },
};
