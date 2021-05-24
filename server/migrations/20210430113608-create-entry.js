"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("entries", {
      entry_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      entry_qty: {
        type: Sequelize.INTEGER,
      },
      entry_rate: {
        type: Sequelize.INTEGER,
      },
      entry_amt: {
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
    await queryInterface.dropTable("entries");
  },
};
