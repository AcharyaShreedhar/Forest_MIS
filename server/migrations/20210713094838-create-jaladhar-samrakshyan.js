"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("jaladhar_samrakshyans", {
      jaladhar_samrakshyan_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dist_id: {
        type: Sequelize.INTEGER,
      },
      sthan: {
        type: Sequelize.STRING,
      },
      qty: {
        type: Sequelize.STRING,
      },
      karyakram_miti: {
        type: Sequelize.STRING,
      },
      laagat: {
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
    await queryInterface.dropTable("jaladhar_samrakshyans");
  },
};
