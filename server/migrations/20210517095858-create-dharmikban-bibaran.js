"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("dharmikban_bibarans", {
      dharmikban_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dist_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      office_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      darta_no: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dharmikban_name: {
        type: Sequelize.STRING,
      },
      community_name: {
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
      forest_type: {
        type: Sequelize.STRING,
      },
      handover_date: {
        type: Sequelize.STRING,
      },
      forest_maujdat: {
        type: Sequelize.STRING,
      },
      renewaldate: {
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
    await queryInterface.dropTable("dharmikban_bibarans");
  },
};
