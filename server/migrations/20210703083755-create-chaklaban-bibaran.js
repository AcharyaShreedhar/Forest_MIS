"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("chaklaban_bibarans", {
      chaklaban_bibaran_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      chaklaban_naam: {
        type: Sequelize.STRING,
      },
      darta_no: {
        type: Sequelize.STRING,
      },
      darta_miti: {
        type: Sequelize.STRING,
      },
      dist_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      office_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      dalit_ghardhuri: {
        type: Sequelize.INTEGER,
      },
      janjati_ghardhuri: {
        type: Sequelize.INTEGER,
      },
      anya_ghardhuri: {
        type: Sequelize.INTEGER,
      },
      female: {
        type: Sequelize.INTEGER,
      },
      male: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("chaklaban_bibarans");
  },
};
