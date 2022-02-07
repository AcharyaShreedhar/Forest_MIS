"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bandadelo_bibarans", {
      bandadelo_bibaran_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dist_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      office_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bandadelo_address: {
        type: Sequelize.STRING,
      },
      ban_type: {
        type: Sequelize.STRING,
      },
      ban_prajati: {
        type: Sequelize.STRING,
      },
      xeti_area: {
        type: Sequelize.STRING,
      },
      banpaidawar_xeti: {
        type: Sequelize.STRING,
      },
      niyantran_prayas: {
        type: Sequelize.STRING,
      },
      niyantran_karta: {
        type: Sequelize.STRING,
      },
      sahabhagi_mahila: {
        type: Sequelize.INTEGER,
      },
      sahabhagi_purus: {
        type: Sequelize.INTEGER,
      },
      man_injured: {
        type: Sequelize.INTEGER,
      },
      man_dead: {
        type: Sequelize.INTEGER,
      },
      bandadelo_miti: {
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
    await queryInterface.dropTable("bandadelo_bibarans");
  },
};
