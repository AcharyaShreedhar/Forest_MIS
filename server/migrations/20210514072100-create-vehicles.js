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
      dist_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      office_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("vehicles");
  },
};
