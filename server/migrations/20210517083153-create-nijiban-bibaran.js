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
      dist_id:{
        type: Sequelize.INTEGER,
      },
      darta_no: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("nijiban_bibarans");
  },
};
