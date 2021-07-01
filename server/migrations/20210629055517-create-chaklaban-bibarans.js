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
      dist_id:{
        type: Sequelize.INTEGER,
      },
      darta_no: {
        type: Sequelize.STRING,
      },
      chaklaban_name: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      main_species: {
        type: Sequelize.STRING,
      },
      forest_type: {
        type: Sequelize.STRING,
      },
      handover_date: {
        type: Sequelize.STRING,
      },
      forest_maujdat: {
        type: Sequelize.STRING,
      },
      nikasi_timber: {
        type: Sequelize.STRING,
      },
      nikasi_wood: {
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
