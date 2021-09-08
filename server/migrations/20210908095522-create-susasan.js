"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Susasans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      darta_no: {
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
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Susasans");
  },
};
