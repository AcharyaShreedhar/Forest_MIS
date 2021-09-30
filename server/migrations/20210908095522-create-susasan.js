"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("susasan", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      darta_no: {
        type: Sequelize.STRING,
      },
      arthik_barsa:{
        type: Sequelize.STRING,
      },
      lekha_parixan_miti: {
        type: Sequelize.STRING,
      },
      partibedan_miti: {
        type: Sequelize.STRING,
      },
      sadharansava_miti: {
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
    await queryInterface.dropTable("susasan");
  },
};
