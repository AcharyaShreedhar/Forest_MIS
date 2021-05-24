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
        type: Sequelize.DATE,
      },

      emp_office_id: {
        type: Sequelize.INTEGER,
      },
      emp_dept_id: {
        type: Sequelize.INTEGER,
      },
      emp_level_id: {
        type: Sequelize.INTEGER,
      },
      emp_post_id: {
        type: Sequelize.INTEGER,
      },

      emp_rank_id: {
        type: Sequelize.INTEGER,
      },
      emp_status: {
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("employee_histories");
  },
};
