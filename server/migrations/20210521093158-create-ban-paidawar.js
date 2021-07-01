"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ban_paidawars", {
      paidawar_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dist_id:{
        type: Sequelize.INTEGER,
      },
      ban_id: {
        type: Sequelize.STRING,
      },
      arthik_barsa: {
        type: Sequelize.STRING,
      },
      mahina: {
        type: Sequelize.STRING,
      },
      kaath: {
        type: Sequelize.STRING,
      },
      daura: {
        type: Sequelize.STRING,
      },
      lavgrahi_sankhya: {
        type: Sequelize.STRING,
      },
      mulyaabhibridi_kar: {
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
    await queryInterface.dropTable("ban_paidawars");
  },
};
