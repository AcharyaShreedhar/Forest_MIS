"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("forest_garden_plots", {
      plot_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      plot_type: {
        type: Sequelize.STRING,
      },
      prajati: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      established_date: {
        type: Sequelize.STRING,
      },
      status: {
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
    await queryInterface.dropTable("forest_garden_plots");
  },
};
