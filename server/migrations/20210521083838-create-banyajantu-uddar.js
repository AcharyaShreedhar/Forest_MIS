"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("banyajantu_uddars", {
      banyajantu_uddar_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      miti: {
        type: Sequelize.STRING,
      },
      sthaniya_taha: {
        type: Sequelize.STRING,
      },
      samaya: {
        type: Sequelize.STRING,
      },
      samraxit_xetra: {
        type: Sequelize.STRING,
      },
      banyajantuko_naam: {
        type: Sequelize.STRING,
      },
      banyajantuko_umer: {
        type: Sequelize.STRING,
      },
      banyajantuko_abastha: {
        type: Sequelize.STRING,
      },
      mareko_karan: {
        type: Sequelize.STRING,
      },
      banxetra_duri: {
        type: Sequelize.STRING,
      },
      anya_bibaran: {
        type: Sequelize.STRING,
      },
      remarks: {
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
    await queryInterface.dropTable("banyajantu_uddars");
  },
};
