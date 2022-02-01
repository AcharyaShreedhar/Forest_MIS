"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("banxetra_anyaprayojans", {
      banxetra_anyaprayojan_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dist_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      office_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      arthik_barsa: {
        type: Sequelize.STRING,
      },
      sanstha_name:{
        type: Sequelize.STRING,
      },
      uplabdakarta_naam: {
        type: Sequelize.STRING,
      },
      upalabdha_address: {
        type: Sequelize.STRING,
      },
      prayojan:{
        type: Sequelize.STRING,
      },
      xetrafal_temp: {
        type: Sequelize.STRING,
      },
      xetrafal_perm: {
        type: Sequelize.STRING,
      },
      samaya_abadhi: {
        type: Sequelize.STRING,
      },
      rukh_hataunuparne: {
        type: Sequelize.STRING,
      },
      rukh_hatayeko: {
        type: Sequelize.STRING,
      },
      sattajagga_area: {
        type: Sequelize.STRING,
      },
      xetipurti_brixyaropan: {
        type: Sequelize.STRING,
      },
      sattajagga_brixyaropan: {
        type: Sequelize.STRING,
      },
      leejrakam_adhyaadhik: {
        type: Sequelize.STRING,
      },
      barsik_pratibedan: {
        type: Sequelize.STRING,
      },
      prapta_rajaswo: {
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
    await queryInterface.dropTable("banxetra_anyaprayojans");
  },
};
