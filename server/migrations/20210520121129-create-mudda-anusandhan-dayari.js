"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("mudda_anusandhan_dayaris", {
      mudda_anusandhan_dayari_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      jaheri_partibedan_miti: {
        type: Sequelize.STRING,
      },
      kasurko_kisim: {
        type: Sequelize.STRING,
      },
      bigo_pariman: {
        type: Sequelize.STRING,
      },
      jaggako_area: {
        type: Sequelize.STRING,
      },
      jaggako_thegana: {
        type: Sequelize.STRING,
      },
      abhiyog_miti: {
        type: Sequelize.STRING,
      },
      abhiyog_nikaya: {
        type: Sequelize.STRING,
      },
      abhiyog_jariwana: {
        type: Sequelize.STRING,
      },
      kaid: {
        type: Sequelize.STRING,
      },
      bojbahak_jafat_maagdabi: {
        type: Sequelize.STRING,
      },
      pratibadi_sankhya: {
        type: Sequelize.STRING,
      },
      thunchek_dharauti: {
        type: Sequelize.STRING,
      },
      sadharan_tarekh: {
        type: Sequelize.STRING,
      },
      thuna_aadhes: {
        type: Sequelize.STRING,
      },
      faisala_miti: {
        type: Sequelize.STRING,
      },
      faisala_jariwana: {
        type: Sequelize.STRING,
      },
      faisala_kaid: {
        type: Sequelize.STRING,
      },
      bojbahak_jafat: {
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
    await queryInterface.dropTable("mudda_anusandhan_dayaris");
  },
};
