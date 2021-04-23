"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("employee_histories", {
      hist_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hist_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      emp_office_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_dept_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_level_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_post_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      emp_rank_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      emp_status: {
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
    await queryInterface.dropTable("employee_histories");
  },
};
