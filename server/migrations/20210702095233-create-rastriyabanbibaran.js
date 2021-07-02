"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("rastriyabanbibarans", {
      rastriyabanbibaran_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rastriyaban_naam: {
        type: Sequelize.STRING,
      },
      darta_no: {
        type: Sequelize.STRING,
      },
      darta_miti: {
        type: Sequelize.STRING,
      },
      dist_id: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      main_species: {
        type: Sequelize.STRING,
      },
      qty: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      ghardhuri: {
        type: Sequelize.STRING,
      },
      lav_jana: {
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
    await queryInterface.dropTable("rastriyabanbibarans");
  },
};
