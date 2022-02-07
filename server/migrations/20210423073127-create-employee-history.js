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
      dist_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      office_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hist_date: {
        type: Sequelize.STRING,
      },
      
      emp_id:{
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable("employee_histories");
  },
};
