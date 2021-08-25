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
      dist_id: {
        type: Sequelize.INTEGER,
      },
      pidit_name: {
        type: Sequelize.STRING,
      },
      pidit_address: {
        type: Sequelize.STRING,
      },
      ghatana_address: {
        type: Sequelize.STRING,
      },
      balinali_noksani: {
        type: Sequelize.STRING,
      },
      anna_bhandaran: {
        type: Sequelize.STRING,
      },

      jagga_bibaran: {
        type: Sequelize.STRING,
      },
      nagarikta_no: {
        type: Sequelize.STRING,
      },
      upabhoktasamiti_name: {
        type: Sequelize.STRING,
      },
      xetigarne_animal: {
        type: Sequelize.STRING,
      },
      xeti_miti: {
        type: Sequelize.STRING,
      },
      pasudhan_ghargoth: {
        type: Sequelize.STRING,
      },
      man_injury: {
        type: Sequelize.STRING,
      },
      mag_rakam: {
        type: Sequelize.STRING,
      },
      samitiko_mulyankan_rakam: {
        type: Sequelize.STRING,
      },
      vuktani_rakam: {
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
    await queryInterface.dropTable("banyajantuxeti_bibarans");
  },
};
