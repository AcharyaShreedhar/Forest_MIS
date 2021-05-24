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
        type: Sequelize.STRING,
      },
      vehicle_no: {
        type: Sequelize.STRING,
      },
      engine_no: {
        type: Sequelize.STRING,
      },
      chasis_no: {
        type: Sequelize.STRING,
      },
      acquired_source: {
        type: Sequelize.STRING,
      },
      acquired_date: {
        type: Sequelize.STRING,
      },
      acquired_price: {
        type: Sequelize.STRING,
      },
      manufacturer_country: {
        type: Sequelize.STRING,
      },
      manufacturer_comp: {
        type: Sequelize.STRING,
      },
      model_name: {
        type: Sequelize.STRING,
      },
      manufactured_date: {
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
    await queryInterface.dropTable("vehicles");
  },
};
