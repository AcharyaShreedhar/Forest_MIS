"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("inventories", {
      invent_id: {
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
      item_name: {
        type: Sequelize.STRING,
      },
      entry_id: {
        type: Sequelize.INTEGER,
      },
      exit_id: {
        type: Sequelize.INTEGER,
      },
      invent_date: {
        type: Sequelize.DATE,
      },
      remaining_qty: {
        type: Sequelize.INTEGER,
      },
      remaining_rate: {
        type: Sequelize.INTEGER,
      },
      remaining_amt: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("inventories");
  },
};
