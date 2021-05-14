"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("vehicles", {
      vehicle_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vehicle_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vehicle_no: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      engine_no: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      chasis_no: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      acquired_source: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      acquired_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      acquired_price: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      manufacturer_country: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      manufacturer_comp: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      model_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      manufactured_date: {
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
    await queryInterface.dropTable("vehicles");
  },
};
