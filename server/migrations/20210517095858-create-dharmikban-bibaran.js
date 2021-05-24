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
      dharmikban_name: {
        type: Sequelize.STRING,
      },
      community_name: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
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
      renewal_first_date: {
        type: Sequelize.STRING,
      },
      renewal_first_period: {
        type: Sequelize.STRING,
      },
      renewal_second_date: {
        type: Sequelize.STRING,
      },
      renewal_second_period: {
        type: Sequelize.STRING,
      },
      renewal_third_date: {
        type: Sequelize.STRING,
      },
      renewal_third_period: {
        type: Sequelize.STRING,
      },
      renewal_third_date: {
        type: Sequelize.STRING,
      },
      renewal_third_period: {
        type: Sequelize.STRING,
      },
      renewal_fourth_date: {
        type: Sequelize.STRING,
      },
      renewal_fourth_period: {
        type: Sequelize.STRING,
      },
      renewal_fifth_date: {
        type: Sequelize.STRING,
      },
      renewal_fifth_period: {
        type: Sequelize.STRING,
      },
      renewal_sixth_date: {
        type: Sequelize.STRING,
      },
      renewal_sixth_period: {
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
