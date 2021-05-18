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
        allowNull: false,
        type: Sequelize.STRING,
      },
      kayam_darbandi_sankhya: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      padpurti_sankhya: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      khali_sankhya: {
        allowNull: false,
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
    await queryInterface.dropTable("karmachari_darbandis");
  },
};
