"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("nijiban_bibarans", {
      nijiban_bibaran_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      swikrit_miti: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nijiban_dhaniko_naam: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      perm_addr: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      curr_addr: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      area: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      main_species: {
        allowNull: false,
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
    await queryInterface.dropTable("nijiban_bibarans");
  },
};
