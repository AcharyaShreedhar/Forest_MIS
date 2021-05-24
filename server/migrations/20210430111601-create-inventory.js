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

      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("inventories");
  },
};
