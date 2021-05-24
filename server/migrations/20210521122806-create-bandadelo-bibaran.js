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
      niyantran_karta: {
        type: Sequelize.STRING,
      },
      sahabhagi_mahila: {
        type: Sequelize.STRING,
      },
      sahabhagi_purus: {
        type: Sequelize.STRING,
      },
      created_by: {
        type: Sequelize.STRING,
      },
      updated_by: {
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
    await queryInterface.dropTable("bandadelo_bibarans");
  },
};
