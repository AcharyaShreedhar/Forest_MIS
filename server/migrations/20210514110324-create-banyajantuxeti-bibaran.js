"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("banyajantuxeti_bibarans", {
      banyajantuxeti_bibaran_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pidit_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pidit_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      jagga_bibaran: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nagarikta_no: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      upabhoktasamiti_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      xetigarne_animal: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      xeti_miti: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pasudhan_ghargoth: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      man_injury_normal: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      man_injury_medium: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      man_death: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      mag_rakam: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      samitiko_mulyankan_rakam: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vuktani_rakam: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      remarks: {
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
    await queryInterface.dropTable("banyajantuxeti_bibarans");
  },
};
