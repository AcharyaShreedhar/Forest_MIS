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
        allowNull: false,
        type: Sequelize.STRING,
      },
      entry_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      exit_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      invent_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      remaining_qty: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      remaining_rate: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      remaining_amt: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("inventories");
  },
};
