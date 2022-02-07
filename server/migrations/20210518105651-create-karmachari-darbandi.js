"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("karmachari_darbandis", {
      karmachari_darbandi_id: {
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
      karyalaya: {
        type: Sequelize.STRING,
      },
      thegana: {
        type: Sequelize.STRING,
      },
      post: {
        type: Sequelize.STRING,
      },
      kayam_darbandi_sankhya: {
        type: Sequelize.STRING,
      },
      padpurti_sankhya: {
        type: Sequelize.STRING,
      },
      khali_sankhya: {
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
    await queryInterface.dropTable("karmachari_darbandis");
  },
};
