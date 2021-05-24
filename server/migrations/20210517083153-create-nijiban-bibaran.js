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
        type: Sequelize.STRING,
      },
      nijiban_dhaniko_naam: {
        type: Sequelize.STRING,
      },
      perm_addr: {
        type: Sequelize.STRING,
      },
      curr_addr: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      main_species: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("nijiban_bibarans");
  },
};
