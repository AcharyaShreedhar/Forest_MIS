"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("activities_infos", {
      activities_info_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      samudayikban_naam: {
        type: Sequelize.STRING,
      },
      fiscal_year: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      production_from_conservation_timber: {
        type: Sequelize.STRING,
      },
      production_from_conservation_wood: {
        type: Sequelize.STRING,
      },
      employment_generated_workingday: {
        type: Sequelize.STRING,
      },
      withingroup_timber: {
        type: Sequelize.STRING,
      },
      withingroup_wood: {
        type: Sequelize.STRING,
      },
      outsidegroup_timber: {
        type: Sequelize.STRING,
      },
      outsidegroup_wood: {
        type: Sequelize.STRING,
      },
      maujdat_timber: {
        type: Sequelize.STRING,
      },
      maujdat_wood: {
        type: Sequelize.STRING,
      },
      annual_income: {
        type: Sequelize.STRING,
      },
      annual_expenditure: {
        type: Sequelize.STRING,
      },
      netannual_saving: {
        type: Sequelize.STRING,
      },
      niyamit_rojgar_count: {
        type: Sequelize.STRING,
      },
      community_udhyam_bibaran: {
        type: Sequelize.STRING,
      },
      annual_bibaran: {
        type: Sequelize.STRING,
      },
      lekha_parikshyan: {
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
    await queryInterface.dropTable("activities_infos");
  },
};
