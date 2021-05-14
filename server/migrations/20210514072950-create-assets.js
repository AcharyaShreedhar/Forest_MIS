"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("assets", {
      asset_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      asset_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      asset_loc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      kitta_no: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      home_area: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      land_area: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      unit: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      remarks: {
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
    await queryInterface.dropTable("assets");
  },
};
