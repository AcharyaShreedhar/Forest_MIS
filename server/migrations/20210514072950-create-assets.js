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
        type: Sequelize.STRING,
      },
      asset_loc: {
        type: Sequelize.STRING,
      },
      kitta_no: {
        type: Sequelize.STRING,
      },
      home_area: {
        type: Sequelize.STRING,
      },
      land_area: {
        type: Sequelize.STRING,
      },
      unit: {
        type: Sequelize.STRING,
      },
      remarks: {
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
    await queryInterface.dropTable("assets");
  },
};
