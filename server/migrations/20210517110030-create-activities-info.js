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
        allowNull: false,
        type: Sequelize.STRING,
      },
      fiscal_year: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      area: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      production_from_conservation_timber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      production_from_conservation_wood: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      employment_generated_workingday: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      withingroup_timber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      withingroup_wood: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      outsidegroup_timber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      outsidegroup_wood: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      maujdat_timber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      maujdat_wood: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      annual_income: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      annual_expenditure: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      netannual_saving: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      niyamit_rojgar_count: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      community_udhyam_bibaran: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      annual_bibaran: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lekha_parikshyan: {
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
    await queryInterface.dropTable("activities_infos");
  },
};
