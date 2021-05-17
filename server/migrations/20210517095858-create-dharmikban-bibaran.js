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
        allowNull: false,
        type: Sequelize.STRING,
      },
      community_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      area: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      main_species: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      forest_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      handover_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_first_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_first_period: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_second_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_second_period: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_third_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_third_period: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_third_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_third_period: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_fourth_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_fourth_period: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_fifth_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_fifth_period: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_sixth_date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewal_sixth_period: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      forest_maujdat: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      renewaldate: {
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
    await queryInterface.dropTable("dharmikban_bibarans");
  },
};
