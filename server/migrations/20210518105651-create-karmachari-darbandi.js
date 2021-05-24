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
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("karmachari_darbandis");
  },
};
